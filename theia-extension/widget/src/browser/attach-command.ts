import { injectable } from 'inversify';
import {
  CommandContribution, CommandRegistry, Command,
  MenuContribution, MenuModelRegistry
} from '@theia/core/lib/common';
import { AttachDialog } from './AttachDialog';

export const AttachCommand: Command = {
  id: 'file.attach.url',
  label: 'Attach...'
};

@injectable()
export class AttachCommandContribution implements CommandContribution, MenuContribution {

  registerCommands(commands: CommandRegistry): void {
    commands.registerCommand(AttachCommand, {
      execute: async () => {
        const dialog = new AttachDialog();
        const value = await dialog.open();
        if (value) {
          console.log('You entered:', value);
          // 你可以在这里做更多的逻辑处理
        }
      }
    });
  }

  registerMenus(menus: MenuModelRegistry): void {
    menus.registerMenuAction(['navigator-context-menu'], {
      commandId: AttachCommand.id,
      label: AttachCommand.label,
      order: '99'  // 放在菜单底部
    });
  }
}
