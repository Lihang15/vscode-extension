import * as vscode from 'vscode';

vscode.window.showInformationMessage('vscode-plugin-lihang插件已经加载你知道了吧？', '知道', '不知道', '不再提示').then(result => {
    if (result === '知道') {
        console.log('你选择是');

    } else if (result === '不再提示') {
        console.log('不在提示');

    }
});