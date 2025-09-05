import { ParserRuleContext } from 'antlr4';
import { EquationSetsBlockContext, SpecificationSetsBlockContext, TimingsBlockContext, WaveformTablesBlockContext } from '../TimingLangParser';
import TimingLangVisitor from '../TimingLangVisitor';


export class TimingBlockVisitor extends TimingLangVisitor<any> {
  public blocks: string[] = []

  // 入口：访问 Timings { ... }
  visitTimingsBlock = (ctx: TimingsBlockContext): string[] => {
    const results: string[] = [];
    const items = ctx.timingsBlockContent_list()
    for (const item of items) {
      if (item.children) {
        for (const child of item.children) {
          if (child instanceof WaveformTablesBlockContext) {
            results.push("WaveformTables");
          } else if (child instanceof EquationSetsBlockContext) {
            results.push("EquationSets");
          } else if (child instanceof SpecificationSetsBlockContext) {
            results.push("SpecificationSets");
          } else {
            // 继续递归
            const sub = (child as any).accept(this);
            if (sub && Array.isArray(sub)) {
              results.push(...sub);
            }
          }
        }

      }
    }
    return results;
  }



  //   visitChildren(ctx: ParserRuleContext): string[] {
  //   let results: string[] = [];

  //   for (const child of ctx.children ?? []) {
  //     const text = child.constructor.name; // child 的类型
  //       if (child instanceof WaveformTablesBlockContext) {
  //         results.push("WaveformTables");
  //         this.blocks.push("你好呀")
  //       } else if (child instanceof EquationSetsBlockContext) {
  //         results.push("EquationSets");
  //       } else if (child instanceof SpecificationSetsBlockContext) {
  //         results.push("SpecificationSets");
  //       }

  //       if ((child as any).accept) {
  //         const sub = (child as any).accept(this);
  //         if (sub) results = results.concat(sub);
  //       }
  //   }

  //   return results;
  // }

}
