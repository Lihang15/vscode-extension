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
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	DocumentDiagnosticReportKind,
	type DocumentDiagnosticReport,
	Hover,
	SymbolKind,
	DocumentSymbolParams,
	SymbolInformation,
	DefinitionParams,
	Location,
	InlayHint,
	InlayHintKind,
	Position
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

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'languageServerExample'
		});
		documentSettings.set(resource, result);
	}
	return result;
}

// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});

//文档变化了 ，客户端会通知服务端，服务端在缓存中拿出诊断信息，推给problems，需客户端打开文件配合
// connection.languages.diagnostics.on(async (params) => {
// 	const document = documents.get(params.textDocument.uri);
// 	if (document !== undefined) {
// 		return {
// 			kind: DocumentDiagnosticReportKind.Full,
// 			items: await validateTextDocument(document)
// 		} satisfies DocumentDiagnosticReport;
// 	} else {
// 		// We don't know the document. We can either try to read it from disk
// 		// or we don't report problems for it.
// 		return {
// 			kind: DocumentDiagnosticReportKind.Full,
// 			items: []
// 		} satisfies DocumentDiagnosticReport;
// 	}
	
	
// });

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
// documents.onDidChangeContent(change => {
// 	validateTextDocument(change.document);
// });

// async function validateTextDocument(textDocument: TextDocument): Promise<Diagnostic[]> {
// 	const settings = await getDocumentSettings(textDocument.uri);
// 	const text = textDocument.getText();

// 	let problems = 0;
// 	const diagnostics: Diagnostic[] = [];
// 	let match: RegExpExecArray | null;
	
// 	// 2. 检查小写字母+数字（如 d11）
// 	const dPattern = /\bd11\b/g;
// 	while ((match = dPattern.exec(text)) && problems < settings.maxNumberOfProblems) {
// 		problems++;
// 		const diagnostic: Diagnostic = {
// 			severity: DiagnosticSeverity.Information,
// 			range: {
// 				start: textDocument.positionAt(match.index),
// 				end: textDocument.positionAt(match.index + match[0].length)
// 			},
// 			message: `${match[0]} matched pattern d+number.`,
// 			source: 'PatternCheck',
// 			data: { type: 'd-pattern',uri: `${textDocument.uri}` }
// 		};
// 		diagnostics.push(diagnostic);
// 	}

// 	// 3. 检查括号匹配
// 	const bracketPairs: { [open: string]: string } = {
// 		'{': '}',
// 		'[': ']',
// 		'(': ')'
// 	};
// 	const openStack: { char: string; index: number }[] = [];

// 	for (let i = 0; i < text.length; i++) {
// 		const char = text[i];
// 		if (char in bracketPairs) {
// 			openStack.push({ char, index: i });
// 		} else if (Object.values(bracketPairs).includes(char)) {
// 			const expectedOpen = Object.keys(bracketPairs).find(k => bracketPairs[k] === char);
// 			const last = openStack.pop();
// 			if (!last || last.char !== expectedOpen) {
// 				// 多余的右括号
// 				problems++;
// 				diagnostics.push({
// 					severity: DiagnosticSeverity.Error,
// 					range: {
// 						start: textDocument.positionAt(i),
// 						end: textDocument.positionAt(i + 1)
// 					},
// 					message: `Unmatched closing '${char}'`,
// 					source: 'BracketCheck',
// 					data: { type: 'unmatched-close' }
// 				});
// 			}
// 		}
// 	}

// 	// 栈中剩余的为多余的左括号
// 	for (const unclosed of openStack) {
// 		problems++;
// 		diagnostics.push({
// 			severity: DiagnosticSeverity.Error,
// 			range: {
// 				start: textDocument.positionAt(unclosed.index),
// 				end: textDocument.positionAt(unclosed.index + 1)
// 			},
// 			message: `Unmatched opening '${unclosed.char}'`,
// 			source: 'BracketCheck',
// 			data: { type: 'unmatched-open' }
// 		});
// 	}

// 	return diagnostics;
// }

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

connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	connection.console.log('We received a file change event');
});

