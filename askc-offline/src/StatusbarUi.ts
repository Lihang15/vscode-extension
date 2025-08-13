import { StatusBarItem, window, StatusBarAlignment } from 'vscode';

export class StatusbarUi {

    private static _statusBarItem: StatusBarItem;

    private static get statusbar() {
        if (!StatusbarUi._statusBarItem) {
            StatusbarUi._statusBarItem = window
                .createStatusBarItem(StatusBarAlignment.Right, 100);

            this.statusbar.show();
        }

        return StatusbarUi._statusBarItem;
    }

    static Init() {
        StatusbarUi.Online();
    }

    static Working(workingMsg: string = 'Working on it...') {
        StatusbarUi.statusbar.text = `$(pulse) ${workingMsg}`;
        StatusbarUi.statusbar.tooltip = 'In case if it takes long time, try to close all browser window.';
        StatusbarUi.statusbar.command = undefined;
    }

    public static Online() {
        StatusbarUi.statusbar.text = '$(notebook-execute) Sts8600-Help-Start';
        StatusbarUi.statusbar.command = 'extension.Sts8600-Help.goOnline';
        StatusbarUi.statusbar.tooltip = 'Click to run sts8600 help server';
    }

    public static Offline(port: Number) {
        StatusbarUi.statusbar.text = `$(circle-slash) Sts8600-Help Port : ${port}`;
        StatusbarUi.statusbar.command = 'extension.Sts8600-Help.goOffline';
        StatusbarUi.statusbar.tooltip = 'Click to stop sts8600 help server';
    }

    public static dispose() {
        StatusbarUi.statusbar.dispose();
    }
}
、