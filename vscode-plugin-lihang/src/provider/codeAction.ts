import * as vscode from 'vscode';

class DiagnosticCodeActionProvider implements vscode.CodeActionProvider {
    static readonly providedCodeActionKinds = [
      vscode.CodeActionKind.QuickFix
    ];
  
    provideCodeActions(
      document: vscode.TextDocument,
      range: vscode.Range,
      context: vscode.CodeActionContext,
      token: vscode.CancellationToken
    ): vscode.CodeAction[] | undefined {
      const actions: vscode.CodeAction[] = [];
      for (const diagnostic of context.diagnostics) {  
        const action = new vscode.CodeAction('Handle Diagnostic Click', vscode.CodeActionKind.QuickFix);
        action.command = { command: 'extension.handleDiagnosticClick', title: 'Handle Diagnostic Click', arguments: [diagnostic] };
        actions.push(action);
      }
      return actions;
    }
  }

  export default DiagnosticCodeActionProvider