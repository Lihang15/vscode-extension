import { diagnosticCollection } from '../extension'
import * as vscode from 'vscode';

/**  
 * 创建 Diagnostics，添加进 diagnosticCollection
 * @param document 文件的 对象或路径字符串  
 * @param range 问题的范围  
 * @param errorMessage 错误信息
 */  
export function customProblems(document: vscode.TextDocument | string,range: vscode.Range,errorMessage: string){
    const diagnostics = []
    diagnostics.push(new vscode.Diagnostic(range, errorMessage))
    diagnosticCollection.clear()
    diagnosticCollection.set(vscode.Uri.parse(typeof document==='string'?document:document.uri.path),diagnostics)
 }


  
/**  
 * 检查两个范围是否重叠  
 * @param range1 第一个范围  
 * @param range2 第二个范围  
 * @returns 如果两个范围重叠，则返回 true；否则返回 false  
 */  
function rangesOverlap(range1: vscode.Range, range2: vscode.Range): boolean {  
    return !(range1.end.isBefore(range2.start) || range2.end.isBefore(range1.start));  
}  
  
/**  
 * 更新特定文件的 Diagnostics，移除与指定范围重叠的 Diagnostic  
 * @param document 文档对象
 * @param rangeToRemove 需要从 Diagnostics 中移除的范围  
 * @param newErrorMessage 如果有新的错误信息，可以在这里传入以替换或添加新的 Diagnostic  
 */  
export function updateDiagnostics(document: vscode.TextDocument | string, rangeToRemove: vscode.Range, newErrorMessage?: string): void {  
    const uri = vscode.Uri.parse(typeof document==='string'?document:document.uri.path);  
  
    // 获取当前文件的所有 Diagnostics  
    const currentDiagnostics = diagnosticCollection.get(uri) || [];  
  
    // 过滤掉与指定范围重叠的 Diagnostic  
    const updatedDiagnostics = currentDiagnostics.filter(diagnostic => {  
        return !rangesOverlap(diagnostic.range, rangeToRemove);  
    });  
  
    // 如果提供了新的错误信息，并且希望添加一个新的 Diagnostic  
    if (newErrorMessage) {  
        // 检查是否已存在完全相同的 Diagnostic（可选，以避免重复）  
        const existing = updatedDiagnostics.find(diag => diag.message === newErrorMessage);  
        if (!existing) {  
            // 如果没有相同的 Diagnostic，则添加新的 Diagnostic  
            updatedDiagnostics.push(new vscode.Diagnostic(rangeToRemove, newErrorMessage));  
        }  
    }  
  
    // 设置更新后的 Diagnostics  
    diagnosticCollection.set(uri, updatedDiagnostics);  
}  
  
// 示例用法  
// 假设你有一个文档的 URI 和想要移除的范围  
// updateDiagnostics(vscode.Uri.parse('file:///path/to/your/file.txt'), new vscode.Range(0, 0, 0, 10), 'Error message');