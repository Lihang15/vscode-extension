import * as vscode from 'vscode';
import { Config } from './Config';

export function CreatePanelByRouterAndCommand(context: vscode.ExtensionContext,command: string,router: string,title: string,ViewColumn: vscode.ViewColumn){
    let webviewSts8600Disposable = vscode.commands.registerCommand(command, async () => {
      
        // 创建一个 webview panel  
        let panel = vscode.window.createWebviewPanel(
            title, // 唯一的标识符  
            title, // 面板的标题  
            ViewColumn, // 显示的位置  
            {
                // 允许脚本在 webview 中运行  
                enableScripts: true
            }
        );

        // 获取当前活动的文本编辑器  
        panel.webview.html = getSts8600WebviewContent(router);
    })
    context.subscriptions.push(webviewSts8600Disposable);
}

// Toggle single panel 
export function ToggleSinglePanelByRouter(panel: vscode.WebviewPanel,router: string){
        // 获取当前活动的文本编辑器  
        panel.webview.html = getSts8600WebviewContent(router);
           
}


export function getSts8600WebviewContent(router?: string) {
    const url = router?`http://localhost:${Config.getPort}/${router}`:`http://localhost:${Config.getPort}/`
    return `<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>File Content</title>  
</head>  
<body>  
<iframe src=${url} width="1520" height="900"></iframe>

</body>  
</html>`;
}
