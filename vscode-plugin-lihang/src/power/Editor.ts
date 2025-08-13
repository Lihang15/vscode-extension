import * as vscode from 'vscode';
import * as path from 'path'
import { Position, Range, Selection } from 'vscode';

export const editorDocumentDisposable = vscode.commands.registerCommand('extension.praise', (uri) => {
    // Get the active text editor
    const editor = vscode.window.activeTextEditor;

    if (editor) {
        const document = editor.document;
        const selection = editor.selection;

        // Get the word within the selection
        const word = document.getText(selection);
        let newWord = 'sorry,我不认识,请尽量输入我认识的'
        if (word === '王立航') {
            newWord = '只能说一表人才'
            console.log(uri.path);
            const dirName = path.dirname(uri.path)
            console.log('dirName', dirName);
            vscode.window.showTextDocument(vscode.Uri.file(`${dirName}/test.txt`)).then(editor => {
                const edit = new vscode.WorkspaceEdit();

                // Just replace the entire document every time for this example extension.
                // A more complete extension should compute minimal edits instead.
                edit.replace(
                    editor.document.uri,
                    new vscode.Range(0, 0, document.lineCount, 0),
                    JSON.stringify(newWord, null, 2));
                vscode.workspace.applyEdit(edit);
                const start = new Position(0, 0);
                // 结束位置加了 20 行，为了便于查看
                const end = new Position(20, 0);
                // 光标聚焦的位置
                editor.selections = [new Selection(start, start)];
                // 可见范围
                const range = new Range(start, end);
                editor.revealRange(range);

            });
        }
        if (word === '蒋林捷') {
            newWord = '描述描述'
        }
        if (word === '江海宁') {
            newWord = '不知道咋夸，性别：男'
        }
        if (word === 'xx') {
            newWord = 'xxxx'
        }
        if (word === '魏红博') {
            newWord = '杭州萧山第一ikun,apex高手,id:what can i see,其他的我再想想'
        }
        if (word === '刘长安') {
            newWord = '天津某区劳大，性别：男，练习时长两年半，帅的一塌糊涂'
        }
        editor.edit(editBuilder => {
            editBuilder.replace(selection, newWord);
        });
    }
});

// context.subscriptions.push(editorDocumentDisposable);