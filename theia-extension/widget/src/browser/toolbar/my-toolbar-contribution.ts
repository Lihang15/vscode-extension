import { injectable, inject } from 'inversify';
import { FrontendApplication, FrontendApplicationContribution } from '@theia/core/lib/browser';
import { MyToolbarWidget } from './my-toolbar-widget';

@injectable()
export class MyToolbarContribution implements FrontendApplicationContribution {

    @inject(MyToolbarWidget)
    protected readonly widget: MyToolbarWidget;

    async onStart(app: FrontendApplication): Promise<void> {
        // ✅ 在 Theia 菜单栏下方插入 Toolbar
        app.shell.addWidget(this.widget, { area: 'top' })
    }

    
}
