import { injectable, postConstruct } from 'inversify';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import * as React from 'react';
@injectable()
export class MyToolbarWidget extends ReactWidget {

    static readonly ID = 'my-toolbar-widget';
    static readonly LABEL = 'My Toolbar';

    @postConstruct()
    protected init(): void {
        this.id = MyToolbarWidget.ID;
        this.title.label = MyToolbarWidget.LABEL;
        this.title.caption = MyToolbarWidget.LABEL;
        this.title.closable = false;
        // this.title.hideCloseIcon = true;

        this.update();
    }

    protected render(): React.ReactNode {
        return (
            <div
                style={{
                    width: '100%',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '0 12px',
                    // background: '#f3f3f3',
                    marginLeft: '100px',
                    borderBottom: '1px solid #ccc',
                    boxSizing: 'border-box'
                }}
            >
                {/* 按钮1：运行 */}
                <button
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    onClick={() => alert('调试点击')}
                    title="调试"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                </button>

                {/* 按钮1：保存 */}
                <button
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    onClick={() => alert('保存按钮点击')}
                    title="保存"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                        <polyline points="17 21 17 13 7 13 7 21" />
                        <polyline points="7 3 7 8 15 8" />
                    </svg>
                </button>
                {/* 按钮3：调试 */}
                <button
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    onClick={() => alert('调试按钮点击')}
                    title="调试"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                    </svg>
                </button>
                <button
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    onClick={() => alert('调试按钮点击')}
                    title="调试"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>

                </button>

                <button
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    onClick={() => alert('调试按钮点击')}
                    title="调试"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="23 4 23 10 17 10" />
                        <polyline points="1 20 1 14 7 14" />
                        <path d="M3.51 9a9 9 0 0 1 14.13-3.36L23 10M1 14l5.36 5.36A9 9 0 0 0 20.49 15" />
                    </svg>


                </button>

                <button
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    onClick={() => alert('调试按钮点击')}
                    title="调试"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 8v3h-3V8h3zM7 8v3H4V8h3zM12 2v2M12 20v2" />
                        <path d="M8 16H5v-2h3v2zm11 0h-3v-2h3v2z" />
                        <circle cx="12" cy="12" r="4" />
                    </svg>
                </button>

                <button
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    onClick={() => alert('调试按钮点击')}
                    title="调试"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>

                </button>

                <button
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    onClick={() => alert('调试按钮点击')}
                    title="调试"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.7 0 1.32-.4 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06c.48.48 1.15.63 1.82.33.53-.22.91-.74 1-1.33V3a2 2 0 1 1 4 0v.09c0 .7.4 1.32 1 1.51.67.3 1.34.15 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82c.19.6.81 1 1.51 1H21a2 2 0 1 1 0 4h-.09c-.7 0-1.32.4-1.51 1z" />
                    </svg>


                </button>

                <button
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    onClick={() => alert('调试按钮点击')}
                    title="调试"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>



                </button>


            </div>
        );
    }
}
