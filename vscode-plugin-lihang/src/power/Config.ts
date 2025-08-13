import { workspace } from 'vscode';

export class Config {

    public static get configuration() {
        return workspace.getConfiguration('config');
    }

    private static getSettings<T>(val: string): T {
        return Config.configuration.get(val) as T;
    }

    private static setSettings(key: string, val: number, isGlobal: boolean = false): Thenable<void> {
        return Config.configuration.update(key, val, isGlobal);
    }

    public static get getWelcome(): boolean {
        return Config.getSettings<boolean>('showWelcome');
    }
    public static get getName(): string {
        return Config.getSettings<string>('yourName');
    }

    public static get getPort(): number {
        return Config.getSettings<number>('port');
    }

    public static setPort(port: number): Thenable<void> {
        return Config.setSettings('port', port);
    }

    
}
    // 最后一个参数，为true时表示写入全局配置(整个vscode的setting.json)，为false或不传时则只写入工作区配置（.vscode/setting.json）
    // vscode.workspace.getConfiguration().update('config.yourName', '你好 我修改了你', true);
    // 监听配置 如果用户改了配置 会执行这个
    // context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(() => {
    //     const newConfigName = vscode.workspace.getConfiguration().get('config.yourName');
    //     if (newConfigName !== configName) {
    //         console.log('配置发生变化：' + newConfigName);
    //     }
    // }));