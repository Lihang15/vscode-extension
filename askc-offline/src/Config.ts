import { workspace } from 'vscode';

export class Config {

    public static get configuration() {
        return workspace.getConfiguration('Sts8600Help.settings');
    }

    private static getSettings<T>(val: string): T {
        return Config.configuration.get(val) as T;
    }

    private static setSettings(key: string, val: number, isGlobal: boolean = false): Thenable<void> {
        return Config.configuration.update(key, val, isGlobal);
    }

    public static get getHost(): string {
        return Config.getSettings<string>('host');
    }

    public static get getPort(): number {
        return Config.getSettings<number>('port');
    }

    public static setPort(port: number): Thenable<void> {
        return Config.setSettings('port', port);
    }

    
}
