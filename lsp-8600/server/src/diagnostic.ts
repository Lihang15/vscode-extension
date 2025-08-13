/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	TextDocumentSyncKind,
	InitializeResult,
} from 'vscode-languageserver/node';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';
import { URI } from 'vscode-uri';
import * as fs from 'fs';
import * as path from 'path';
// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

// init workspace 
let workspaceRoot: string | null = null;

connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities;

	// Does the client support the `workspace/configuration` request?
	// If not, we fall back using global settings.
	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// Tell the client that this server supports code completion.
			completionProvider: {
				resolveProvider: true,
				triggerCharacters: [' ']
			},
			inlayHintProvider: true,
			hoverProvider: true,
			definitionProvider: true,
			documentSymbolProvider: true,
			// diagnosticProvider: {
			// 	interFileDependencies: false,
			// 	workspaceDiagnostics: false
			// }
		}
	};
	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};

		 const folder = params.workspaceFolders?.[0]?.uri || params.rootUri;
		 workspaceRoot = folder ? URI.parse(folder).fsPath : null;
	}
	return result;
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
	// ✅ 初始化后，异步扫描一次
  scanAndValidateWorkspace()
});
// 2️⃣ 主动扫描工作区文件并诊断
async function scanAndValidateWorkspace() {
  if (!workspaceRoot) return;

  const exts = ['.tim', '.binmap']; // 只扫描这两种文件
  await walkAndValidate(workspaceRoot, exts);
}

async function walkAndValidate(dir: string, exts: string[]) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
	const fullPath = path.join(dir, entry.name);

	if (entry.isDirectory()) {
	  await walkAndValidate(fullPath, exts); // 递归子目录
	} else {
	  if (exts.some(ext => entry.name.endsWith(ext))) {
		try {
		  const content = await fs.promises.readFile(fullPath, 'utf-8');
		  const diagnostics = await validateTextContent(content, fullPath);

		  // ✅ 主动推送诊断
		  connection.sendDiagnostics({
			uri: URI.file(fullPath).toString(),
			diagnostics
		  });
		} catch (err) {
		  console.error(`❌ 读取文件出错: ${fullPath}`, err);
		}
	  }
	}
  }
}
// The example settings
interface ExampleSettings {
	maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
const documentSettings = new Map<string, Thenable<ExampleSettings>>();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings
		documentSettings.clear();
	} else {
		globalSettings = (
			(change.settings.languageServerExample || defaultSettings)
		);
	}
	// Refresh the diagnostics since the `maxNumberOfProblems` could have changed.
	// We could optimize things here and re-fetch the setting first can compare it
	// to the existing setting, but this is out of scope for this example.
	connection.languages.diagnostics.refresh();
});

// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});


// 3️⃣ 诊断逻辑（可以共用）
async function validateTextContent(text: string, filePath: string): Promise<Diagnostic[]> {
  let diagnostics: Diagnostic[] = [];

  // 👉 检查 d11
  const dPattern = /\bd11\b/g;
  let match: RegExpExecArray | null;
  while ((match = dPattern.exec(text))) {
	diagnostics.push({
	  severity: DiagnosticSeverity.Information,
	  range: {
		start: { line: text.substr(0, match.index).split('\n').length - 1, character: match.index },
		end: { line: text.substr(0, match.index).split('\n').length - 1, character: match.index + match[0].length }
	  },
	  message: `${match[0]} matched pattern d+number.`,
	  source: 'PatternCheck'
	});
  }

  // 👉 2. 检查 SoftwareBinNumber 是否为 66 或 88
  const binPattern = /"SoftwareBinNumber"\s*:\s*(66|88)/g;
  while ((match = binPattern.exec(text))) {
	const value = match[1];
	diagnostics.push({
	  severity: DiagnosticSeverity.Error,
	  range: {
		start: { line: text.substr(0, match.index).split('\n').length - 1, character: match.index },
		end: { line: text.substr(0, match.index).split('\n').length - 1, character: match.index + match[0].length }
	  },
	  data: {error: [66,88]},
	  message: `SoftwareBinNumber has invalid value ${value}. Only values other than 66 and 88 are allowed.`,
	  source: 'BinNumberCheck'
	});
  }

  // 👉 检查括号匹配
  const bracketPairs: { [open: string]: string } = { '{': '}', '[': ']', '(': ')' };
  const openStack: { char: string; index: number }[] = [];
  for (let i = 0; i < text.length; i++) {
	const char = text[i];
	if (char in bracketPairs) {
	  openStack.push({ char, index: i });
	} else if (Object.values(bracketPairs).includes(char)) {
	  const expectedOpen = Object.keys(bracketPairs).find(k => bracketPairs[k] === char);
	  const last = openStack.pop();
	  if (!last || last.char !== expectedOpen) {
		diagnostics.push({
		  severity: DiagnosticSeverity.Error,
		  range: {
			start: { line: text.substr(0, i).split('\n').length - 1, character: i },
			end: { line: text.substr(0, i).split('\n').length - 1, character: i + 1 }
		  },
		  message: `Unmatched closing '${char}'`,
		  source: 'BracketCheck'
		});
	  }
	}
  }

  // 剩余未闭合
  for (const unclosed of openStack) {
	diagnostics.push({
	  severity: DiagnosticSeverity.Error,
	  range: {
		start: { line: text.substr(0, unclosed.index).split('\n').length - 1, character: unclosed.index },
		end: { line: text.substr(0, unclosed.index).split('\n').length - 1, character: unclosed.index + 1 }
	  },
	  message: `Unmatched opening '${unclosed.char}'`,
	  source: 'BracketCheck'
	});
  }

  return diagnostics;
}


// 4️⃣ 打开文件 & 修改文件时，实时诊断
documents.onDidChangeContent(change => {
  validateTextContent(change.document.getText(), URI.parse(change.document.uri).fsPath)
	.then(diagnostics => {
	  connection.sendDiagnostics({ uri: change.document.uri, diagnostics });
	});
});


documents.listen(connection);

// Listen on the connection
connection.listen();