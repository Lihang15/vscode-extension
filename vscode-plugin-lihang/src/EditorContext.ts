import * as vscode from 'vscode';

//editor/title/context 编辑器标题上下文菜单  如果是 js文件 显示在菜单里 点击触发
export const disposable = vscode.commands.registerCommand('extension.isJsFile', (uri) => {
    vscode.window.showInformationMessage(`is js file`);

})

 // 当直接按Ctrl+Shift+P执行命令时，uri这个参数为空 默认uri返回的是 你操作的文件绝对路径 
    // 在editor/context 和 explorer/context 扩展相同菜单 和命令  点击菜单 执行这个函数
    export const disposable1 =vscode.commands.registerCommand('extension.getCurrentFilePath', (uri) => {
        vscode.window.showInformationMessage(`当前文件(夹)路径是：${uri ? uri.path : '空'}`);
    })
    // vscode.commands.executeCommand('vscode.open', vscode.Uri.file(`${context.extensionPath}/a.cpp`)).then(success => {
    //     // 可能会是空 不一定所有的命令都有返回结果  
    //     if (success) {  
    //         vscode.window.showInformationMessage('文件已成功打开。');  
    //     } else {  
    //         vscode.window.showErrorMessage('打开文件时出错。');  
    //         console.log(success);

    //     }  
    // })