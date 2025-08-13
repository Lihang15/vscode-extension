import * as vscode from 'vscode';
import { ToggleSinglePanelByRouter, getSts8600WebviewContent } from './CreatePanel'
import { LiveServerHelper } from './LiveServerHelper';



let panel: vscode.WebviewPanel
export function activate(context: vscode.ExtensionContext) {
    const liveServerHelper =  new LiveServerHelper(context)

    console.log('Congratulations, your sts8600 document extension is now active!');
    vscode.window.showInformationMessage('Congratulations, your sts8600 document extension is now active!')

    // 方案二 单panel路由切换模式
    let webviewSts8600Disposable = vscode.commands.registerCommand('extension.Sts8600-Help', async () => {

        // 创建一个 webview panel  
        panel = vscode.window.createWebviewPanel(
            'Sts8600-Help', // 唯一的标识符  
            'Sts8600-Help', // 面板的标题  
            vscode.ViewColumn.Beside, // 显示的位置  
            {
                // 允许脚本在 webview 中运行

                enableScripts: true
            }
        );
        // 获取当前活动的文本编辑器  
        panel.webview.html = getSts8600WebviewContent();
    })
    context.subscriptions.push(webviewSts8600Disposable);

    // 接收8600软件插件传过来的指令，触发命令执行
    let webviewSts8600DisposableApp1 = vscode.commands.registerCommand('ASKC-OFFline-Manual-Url', async (router) => {
        if (panel) {
            ToggleSinglePanelByRouter(panel, router)
        }
    })
    context.subscriptions.push(webviewSts8600DisposableApp1);
    // 插件调用方
    //  setTimeout(()=>{
    //     vscode.commands.executeCommand('ASKC-OFFline-Manual-Url','sts864/Pin/Pinmap.html');
    //  },5000)
    
    // 上线
    context.subscriptions.push(vscode.commands
        .registerCommand('extension.Sts8600-Help.goOnline',  async () => {
            liveServerHelper.goOnline();
        })
    );
    //下线
    context.subscriptions.push(vscode.commands
        .registerCommand('extension.Sts8600-Help.goOffline', async () => {
            liveServerHelper.goOffline();
        })
    );

}

// This method is called when your extension is deactivated
export function deactivate() { }

