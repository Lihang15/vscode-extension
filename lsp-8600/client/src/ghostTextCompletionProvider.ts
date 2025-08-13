import * as vscode from 'vscode';

 export const provider: vscode.InlineCompletionItemProvider = {
    provideInlineCompletionItems(document, position, context, token) {
      const lineText = document.lineAt(position.line).text;
      const prefix = lineText.substring(0, position.character).trim();

      if (prefix === '//启动') {
        return {
          items: [
            {
              insertText: [
                '服务器',
				
                'function startServer() {',
                '\tconsole.log("Server is running...");',
                '}'
              ].join('\n'),
              range: new vscode.Range(position, position)
            }
          ]
        };
      }

      return { items: [] };
    }
  };