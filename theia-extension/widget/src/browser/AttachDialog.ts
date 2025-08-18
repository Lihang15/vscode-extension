import { AbstractDialog, DialogProps } from '@theia/core/lib/browser/dialogs';
import { Message } from '@phosphor/messaging';


export class AttachDialog extends AbstractDialog<string> {

  protected inputNode: HTMLInputElement;

  constructor() {
    super({ title: 'Attach Resource' } as DialogProps);

    this.inputNode = document.createElement('input');
    this.inputNode.type = 'text';
    this.inputNode.placeholder = 'Enter URL or path...';
    this.inputNode.className = 'theia-input';

    this.contentNode.appendChild(this.inputNode);

    this.appendAcceptButton('OK');
    this.appendCloseButton('Cancel');
  }

  get value(): string {
    return this.inputNode.value;
  }

  protected onAfterAttach(msg: Message): void {
    super.onAfterAttach(msg);
    this.inputNode.focus();
  }
}