// This handler provides the initial list of the completion items.
connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		// The pass parameter contains the position of the text document in
		// which code complete got requested. For the example we ignore this
		// info and always provide the same completion items.
		  const doc = documents.get(_textDocumentPosition.textDocument.uri);
			const text = doc?.getText({
				start: { line: _textDocumentPosition.position.line, character: 0 },
				end: _textDocumentPosition.position
			});
		 if (text==='ll ') {
			return [
			{ label: 'a1',kind: CompletionItemKind.Text, data: 1},
			{ label: 'a2', kind: CompletionItemKind.Text,data:2},
			{ label: 'a3',kind: CompletionItemKind.Text,data:3 }
			];
		}else{
			return [
			{
				label: 'VDD_DDR_0P75',
				kind: CompletionItemKind.Text,
				data: 1
			},
			{
				label: 'VDD_ECSERDES_0P75',
				kind: CompletionItemKind.Text,
				data: 2
			},
			{
				label: 'VDDH_SERDES_1P8',
				kind: CompletionItemKind.Text,
				data: 3
			},
			{
				label: 'VDDIO_1_1P8',
				kind: CompletionItemKind.Text,
				data: 4
			},
			{
				label: 'lihang',
				kind: CompletionItemKind.Text,
				data: 5
			},
			
		];
			
		}
		
		
	}
);

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		if (item.data === 1) {
			item.detail = 'Signal Definitely';
			item.documentation = 'VDD_DDR_0P75';
		} else if (item.data === 2) {
			item.detail = 'Signal Definitely';
			item.documentation = 'VDD_ECSERDES_0P75';
		}
		return item;
	}
);
// 悬浮提示
connection.onHover((params): Hover | undefined => {
	
  const document = documents.get(params.textDocument.uri);
  if (!document) return undefined;

  const position = params.position;
  const text = document.getText();
  const lines = text.split('\n');
  const line = lines[position.line];
  
  // 获取当前位置的单词
  const wordRange = getWordRangeAtPosition(line, position.character);
  if (!wordRange) return undefined;

  const word = line.substring(wordRange.start, wordRange.end);
  
  // 根据关键字提供悬浮提示
  const hoverInfo: { [key: string]: string } = {
    'ding': '丁雨欣，男',
    'if': '条件语句：如果条件为真，执行代码块',
    'else': '条件语句：如果前面的条件为假，执行此代码块',
    'for': '循环语句：重复执行代码块',
    'while': '循环语句：当条件为真时重复执行',
    'return': '返回语句：从函数返回值',
    'true': '布尔常量：真值',
    'false': '布尔常量：假值',
    'null': '空值常量：表示空或未定义',
    'function': '函数声明：定义可重用的代码块',
    'var': '变量声明：声明可变变量',
    'const': '常量声明：声明不可变常量',
	'Flow': "DSL 测试流代码块关键字",
	'Signal': "DSL 资源映射代码块关键字",
	"Ports": "测试折叠代码块，变量鬼文本嵌入"
  };

  const info = hoverInfo[word];
  if (info) {
    return {
      contents: {
        kind: 'markdown',
        value: `**${word}**\n\n${info}`
      },
      range: {
        start: { line: position.line, character: wordRange.start },
        end: { line: position.line, character: wordRange.end }
      }
    };
  }

  return undefined;
});

// 辅助函数：获取指定位置的单词范围
function getWordRangeAtPosition(line: string, character: number): { start: number; end: number } | null {
  const wordRegex = /\b\w+\b/g;
  let match;
  
  while ((match = wordRegex.exec(line)) !== null) {
    if (character >= match.index && character <= match.index + match[0].length) {
      return {
        start: match.index,
        end: match.index + match[0].length
      };
    }
  }
  
  return null;
}

function getAllFilesRecursive(dir: string, ext: string, found: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const res = path.resolve(dir, entry.name);
    if (entry.isDirectory()) {
      getAllFilesRecursive(res, ext, found);
    } else if (entry.isFile() && res.endsWith(ext)) {
      found.push(res);
    }
  }

  return found;
}

// 关键字跳转（定义跳转）
connection.onDefinition((params: DefinitionParams): Location[] | null => {
    const document = documents.get(params.textDocument.uri);
	const currentFilePath = URI.parse(params.textDocument.uri).fsPath;
  if (!document || !workspaceRoot) return null;

  const position = params.position;
  const lines = document.getText().split(/\r?\n/);
  const lineText = lines[position.line];
  const wordRange = getWordRangeAtPosition(lineText, position.character);
  if (!wordRange) return null;

  const word = lineText.substring(wordRange.start, wordRange.end);

  // 1️⃣：当前文件中查找
  for (let i = 0; i < lines.length; i++) {
    const idx = lines[i].indexOf(word);
    if (idx !== -1 && i !== position.line) {
      return [{
        uri: document.uri,
        range: {
          start: { line: i, character: idx },
          end: { line: i, character: idx + word.length },
        },
      }];
    }
  }

  // 2️⃣：遍历工作区下所有 .yourlang 文件
  const allFiles = getAllFilesRecursive(workspaceRoot, '.signal');

  for (const filePath of allFiles) {
	if (filePath === currentFilePath) continue;
    const content = fs.readFileSync(filePath, 'utf-8');
    const fileLines = content.split(/\r?\n/);

    for (let i = 0; i < fileLines.length; i++) {
      const idx = fileLines[i].indexOf(word);
      if (idx !== -1) {
        return [{
          uri: URI.file(filePath).toString(),
          range: {
            start: { line: i, character: idx },
            end: { line: i, character: idx + word.length },
          },
        }];
      }
    }
  }

  return null;
});

