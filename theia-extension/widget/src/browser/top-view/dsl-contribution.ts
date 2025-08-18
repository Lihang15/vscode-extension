import { injectable } from 'inversify';
import {
    TabBarToolbarContribution,
    TabBarToolbarRegistry
} from '@theia/core/lib/browser/shell/tab-bar-toolbar';

@injectable()
export class GlobalToolbarContribution implements TabBarToolbarContribution {

    registerToolbarItems(registry: TabBarToolbarRegistry): void {
        const buttons = [
            { id: 'run', label: 'Run' },
            { id: 'down', label: 'Down' },
            { id: 'reload', label: 'Reload' },
            { id: 'stop', label: 'Stop' },
            { id: 'validate', label: 'Validate' },
            { id: 'deploy', label: 'Deploy' },
            { id: 'logs', label: 'Logs' }
        ];

        buttons.forEach((btn, index) => {
            registry.registerItem({
                id: `global.${btn.id}`,
                command: `global.${btn.id}.command`,
                tooltip: btn.label,
                priority: index + 1
            });
        });
    }
}
