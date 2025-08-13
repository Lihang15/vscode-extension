import * as vscode from 'vscode';


// 当鼠标在*.js 文本停留时候 触发这个函数
function provideHover(document: any, position: any, token: any) {
	const fileName	= document.fileName;
    console.log(fileName);
	
	if (fileName.indexOf('.js')>-1) {
		// const json = document.getText();
		return new vscode.Hover('在*.js文件鼠标停留,触发hover');

	}
}

export default provideHover
