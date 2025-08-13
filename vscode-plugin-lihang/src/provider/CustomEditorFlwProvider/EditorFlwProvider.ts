import * as vscode from 'vscode';
// import { getNonce } from '../../util';
// import { customProblems } from '../problems'
/**
 * Provider for cat scratch editors.
 * 
 * Cat scratch editors are used for `.cscratch` files, which are just json files.
 * To get started, run this extension and open an empty `.cscratch` file in VS Code.
 * 
 * This provider demonstrates:
 * 
 * - Setting up the initial webview for a custom editor.
 * - Loading scripts and styles in a custom editor.
 * - Synchronizing changes between a text document and a custom editor.
 */

// model的数据结构
	// "nodes": [
	//   {
	// 	"type": "runNode",
	// 	"text": "Test100"
	//   },
	//   {
	// 	"type": "runBranchNode",
	// 	"text": "Test99",
	// 	"Branchs": [
	// 	  {
	// 		"branch": "Pass",
	// 		"nodes": []
	// 	  },
	// 	  {
	// 		"branch": "Fail",
	// 		"nodes": [
	// 		  {
	// 			"type": "runBranchNode",
	// 			"text": "Test99",
	// 			"Branchs": [
	// 			  {
	// 				"branch": "Pass",
	// 				"nodes": []
	// 			  },
	// 			  {
	// 				"branch": "Fail",
	// 				"nodes": []
	// 			  }
	// 			]
	// 		  }
	// 		]
	// 	  }
	// 	]
	//   },
	//   {
	// 	"type": "passBin",
	// 	"text": "Stop"
	//   },
	//   {
	// 	"type": "flow",
	// 	"text": "Flow9",
	// 	"nodes": [
	// 	  {
	// 		"type": "flow",
	// 		"text": "Flow9",
	// 		"nodes": []
	// 	  },
	// 	  {
	// 		"type": "concurrent",
	// 		"text": "Concurrentx",
	// 		"flowNodes": [
	// 		  {
	// 			"type": "flow",
	// 			"text": "flowx",
	// 			"nodes": []
	// 		  },
	// 		  {
	// 			"type": "flow",
	// 			"text": "flowx1",
	// 			"nodes": []
	// 		  }
	// 		]
	// 	  }
	// 	]
	//   },
	//   {
	// 	"type": "concurrent",
	// 	"text": "Concurrentx",
	// 	"flowNodes": [
	// 	  {
	// 		"type": "flow",
	// 		"text": "flowx",
	// 		"nodes": []
	// 	  },
	// 	  {
	// 		"type": "flow",
	// 		"text": "flowx1",
	// 		"nodes": []
	// 	  }
	// 	]
	//   }
	// ]
  
export class EditorFlwProvider implements vscode.CustomTextEditorProvider {

	public static register(context: vscode.ExtensionContext): vscode.Disposable {
		const provider = new EditorFlwProvider(context);
		const providerRegistration = vscode.window.registerCustomEditorProvider(EditorFlwProvider.viewType, provider, {
			webviewOptions: {
			  retainContextWhenHidden: true,
			},
		  },);
		return providerRegistration;
	}

	private static readonly viewType = 'Customs.Flw';


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

		webviewPanel.webview.html = this.getHtmlForWebview(webviewPanel.webview);
        //数据只要变动，就通知前端更新ui
		function updateWebview() {
			// console.log('给ui发送数据',document.getText());
			
			webviewPanel.webview.postMessage({
				type: 'updateWebView',
				text: document.getText(),
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
				updateWebview();
			}
		});

		// Make sure we get rid of the listener when our editor is closed.
		webviewPanel.onDidDispose(() => {
			changeDocumentSubscription.dispose();
		});

		// Receive message from the webview.
		webviewPanel.webview.onDidReceiveMessage(e => {
			switch (e.type) {
				case 'addNode':
					this.addNode(document,e.text)
					return;

				case 'deleteNode':
					this.deleteNode(e.text)
					return;
				
				case 'updateNode':
					this.updateNode(e.text)
				    return
				
				case 'getNodes':
					this.getNodes(webviewPanel, document)
					return

				}
		});

		// customProblems(document,new vscode.Range(0,0,10,0),"我的.flw文件前10行错了")
		try{
			vscode.commands.executeCommand('Sts8600-Ui-App','STS8600-Documentation/STS8600-v1.0.0-Documentation/API-manual/Analog/DIZITIZER/TestFlow.html');
		}catch(e){
			console.log("Sts8600-Ui-App panel not found");
			
		}
		
