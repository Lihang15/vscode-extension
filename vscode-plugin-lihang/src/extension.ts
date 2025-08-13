// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { EditorBinMapProvider } from './provider/CustomEditorBinMapProvider/EditorBinMapProvider';
import { EditorFlwProvider } from './provider/CustomEditorFlwProvider/EditorFlwProvider';
import { webviewDisposable } from './power/WebView';
import MyFileTreeProvider from './CustomTreeProvider';


export let diagnosticCollection: vscode.DiagnosticCollection;
export let webviews: Map<string, vscode.WebviewPanel> = new Map();  
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "Custom Editor" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    // 初始化项目 hello world
    let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World from Custom Editor!');
    });
    context.subscriptions.push(disposable);
    context.subscriptions.push(webviewDisposable);
    context.subscriptions.push(EditorBinMapProvider.register(context));
    context.subscriptions.push(EditorFlwProvider.register(context));
   const myFileTreeProvider = new MyFileTreeProvider('C:/Users/DELL/AccoTEST/TestPrograms/test');
   vscode.window.createTreeView('big cat', { treeDataProvider: myFileTreeProvider });


}

// This method is called when your extension is deactivated
export function deactivate() { }


