import { injectable, inject } from 'inversify';
import { MenuContribution, MenuModelRegistry } from '@theia/core/lib/common';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';

@injectable()
export class FlwMenuReplacement implements MenuContribution, FrontendApplicationContribution {

  @inject(MenuModelRegistry)
  protected readonly menus: MenuModelRegistry;

  registerMenus(menus: MenuModelRegistry): void {
    // 为 .flw 文件注册自定义菜单项
    menus.registerMenuAction(['navigator-context-menu'], {
      commandId: 'my.custom.flw.dialog',
      label: '打开流程图对话框',
      order: '0',
      when: 'resourceExtname == .flw'
    });

    // 重新注册默认菜单项，但只在非 .flw 文件时显示
    // 使用更高的优先级来覆盖默认菜单项
    const defaultCommands = [
      { id: 'navigator.copy', label: 'Copy' },
      { id: 'navigator.cut', label: 'Cut' },
      { id: 'navigator.delete', label: 'Delete' },
      { id: 'navigator.rename', label: 'Rename' },
      { id: 'navigator.duplicate', label: 'Duplicate' },
      { id: 'reveal-in-file-manager', label: 'Reveal in File Manager' }
    ];

    defaultCommands.forEach((cmd, index) => {
      menus.registerMenuAction(['navigator-context-menu'], {
        commandId: cmd.id,
        label: cmd.label,
        order: String(index),
        when: 'resourceExtname != .flw'
      });
    });

    console.log('FlwMenuReplacement: Registered custom menu for .flw files');
  }

  onStart(): void {
    console.log('FlwMenuReplacement started');
  }
}
