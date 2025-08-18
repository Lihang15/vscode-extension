import { injectable, inject } from '@theia/core/shared/inversify';
import { 
    ApplicationShell, 
    WidgetManager,
    Widget
} from '@theia/core/lib/browser';
import { 
    FrontendApplicationContribution,
    OpenHandler,
    OpenerService
} from '@theia/core/lib/browser';
import { URI } from '@theia/core/lib/common/uri';
import { MaybePromise } from '@theia/core/lib/common/types';
import { JiangWebviewWidget } from './jiang-webview-widget';

@injectable()
export class JiangEditorOpener implements OpenHandler {

    readonly id = 'jiang-editor-opener';
    readonly label = 'Jiang Editor';

    @inject(WidgetManager)
    protected readonly widgetManager!: WidgetManager;

    @inject(ApplicationShell)
    protected readonly shell!: ApplicationShell;

    canHandle(uri: URI): MaybePromise<number> {
        if (uri.path.ext === '.jiang1') {
            return 1000; // High priority for .jiang files
        }
        return 0;
    }

    async open(uri: URI): Promise<Widget | undefined> {
        // Check if widget is already open for this file
        const existingWidget = this.shell.widgets.find(widget => 
            widget instanceof JiangWebviewWidget && 
            widget.title.caption === uri.toString()
        );
        
        if (existingWidget) {
            this.shell.activateWidget(existingWidget.id);
            return existingWidget;
        }

        // Create new widget with unique ID
        const widgetId = `${JiangWebviewWidget.ID}:${Date.now()}`;

        const widget = await this.widgetManager.getOrCreateWidget(JiangWebviewWidget.ID, widgetId);
        
        if (widget instanceof JiangWebviewWidget) {
            await widget.setFileUri(uri);
            this.shell.addWidget(widget, { area: 'main' });
            this.shell.activateWidget(widget.id);
            return widget;
        }
        return undefined;
    }
}

@injectable()
export class JiangEditorContribution implements FrontendApplicationContribution {

    @inject(OpenerService)
    protected readonly openerService!: OpenerService;

    @inject(JiangEditorOpener)
    protected readonly jiangOpener!: JiangEditorOpener;

    onStart(): void {
        // Register the opener for .jiang files
        (this.openerService as any).addHandler(this.jiangOpener);
        console.log('JiangEditorContribution: Registered opener for .jiang files');
    }
}