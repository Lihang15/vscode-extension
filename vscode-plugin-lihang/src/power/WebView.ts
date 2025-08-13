import * as vscode from 'vscode';
    
    // webview 相关
   export let webviewDisposable = vscode.commands.registerCommand('extension.openFileInWebview', (uri: vscode.Uri) => {
        // 创建一个 webview panel  
        let panel = vscode.window.createWebviewPanel(
            'myCustomWebview', // 唯一的标识符  
            'Custom Webview', // 面板的标题  
            vscode.ViewColumn.One, // 显示的位置  
            {
                // 允许脚本在 webview 中运行  
                enableScripts: true
            }
        );

        // 获取当前活动的文本编辑器  
        panel.webview.html = getWebviewContent('welcome');

    })
    // context.subscriptions.push(webviewDisposable);


    // 辅助函数，用于生成 webview 的 HTML 内容  
function getWebviewContent(content: string): string {
    const url = "https://www.4399.com/flash/201798.htm"
   return `<!DOCTYPE html>  
<html lang="en">  
<head>  
   <meta charset="UTF-8">  
   <meta name="viewport" content="width=device-width, initial-scale=1.0">  
   <title>File Content</title>  
</head>  
<body>  
   <pre>${content}</pre>
     <iframe src=${url} width="1620" height="900"></iframe>
</body>  
</html>`;
}