		updateWebview();
	}

	/**
	 * Get the static html used for the editor webviews.
	 */
	private getHtmlForWebview(webview: vscode.Webview): string {
		// Local path to script and css for the webview
		const scriptFlowNodeGraphicsWidgetUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'CustomEditorFlwMedia/CompositeGraphics/FlowNodeGraphicsWidget.js'));
		const scriptCircleGraphicsWidgetUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'CustomEditorFlwMedia/BaseGraphics/CircleGraphicsWidget.js'));
		const scriptLineGraphicsWidgetUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'CustomEditorFlwMedia/BaseGraphics/LineGraphicsWidget.js'));
		const scriptRectBodyGraphicsWidgetUri = webview.asWebviewUri(vscode.Uri.joinPath(
				this.context.extensionUri, 'media', 'CustomEditorFlwMedia/BaseGraphics/RectBodyGraphicsWidget.js'));
		const scriptTextGraphicsWidgetUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'CustomEditorFlwMedia/BaseGraphics/TextGraphicsWidget.js'));
		const scriptStartFlowNodeGraphicsWidgetUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'CustomEditorFlwMedia/CompositeGraphics/StartFlowNodeGraphicsWidget.js'));
		const scriptRunTestFlowNodeGraphicsWidgetUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'CustomEditorFlwMedia/CompositeGraphics/RunTestFlowNodeGraphicsWidget.js'));

		const scriptRunAndBranchTestFlowNodeGraphicsWidgetUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'CustomEditorFlwMedia/CompositeGraphics/RunAndBranchTestFlowNodeGraphicsWidget.js'));

		const scriptPassBinTestFlowNodeGraphicsWidgetUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'CustomEditorFlwMedia/CompositeGraphics/PassBinTestFlowNodeGraphicsWidget.js'));

		const scriptTestFlowNodeGraphicsWidgetUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'CustomEditorFlwMedia/CompositeGraphics/TestFlowNodeGraphicsWidget.js'));
		const scriptConcurrentTestFlowNodeGraphicsWidgetUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'CustomEditorFlwMedia/CompositeGraphics/ConcurrentTestFlowNodeGraphicsWidget.js'));

	const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'CustomEditorFlwMedia/flw.js'));
		const scriptMeunUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'CustomEditorFlwMedia/flwContextMenu.js'));

		const styleMainUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'CustomEditorFlwMedia/flw.css'));

		const styleResetUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'reset.css'));

		const styleVSCodeUri = webview.asWebviewUri(vscode.Uri.joinPath(
			this.context.extensionUri, 'media', 'vscode.css'));



		// Use a nonce to whitelist which scripts can be run
		// const nonce = getNonce();

		return /* html */`
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">

				<!--
				Use a content security policy to only allow loading images from https or from our extension directory,
				and only allow scripts that have a specific nonce.
				-->

				<meta name="viewport" content="width=device-width, initial-scale=1.0">

				<link href="${styleResetUri}" rel="stylesheet" />
				<link href="${styleVSCodeUri}" rel="stylesheet" />
				<link href="${styleMainUri}" rel="stylesheet" />
			</head>
			<body>
				
				<div id='page'>
			
					<div id='canvas'></div>
					<div id='property'>
					  <h2>属性面板</h2>
					  <h2 id='desc'>Property&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspValue</h2>
					  <h2 id='propertyNodeName'>Node Name：&nbsp&nbsp&nbsp&nbsp&nbsp</h2>
					  <h2 id='propertyNodeType'>Node Type：c</h2>
					  <label class="switch">
					   <h2>Bypass&nbsp&nbsp&nbsp&nbsp<input type="checkbox" id="toggleSwitch">
							</h2>
							
						</label>
					</div>
				</div>
              
			   
			</body>
			<script src="https://pixijs.download/release/pixi.js"></script>
			<script src="https://d3js.org/d3.v7.min.js"></script>
			<script src="${scriptFlowNodeGraphicsWidgetUri}"></script>
			<script src="${scriptCircleGraphicsWidgetUri}"></script>
			<script src="${scriptLineGraphicsWidgetUri}"></script>
			<script src="${scriptRectBodyGraphicsWidgetUri}"></script>
			<script src="${scriptTextGraphicsWidgetUri}"></script>
			<script src="${scriptStartFlowNodeGraphicsWidgetUri}"></script>
			<script src="${scriptRunTestFlowNodeGraphicsWidgetUri}"></script>
			<script src="${scriptRunAndBranchTestFlowNodeGraphicsWidgetUri}"></script>
			<script src="${scriptPassBinTestFlowNodeGraphicsWidgetUri}"></script>
			<script src="${scriptTestFlowNodeGraphicsWidgetUri}"></script>
			<script src="${scriptConcurrentTestFlowNodeGraphicsWidgetUri}"></script>
			<script src="${scriptUri}"></script>
			<script src="${scriptMeunUri}"></script>
			
			</html>`;
	}


	/**
	 * Add a new scratch to the current document.
	 */
	private addNode(document: vscode.TextDocument,data:any) {
		// const json = this.getDocumentAsJson(document);
		// json.tableData = [
		// 	...(Array.isArray(json.tableData) ? json.tableData : []),
		// 	{
		// 		id: getNonce(),
		// 		text: {
		// 			ID:getNonce(),
		// 			SoftwareBinNumber:Math.floor(Math.random()*10),
		// 			SoftwareBinName:'hi',
		// 			hardwareBinNumber:Math.floor(Math.random()*10),
		// 			HardwareBinName: 'hi',
		// 			BinMode: 'pass',
		// 			BinPriority: 'xx',
		// 			BinColor:'red'
		// 		},
		// 		created: Date.now(),
		// 	}
		// ];

		return this.updateTextDocument(document, data);
	}

	/**
	 * Delete an existing scratch from a document.
	 */
	private deleteNode(document: vscode.TextDocument) {
		const json = this.getDocumentAsJson(document);
		if (!Array.isArray(json.tableData)) {
			return;
		}

		// json.tableData = json.tableData.filter((note: any) => note.id !== id);

		return this.updateTextDocument(document, json);
	}
    /**
	 * Update an existing scratch from a document.
	 */
	private updateNode(document: vscode.TextDocument){
		return
	}

	private getNodes(webviewPanel: vscode.WebviewPanel,document: vscode.TextDocument){
		webviewPanel.webview.postMessage({
			type: 'updateWebView',
			text: document.getText(),
		});
		return 
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
	// 用于修改本地文件数据
	private updateTextDocument(document: vscode.TextDocument, json: any) {
		const edit = new vscode.WorkspaceEdit();

		// Just replace the entire document every time for this example extension.
		// A more complete extension should compute minimal edits instead.
		edit.replace(
			document.uri,
			new vscode.Range(0, 0, document.lineCount, 0),
			JSON.stringify(json, null, 2));

		return vscode.workspace.applyEdit(edit);
	}
}


