import * as vscode from 'vscode'

export default class MyFileTreeProvider implements vscode.TreeDataProvider<MyFileTreeItem> {
    private rootPath: string | undefined;
    constructor(rootPath: string){
        this.rootPath = rootPath
    }
  

    getTreeItem(element: MyFileTreeItem): vscode.TreeItem {
      return element;
    }
  
    getChildren(element?: MyFileTreeItem): Thenable<MyFileTreeItem[]> {
      if (this.rootPath) {
        // 在这里读取文件系统并返回节点
        // 例如：使用 fs 模块读取目录
        return this.getFilesInDirectory(this.rootPath);
      }
      return Promise.resolve([]);
    }
  
    private async getFilesInDirectory(dir: string): Promise<MyFileTreeItem[]> {
        const fs = require('fs').promises;
        const items: MyFileTreeItem[] = [];
        
        // 读取当前目录的文件和子目录
        const files = await fs.readdir(dir);
        
        for (const file of files) {
          const filePath = `${dir}/${file}`;
          const fileStats = await fs.stat(filePath);
          
          // 如果是目录，递归调用
          if (fileStats.isDirectory()) {
            items.push(new MyFileTreeItem(file, vscode.Uri.file(filePath), true)); // 传入 true 表示是目录
            // 递归获取子目录的内容
            const children = await this.getFilesInDirectory(filePath);
            items.push(...children);
          } else {
            items.push(new MyFileTreeItem(file, vscode.Uri.file(filePath), false)); // 传入 false 表示是文件
          }
        }
        
        return items;
    }
  }
  

class MyFileTreeItem extends vscode.TreeItem {
    constructor(label: string, uri?: vscode.Uri,isDirectory: boolean = false) {
        super(label,isDirectory ? vscode.TreeItemCollapsibleState.Collapsed : vscode.TreeItemCollapsibleState.None);
        this.command = {
        command: 'vscode.openWith',
        title: 'Open with binmap Editor',
        arguments: [uri, 'Customs.BinMap']
        };
    }
}


// const myFileTreeProvider = new MyFileTreeProvider('C:\Users\DELL\AccoTEST');
// vscode.window.createTreeView('big cat', { treeDataProvider: myFileTreeProvider });