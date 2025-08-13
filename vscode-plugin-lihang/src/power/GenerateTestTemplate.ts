import * as vscode from 'vscode';
import * as fs from 'fs-extra'
import * as path from 'path'

// let generateTemplateDisposable = vscode.commands.registerCommand('extension.generateTestTemplate', () => {
//     // 弹出输入框让用户输入目标文件夹路径
//     vscode.window.showInputBox({ prompt: 'Enter the target folder path for the generated template', value: os.homedir() || '' }).then((value) => {
//         if (value) {
//             // 生成代码模板的逻辑
//             generateTemplate(context, value);
//         }
//     });
// });



function generateTemplate(context: vscode.ExtensionContext, targetFolderPath: string) {
    // const templateFolderPath = './template'; // 设置模板文件夹的路径
    const templateFolderPath = path.join(context.extensionPath, 'media', 'template', 'AccoTest'); // 设置模板文件夹的路径
    vscode.window.showInformationMessage(templateFolderPath);
    vscode.window.showInformationMessage(targetFolderPath);
    // 复制模板文件夹到目标位置
    try {
        // 检查目标文件夹是否存在，如果不存在则创建它
        if (!fs.existsSync(targetFolderPath)) {
            fs.mkdirSync(targetFolderPath, { recursive: true });
        }
        fs.copySync(templateFolderPath, targetFolderPath);
        const workspaceFolders = vscode.workspace.workspaceFolders
        console.log('workspaceFolders', workspaceFolders);
        if (workspaceFolders?.length) {
            vscode.workspace.updateWorkspaceFolders(workspaceFolders.length, null, { uri: vscode.Uri.file(targetFolderPath) });
            return
        }
        // 这个只能 在工作区 添加 删除 修改，不能直接打开文件夹
        // vscode.workspace.updateWorkspaceFolders(vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders.length : 0, null, { uri: vscode.Uri.file(targetFolderPath) });
        vscode.commands.executeCommand('vscode.openFolder', vscode.Uri.file(targetFolderPath), false);
    } catch (e) {
        console.log(e);
        vscode.window.showInformationMessage('generateTemplate fail!');
    }


}
