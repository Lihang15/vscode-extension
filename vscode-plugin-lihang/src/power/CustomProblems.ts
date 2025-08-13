import * as vscode from 'vscode';
import DiagnosticCodeActionProvider from './provider/codeAction'
import { webviews } from './extension'

const diagnosticCollection = vscode.languages.createDiagnosticCollection('custom problems');
    
// context.subscriptions.push(diagnosticCollection);
const CodeActionsProviderDisposable = 
    vscode.languages.registerCodeActionsProvider(
      '*', // 修改为需要的语言
      new DiagnosticCodeActionProvider(),
      {
        providedCodeActionKinds: DiagnosticCodeActionProvider.providedCodeActionKinds
      }
    )

const CodeActionsProviderDisposableClick = vscode.commands.registerCommand('extension.handleDiagnosticClick', (diagnostic: vscode.Diagnostic) => {
        if(diagnostic.message){
        const webviewId = diagnostic.message.split(',')[0]
        const panel: vscode.WebviewPanel | undefined = webviews.get(webviewId)
        panel?.webview.postMessage({
            type: 'diagnostic',
            text:'我知道你哪一行错了，你要滚动到某某行'
        });  
        }
    
    
    vscode.window.showInformationMessage(`Diagnostic clicked: ${diagnostic.message}`);
})
  