// 文档符号
connection.onDocumentSymbol((params: DocumentSymbolParams) => {
  const document = documents.get(params.textDocument.uri);
  if (!document) return [];

  const symbols: SymbolInformation[] = [];
  const text = document.getText();
  const lines = text.split('\n');

  lines.forEach((line: string, lineIndex: number) => {
    // 查找函数定义
    const functionMatch = line.match(/function\s+(\w+)/);
    if (functionMatch) {
      symbols.push({
        name: functionMatch[1],
        kind: SymbolKind.Function,
        location: {
          uri: params.textDocument.uri,
          range: {
            start: { line: lineIndex, character: 0 },
            end: { line: lineIndex, character: line.length }
          }
        }
      });
    }

    // 查找变量声明
    const varMatch = line.match(/(?:var|const|let)\s+(\w+)/);
    if (varMatch) {
      symbols.push({
        name: varMatch[1],
        kind: SymbolKind.Variable,
        location: {
          uri: params.textDocument.uri,
          range: {
            start: { line: lineIndex, character: 0 },
            end: { line: lineIndex, character: line.length }
          }
        }
      });
    }
  });

  return symbols;
});

// connection.languages.inlayHint.on((params) => {
//   const document = documents.get(params.textDocument.uri);
//   if (!document) return [];

//   const hints: InlayHint[] = [];

//   const lines = document.getText().split(/\r?\n/);
//   lines.forEach((line, idx) => {
//     const portMatch = line.match(/Port\s+(\w+)\s*{/);
//     if (portMatch) {
//       const portName = portMatch[1];
//       const nextLine = lines[idx + 1];
//       const eqLine = lines[idx + 2];

//       const wvt = nextLine?.match(/WaveformTable\s*=\s*(\w+)/)?.[1];
//       const eqn = eqLine?.match(/EquationSet\s*=\s*(\w+)/)?.[1];

//       const labelParts = [];
//       if (wvt) labelParts.push(`[${wvt}]`);
//       if (eqn) labelParts.push(`[${eqn}]`);

//       if (labelParts.length > 0) {
//         hints.push({
//           position: { line: idx, character: line.length },
//           label: labelParts.join(' '),
//         //   kind: InlayHintKind.Other,
//           paddingLeft: true
//         });
//       }
//     }
//   });

//   return hints;
// });

connection.languages.inlayHint.on((params) => {
  const uri = params.textDocument.uri;
  const doc = documents.get(uri);
  if (!doc) return [];

  const text = doc.getText();
  const lines = text.split('\n');

  const hints: InlayHint[] = [];

  lines.forEach((line, lineNum) => {
 // 匹配 Ports 行中的 [pDDR0] [pDDR_clk] -> 添加 PortName:
   if (line.trim().startsWith('WaveformTable')) {
      const regex = /\[(.*?)\]/g;
      let match: RegExpExecArray | null;
      while ((match = regex.exec(line))) {
        const index = match.index;
        const content = match[1].trim();  // 取出中括号内的内容
        if (index !== undefined) {
          // 判断内容是否为空
          const label = content === '' ? 'xMode: x1' : 'xMode:';
          hints.push({
            position: Position.create(lineNum, index + 1),
            label,
            paddingRight: true,
            kind: InlayHintKind.Parameter
          });
        }
      }
    }

	  if (line.trim().startsWith('TimingSet')) {
     const regex = /\[(.*?)\]/g;
      let match: RegExpExecArray | null;
      while ((match = regex.exec(line))) {
        const index = match.index;
        if (index !== undefined) {
          hints.push({
            position: Position.create(lineNum, index + 1),
            label: `Period:`,
            paddingRight: true,
            kind: InlayHintKind.Parameter
          });
        }
      }
    }

    // 匹配 Ports 行中的 [pDDR0] [pDDR_clk] -> 添加 PortName:
    if (line.trim().startsWith('Ports')) {
      const regex = /\[(.*?)\]/g;
      let match: RegExpExecArray | null;
      while ((match = regex.exec(line))) {
        const index = match.index;
        if (index !== undefined) {
          hints.push({
            position: Position.create(lineNum, index + 1),
            label: `PortList:`,
            paddingRight: true,
            kind: InlayHintKind.Parameter
          });
        }
      }
    }

 // 匹配 SpecVars 行中的 [xxx] [xxx]，分别加 WaveformTable、EquationSet
	if (line.trim().startsWith('SpecVars')) {
	const regex = /\[(.*?)\]/g;  // 匹配 [xxx] 或 []（非贪婪匹配）
	let match: RegExpExecArray | null;
	let i = 0;
	while ((match = regex.exec(line))) {
		let content = match[1]; // 括号里的内容
		let label = '';

		if (i === 0) {
		label = content.trim() === '' ? 'WaveformTable:' : 'WaveformTable:';
		} else if (i === 1) {
		label = content.trim() === '' ? 'EquationSet:' : 'EquationSet:';
		}

		if (label && match.index !== undefined) {
		hints.push({
			position: Position.create(lineNum, match.index + 1),
			label,
			paddingRight: true,
			kind: InlayHintKind.Parameter
		});
		}

		i++;
	}
	}

  });

  return hints;
});



// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
