
import { MenuContribution, MenuModelRegistry, Command,
     CommandContribution, CommandRegistry } from "@theia/core/lib/common";
import { injectable, inject } from 'inversify';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';

export const MyFlwCommand: Command = {
  id: 'my.custom.flw.dialog',
  label: '打开流程图对话框aa'
};

@injectable()
export class MyFlwMenuContribution implements CommandContribution, MenuContribution, FrontendApplicationContribution {

  @inject(MenuModelRegistry)
  protected readonly menus: MenuModelRegistry;

  registerCommands(commands: CommandRegistry): void {
    commands.registerCommand(MyFlwCommand, {
      execute: () => {
        console.log('弹出自定义对话框');
        // TODO: 打开 Widget 或 Dialog
      }
    });
  }

  registerMenus(menus: MenuModelRegistry): void {
    // 注册自定义菜单项
    menus.registerMenuAction(['navigator-context-menu'], {
      commandId: MyFlwCommand.id,
      label: MyFlwCommand.label,
      order: '9',
      when: 'resourceExtname == .flw'
    });
  }

  onStart(): void {
    // 菜单过滤逻辑已经移到 FlwMenuFilter 中
    console.log('MyFlwMenuContribution started');
  }
}
