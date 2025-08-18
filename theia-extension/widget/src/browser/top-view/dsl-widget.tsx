import * as React from 'react';
import { ReactWidget } from '@theia/core/lib/browser';

export class DSLWidget extends ReactWidget {
    static readonly ID = 'dsl-editor-widget';
    static readonly LABEL = 'DSL Editor';

    constructor() {
        super();
        this.id = DSLWidget.ID;
        this.title.label = DSLWidget.LABEL;
        this.title.closable = true;
    }

    protected render(): React.ReactNode {
        return (
            <div style={{ padding: 10 }}>
                <div style={{ marginBottom: 8 }}>
                    <button onClick={() => this.run()}>Run</button>
                    <button onClick={() => this.download()}>Down</button>
                    <button onClick={() => this.reload()}>Reload</button>
                </div>
                {/* 这里可以嵌 Monaco 或你的 DSL 表单 */}
                <textarea style={{ width: '100%', height: '80%' }}></textarea>
            </div>
        );
    }

    private run() { console.log('Run DSL'); }
    private download() { console.log('Download'); }
    private reload() { console.log('Reload'); }
}
