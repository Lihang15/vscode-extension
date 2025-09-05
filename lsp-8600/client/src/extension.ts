/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import { workspace, ExtensionContext } from 'vscode';
import * as vscode from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';
import { provider } from './ghostTextCompletionProvider';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
	// The server is implemented in node
	const serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);
	//  vscode.languages.onDidChangeDiagnostics((e) => {
    //     const diagnostics = vscode.languages.getDiagnostics();

    //     // 示例：提取当前文件的诊断
    //     const currentFile = vscode.window.activeTextEditor?.document.uri;
    //     const currentDiagnostics = currentFile ? vscode.languages.getDiagnostics(currentFile) : [];

    //   console.log(currentDiagnostics);
	  
    // });

	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
		}
	};

	// Options to control the language client
	const clientOptions: LanguageClientOptions = {
		// Register the server for plain text documents
		documentSelector: [{ scheme: 'file', language: 'flow' },{ scheme: 'file', language: 'signal' },{ scheme: 'file', language: 'tim' },{ scheme: 'file', language: 'binmap' }],
		synchronize: {
			// Notify the server about file changes to '.clientrc files contained in the workspace
			fileEvents: workspace.createFileSystemWatcher('**/.{clientrc,tim,binmap,flow,signal}')
		}
	};

	// Create the language client and start the client.
	client = new LanguageClient(
		'languageServerExample',
		'Language Server Example',
		serverOptions,
		clientOptions
	);

	// Start the client. This will also launch the server
	client.start();
	context.subscriptions.push(
    vscode.languages.registerInlineCompletionItemProvider(
      { language: 'flow' }, // 你的语言 ID
      provider
    ),
	  vscode.languages.registerInlineCompletionItemProvider(
      { language: 'tim' }, // 你的语言 ID
      provider
    ),
	vscode.languages.registerInlineCompletionItemProvider(
      { language: 'signal' }, // 你的语言 ID
      provider
    )
  );

}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
