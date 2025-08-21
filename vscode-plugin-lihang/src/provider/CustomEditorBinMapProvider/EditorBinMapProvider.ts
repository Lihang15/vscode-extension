import * as vscode from 'vscode';
import { getNonce } from '../../util';
// import { customProblems } from '../problems'
import { webviews } from '../../extension'
/**
 * Provider for cat Row editors.
 * 
 * Cat Row editors are used for `.cRow` files, which are just json files.
 * To get started, run this extension and open an empty `.cRow` file in VS Code.
 * 
 * This provider demonstrates:
 * 
 * - Setting up the initial webview for a custom editor.
 * - Loading scripts and styles in a custom editor.
 * - Synchronizing changes between a text document and a custom editor.
 */
export class EditorBinMapProvider implements vscode.CustomTextEditorProvider {

	public static register(context: vscode.ExtensionContext): vscode.Disposable {
		const provider = new EditorBinMapProvider(context);
		const providerRegistration = vscode.window.registerCustomEditorProvider(EditorBinMapProvider.viewType, provider);
		return providerRegistration;
	}

	private static readonly viewType = 'Customs.BinMap';

	private dslDocument: any = {};


	constructor(
		private readonly context: vscode.ExtensionContext
	) { }

	/**
	 * Called when our custom editor is opened.
	 * 
	 * 
	 */
	public async resolveCustomTextEditor(
		document: vscode.TextDocument,
		webviewPanel: vscode.WebviewPanel,
		_token: vscode.CancellationToken
	): Promise<void> {
		// Setup initial content for the webview
		webviewPanel.webview.options = {
			enableScripts: true,
		};
		webviews.set('webview-binmap',webviewPanel)
		webviewPanel.webview.html = this.getHtmlForWebview(webviewPanel.webview);
		this.dslDocument = JSON.parse(document.getText());
		const updateWebview = ()=> {
			// console.log('Messagexxxx:',this.dslDocument);
			// vscode.languages.onDidChangeDiagnostics((e) => {
			// 	// const diagnostics = vscode.languages.getDiagnostics();

			// 	// 示例：提取当前文件的诊断
			// 	// const currentFile = vscode.window.activeTextEditor?.document.uri;
			// 	// const currentDiagnostics: any = currentFile ? vscode.languages.getDiagnostics(currentFile) : [];

			// 	const diagnostics: any=  vscode.languages.getDiagnostics(document.uri)
            //  if(diagnostics.length)
			
			// console.log('lihangq',diagnostics);
			// })
			const diagnostics = vscode.languages.getDiagnostics(document.uri);
            let errorArr: any = []
			if (diagnostics.length) {
			diagnostics.forEach(diag => {
				// console.log('Message:', diag.message);
				// console.log('Range:', diag.range);
				// console.log('Severity:', diag.severity);
				// console.log('Source:', diag.source);
				// VS Code 的 Diagnostic 默认不带 `data` 字段
				// 只有 LSP 服务器（Language Server）发送时带了 `data`，VS Code 会原样透传
				// console.log('Data:', (diag as any).data);
				errorArr.push( (diag as any).data)
			});
			}

			const json = JSON.parse(document.getText());   // 把整个文档解析成对象
			const slicedData = {
				...json,
				tableData: json.tableData.slice(0, 10)    // 只取前10条
			};
			webviewPanel.webview.postMessage({
				type: 'update',
				// text: document.getText(),
				text: JSON.stringify(slicedData),
				diagnostics:errorArr
				// 如果是后端返回数据的话,获取所有testFlow数据，给ui展示
				// text: fetch.serverApi('getTestFlowData')
			});
		}

			

		// Hook up event handlers so that we can synchronize the webview with the text document.
		//
		// The text document acts as our model, so we have to sync change in the document to our
		// editor and sync changes in the editor back to the document.
		// 
		// Remember that a single text document can also be shared between multiple custom
		// editors (this happens for example when you split a custom editor)

		const changeDocumentSubscription = vscode.workspace.onDidChangeTextDocument(e => {
			if (e.document.uri.toString() === document.uri.toString()) {
				// 避免文本变更，没有拿到诊断，ui刷新不了诊断
				 setTimeout(() => updateWebview(), 300);
				 
			}
		});

		// Make sure we get rid of the listener when our editor is closed.
		webviewPanel.onDidDispose(() => {
			changeDocumentSubscription.dispose();
		});

		// Receive message from the webview.
		webviewPanel.webview.onDidReceiveMessage(e => {
			switch (e.type) {
				case 'add':
					this.addNewRow(document);
					return;

				case 'delete':
					this.deleteRow(document, e.id);
					return;

				case 'edit':
					this.editRow(document, e.message);
					return;
				case 'showContextMenu':
					// 创建右键菜单
					// console.log('menua',);
					// const menu = vscode.window.createQuickPick();
					// menu.items = [{ label: 'Custom Command', detail: 'Execute custom command' }];
					// console.log('menu',menu);
					// menu.onDidAccept(() => {
					// 	vscode.commands.executeCommand('extension.customCommand');
					// });
			
					// menu.show();
					// vscode.commands.executeCommand('editor/context', webviewPanel);
					return
				}
		});
		// customProblems(document,new vscode.Range(0,0,21,0),"webview-binmap,我的表格第21行错误了")
		// customProblems('/c:/Users/DELL/AccoTEST/test.js',new vscode.Range(0,0,10,0),'你的test.js前10行错了')
		try{
			vscode.commands.executeCommand('Sts8600-Ui-App','STS8600-Documentation/STS8600-v1.0.0-Documentation/API-manual/Analog/DIZITIZER/Binmap.html');
		}catch(e){
			console.log("Sts8600-Ui-App panel not found");
			
		}
		 setTimeout(() => updateWebview(), 300);
		// updateWebview();
	}

