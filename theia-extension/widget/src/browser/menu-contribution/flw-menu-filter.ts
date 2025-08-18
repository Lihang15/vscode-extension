import { injectable, inject } from 'inversify';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';
import { MenuModelRegistry } from '@theia/core/lib/common';

@injectable()
export class FlwMenuFilter implements FrontendApplicationContribution {

  @inject(MenuModelRegistry)
  protected readonly menus: MenuModelRegistry;

  onStart(): void {
    // 延迟执行，确保菜单已经注册完成
    setTimeout(() => {
      this.filterFlwMenuItems();
    }, 3000);
  }

  private filterFlwMenuItems(): void {
    try {
      const menu = this.menus.getMenu(['navigator-context-menu']);
      
      if (!menu || !menu.children) {
        console.warn('Navigator context menu not found');
        return;
      }

      console.log('Filtering .flw menu items...');
      console.log('Total menu items:', menu.children.length);
      
      // 需要隐藏的命令列表
      const commandsToHide = [
        'navigator.copy',
        'navigator.cut', 
        'navigator.delete',
        'navigator.rename',
        'navigator.duplicate',
        'reveal-in-file-manager'
      ];

      let modifiedCount = 0;

      // 遍历菜单项并修改条件
      menu.children.forEach((item: any, index: number) => {
        if (item && item.command) {
          console.log(`Menu item ${index}: ${item.command}`);
          
          if (commandsToHide.includes(item.command)) {
            const originalWhen = item.when || '';
            
            // 添加条件：只在非 .flw 文件时显示
            const newWhen = originalWhen ? 
              `(${originalWhen}) && resourceExtname != .flw` : 
              'resourceExtname != .flw';
            
            item.when = newWhen;
            modifiedCount++;
            console.log(`✓ Modified ${item.command} with condition: ${newWhen}`);
          }
        }
      });

      console.log(`Modified ${modifiedCount} menu items for .flw files`);
      
      // 尝试强制刷新菜单
      this.refreshMenu();
      
    } catch (error) {
      console.error('Error filtering .flw menu items:', error);
    }
  }

  private refreshMenu(): void {
    try {
      // 尝试触发菜单刷新
      const menu = this.menus.getMenu(['navigator-context-menu']);
      if (menu) {
        // 触发菜单更新事件
        if (typeof (menu as any).update === 'function') {
          (menu as any).update();
          console.log('Menu refreshed');
        } else {
          console.log('Menu update method not available');
        }
      }
    } catch (error) {
      console.warn('Could not refresh menu:', error);
    }
  }
}
