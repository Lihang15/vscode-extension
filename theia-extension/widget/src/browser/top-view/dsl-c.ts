import { injectable } from '@theia/core/shared/inversify';
import { CommandRegistry, CommandContribution } from '@theia/core/lib/common';

@injectable()
export class GlobalCommandContribution implements CommandContribution {
    registerCommands(commands: CommandRegistry): void {
        const buttons = ['run', 'down', 'reload', 'stop', 'validate', 'deploy', 'logs'];
        buttons.forEach(btn => {
            commands.registerCommand({ id: `global.${btn}.command`, label: btn }, {
                execute: () => console.log(`${btn} clicked`)
            });
        });
    }
}
