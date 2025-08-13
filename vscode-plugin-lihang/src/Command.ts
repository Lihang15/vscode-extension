import * as vscode from 'vscode';
    
// 选中文本执行复制 这个复制命令并不能执行  执行命令是用来触发 vscode ui动作的
vscode.commands.executeCommand('editor.action.clipboardCopyAction').then(result => {
    console.log('命令结果', result);
});

