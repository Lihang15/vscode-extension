import { injectable, inject } from 'inversify';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';
import { MenuModelRegistry } from '@theia/core/lib/common';

@injectable()
export class MyMenuDebugContribution implements FrontendApplicationContribution {

  @inject(MenuModelRegistry)
  protected readonly menus: MenuModelRegistry;

  onStart(): void {
    const menuPath = ['navigator-context-menu'];
    const items = this.menus.getMenu(menuPath);

    console.log(items);
    
  }
}
