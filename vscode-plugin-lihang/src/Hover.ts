import provideHover from './provider/hover'

import * as vscode from 'vscode';
   // 在javascript 文件里 鼠标悬停 执行相关的provide
    // 跳转定义 代码高亮都提供了相应的provide 可自己扩展
    export const disposable = vscode.languages.registerHoverProvider('javascript', {
        provideHover
    });