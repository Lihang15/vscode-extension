import * as React from 'react';
import { injectable, inject, postConstruct } from '@theia/core/shared/inversify';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { Message } from '@theia/core/lib/browser';
import { URI } from '@theia/core/lib/common/uri';
import { FileService } from '@theia/filesystem/lib/browser/file-service';

@injectable()
export class JiangWebviewWidget extends ReactWidget {

    static readonly ID = 'jiang-webview-widget';
    static readonly LABEL = 'Jiang Webview';

    @inject(FileService)
    protected readonly fileService!: FileService;

    protected fileUri: URI | undefined;
    protected fileContent: string = '';

    @postConstruct()
    protected init(): void {
        this.id = JiangWebviewWidget.ID;
        this.title.label = JiangWebviewWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-file-text-o';
        this.update();
    }

    /**
     * Set the file URI and load its content
     */
    async setFileUri(uri: URI): Promise<void> {
        this.fileUri = uri;
        this.title.label = uri.path.base;
        this.title.caption = uri.toString();
        
        try {
            const fileContent = await this.fileService.read(uri);
            this.fileContent = fileContent.value;
            this.update();
        } catch (error) {
            console.error('Failed to read file:', error);
            this.fileContent = 'Error loading file content';
            this.update();
        }
    }

    protected render(): React.ReactNode {
        return (
            <div style={{ 
                padding: '20px', 
                width: '100%', 
                height: '100%',
                backgroundColor: '#f8f9fa',
                fontFamily: 'Arial, sans-serif'
            }}>
                <div style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    minHeight: '200px'
                }}>
                    <h1 style={{
                        color: '#333',
                        textAlign: 'center',
                        marginBottom: '20px',
                        padding: '15px',
                        backgroundColor: '#e9ecef',
                        borderRadius: '5px',
                        border: '2px solid #dee2e6',
                        fontSize: '24px',
                        fontWeight: 'bold'
                    }}>
                        {this.fileContent || 'No content available'}
                    </h1>
                    
                    <div style={{
                        marginTop: '20px',
                        padding: '10px',
                        backgroundColor: '#f1f3f4',
                        borderRadius: '5px',
                        fontSize: '14px',
                        color: '#666'
                    }}>
                        <strong>File:</strong> {this.fileUri?.toString() || 'No file selected'}
                    </div>
                </div>
            </div>
        );
    }

    protected onActivateRequest(msg: Message): void {
        super.onActivateRequest(msg);
        this.node.focus();
    }
}