	/**
	 * Get the static html used for the editor webviews.
	 */
	private getHtmlForWebview(webview: vscode.Webview): string {
		// Local path to script and css for the webview
		const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'CustomEditorBinMapMedia/binmap.js'));
		const scriptMeunUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'CustomEditorBinMapMedia/binmapContextMenu.js'));

		const styleMainUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'CustomEditorBinMapMedia/binmap.css'));

		const styleResetUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'reset.css'));

		const styleVSCodeUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'vscode.css'));



		// Use a nonce to whitelist which scripts can be run
		const nonce = getNonce();

		return /* html */`
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">

				<!--
				Use a content security policy to only allow loading images from https or from our extension directory,
				and only allow scripts that have a specific nonce.
				-->
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src ${webview.cspSource}; style-src ${webview.cspSource}; script-src 'nonce-${nonce}';">

				<meta name="viewport" content="width=device-width, initial-scale=1.0">

				<link href="${styleResetUri}" rel="stylesheet" />
				<link href="${styleVSCodeUri}" rel="stylesheet" />
				<link href="${styleMainUri}" rel="stylesheet" />

				<title>Table</title>
			</head>
			<body>
			<input />
				<div class="container">
						<table id="data-table" border="1">  
						<thead>  
							<tr>  
								<th>ID</th>  
								<th>SoftwareBinNumber</th>  
								<th>SoftwareBinName</th>  
								<th>hardwareBinNumber</th>  
								<th>HardwareBinName</th>  
								<th>BinMode</th>  
								<th>BinPriority</th>  
								<th>BinColor</th>  
							</tr>  
						</thead>  
						<tbody id="table-body">  
							<!-- 表格内容将在这里动态生成 -->  
						</tbody>  
					</table>  
				</div>
				<script nonce="${nonce}" src="${scriptUri}"></script>
				<script nonce="${nonce}" src="${scriptMeunUri}"></script>
			</body>
			</html>`;
	}

	/**
	 * Add a new Row to the current document.
	 */
	private addNewRow(document: vscode.TextDocument) {
		const json = this.getDocumentAsJson(document);
		json.tableData = [
			...(Array.isArray(json.tableData) ? json.tableData : []),
			{
				id: getNonce(),
				text: {
					ID:getNonce(),
					SoftwareBinNumber:Math.floor(Math.random()*10),
					SoftwareBinName:'hi',
					hardwareBinNumber:Math.floor(Math.random()*10),
					HardwareBinName: 'hi',
					BinMode: 'pass',
					BinPriority: 'xx',
					BinColor:'red'
				},
				created: Date.now(),
			}
		];

		return this.updateTextDocument(document, json);
	}

	/**
	 * Delete an existing Row from a document.
	 */
	private deleteRow(document: vscode.TextDocument, id: string) {
		const json = this.getDocumentAsJson(document);
		if (!Array.isArray(json.tableData)) {
			return;
		}

		json.tableData = json.tableData.filter((note: any) => note.id !== id);

		return this.updateTextDocument(document, json);
	}

	private editRow(document: vscode.TextDocument, message: any) {
        let start = Date.now();
    // 1. 解析文档 JSON
    const json = this.getDocumentAsJson(document);

    // 2. 确保 tableData 存在
    if (!Array.isArray(json.tableData)) {
        console.error('tableData is not an array');
        return;
    }

    // 3. 根据 message.id 找到对应行
    const row = json.tableData.find((item: any) => item.text.ID === message.id);
    if (!row) {
        console.error(`No row found with ID ${message.id}`);
        return;
    }

    // 4. 更新对应列
    if (row.text.hasOwnProperty(message.field)) {
        row.text[message.field] = message.value;
    } else {
        console.warn(`Field ${message.field} does not exist on row ${message.id}`);
    }
    let end = Date.now();
	console.log(`webview->postmessage->nodejs->编辑表格1行计算的时间: ${end - start} ms`);
    return this.updateTextDocument(document, json);

   
}


	/**
	 * Try to get a current document as json text.
	 */
	private getDocumentAsJson(document: vscode.TextDocument): any {
		const text = document.getText();
		if (text.trim().length === 0) {
			return {};
		}

		try {
			return JSON.parse(text);
		} catch {
			throw new Error('Could not get document as json. Content is not valid json');
		}
	}

	/**
	 * Write out the json to a given document.
	 */
	private updateTextDocument(document: vscode.TextDocument, json: any) {
		const edit = new vscode.WorkspaceEdit();

		// Just replace the entire document every time for this example extension.
		// A more complete extension should compute minimal edits instead.
        let start = Date.now();
           
			
			
		edit.replace(
			document.uri,
			new vscode.Range(0, 0, document.lineCount, 0),
			JSON.stringify(json, null, 2));

			let end = Date.now();
		console.log(`文本全部替换执行的时间: ${end - start} ms`);
		this.dslDocument = json
		return vscode.workspace.applyEdit(edit);
		
	}
}
