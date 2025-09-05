import { ErrorListener, RecognitionException, Recognizer } from 'antlr4';
import { Diagnostic, DiagnosticSeverity } from "vscode-languageserver";


// 自定义 ErrorListener
export class LspErrorListener implements ErrorListener<any> {
  public diagnostics: Diagnostic[] = [];

  syntaxError<T>(
    recognizer: Recognizer<any>,
    offendingSymbol: T,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined
  ) {
    this.diagnostics.push({
      severity: DiagnosticSeverity.Error,
      message: msg,
      range: {
        start: { line: line - 1, character: charPositionInLine },
        end: { line: line - 1, character: charPositionInLine + 1 },
      },
      source: "TimingLang",
    });
  }

  getDiagnostics() {
    return this.diagnostics;
  }
}