import * as vscode from 'vscode';
   
// 编辑器获取焦点时候 ctrl+f1 触发这个函数
export const disposable = vscode.commands.registerCommand('extension.keybinding', (uri) => {
    vscode.window.showInformationMessage(`lihang_keybinding success `);

})