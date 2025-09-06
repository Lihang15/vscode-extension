import * as vscode from 'vscode';

 export const provider: vscode.InlineCompletionItemProvider = {
    provideInlineCompletionItems(document, position, context, token) {
      const lineText = document.lineAt(position.line).text;
      const prefix = lineText.substring(0, position.character).trim();
      const line = document.lineAt(position.line).text;

      // 只在新行（空行）触发
      if (line.trim() !== "") return;

      // 上一行
      const prevLine = position.line > 0 ? document.lineAt(position.line - 1).text : "";
      if (!prevLine.trim().startsWith("//")) return;

      // 调用 LSP 服务器，也可以调用ai大模型，帮你智能分析和推测代码
      // const items = await client.sendRequest("textDocument/inlineCompletion", {
      //   textDocument: { uri: document.uri.toString() },
      //   position
      // });

      const items = []

      // 如果上一行是注释，返回补全
      if (prevLine.trim().startsWith("//")) {
        if (prevLine.includes("帮我写一个Signal")) {
          items.push({ insertText: `1.当前Demo由Lsp服务器预设
            2.未来可通过Ai大模型接入我们的Lsp,提供智能代码辅助编写
            3.8600为离线程序,未来有需要可训练自己公司的模型和Lsp结合打造智能的8600上层程序
            Signal YourSignalName {\n           0:d1:D; \n           1:d1:U; \n           Z:d1:Z; \n           L:d1:Z r1:L; \n           H:d1:Z r1:H; \n           X:d1:Z r1:X;\n           }` })
        }
        if (prevLine.includes("推测下一步要做什么")) {
           items.push({ insertText: "SpecificationSets{}" })
        }
      }

      return {
        items: items.map((i: any) => ({
          insertText: i.insertText,
          range: new vscode.Range(position, position)
        }))
      }

      // if (prefix === '//启动') {
      //   return {
      //     items: [
      //       {
      //         insertText: [
      //           '服务器',
				
      //           'function startServer() {',
      //           '\tconsole.log("Server is running...");',
      //           '}'
      //         ].join('\n'),
      //         range: new vscode.Range(position, position)
      //       }
      //     ]
      //   };
      // }

      
  }

 }