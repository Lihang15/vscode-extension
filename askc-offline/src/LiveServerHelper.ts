import * as vscode from 'vscode';
import * as path from 'path';
import { Config } from './Config';
import { StatusbarUi } from './StatusbarUi';
import express from 'express'; 


export class LiveServerHelper{

    private IsServerRunning: boolean;

    private isServerBusy : boolean;

    private app: any;

    private server: any;

    constructor(context: vscode.ExtensionContext) {
        let extensionPath = context.extensionPath
        const staticPath = path.join(extensionPath,'media','dist')
        this.IsServerRunning = false;
        this.isServerBusy = false
        this.app = express()
        this.app.use(express.static(staticPath)); 
        this.server = null
        StatusbarUi.Init();
    }

    public goOnline(){
        if(this.IsServerRunning){
            return
        }

        if(this.isServerBusy){
            return
        }
        this.isServerBusy = true;
        StatusbarUi.Working('Starting...');

        const server = this.app.listen(Config.getPort, () => {
            this.isServerBusy = false
            this.IsServerRunning = true;
            StatusbarUi.Offline(Config.getPort);
            console.log(`Sts8600 help server is running on port ${Config.getPort}.`);
            this.showPopUpMsg(`Sts8600 help server is running on port ${Config.getPort}.`)  
          });
          
          
          server.on('error',()=>{
            this.isServerBusy = false
            this.IsServerRunning = false;
            StatusbarUi.Online();
            console.log(`Port ${Config.getPort} is already in use or other server error`);
            this.showPopUpMsg(`Port ${Config.getPort} is already in use or other server error`,true)  
            
          });
          this.server = server
    }


    public goOffline(){
        if(this.isServerBusy){
            return
        }
        if(!this.IsServerRunning){
            return
        }
        StatusbarUi.Working('Stoping...');
        this.isServerBusy = true
        this.server.close(()=>{
            this.isServerBusy = false
            this.IsServerRunning = false;
            StatusbarUi.Online();
            console.log(`Sts8600 help server was stoped on port ${Config.getPort}.`);
            this.showPopUpMsg(`Sts8600 help server was stoped on port ${Config.getPort}.`)  
        })
    }


    private showPopUpMsg(msg: string, isErrorMsg: boolean = false, isWarning: boolean = false) {
        if (isErrorMsg) {
            vscode.window.showErrorMessage(msg);
        }
        else if (isWarning) {
            const donotShowMsg = 'I understand, Don\'t show again';
            vscode.window.showWarningMessage(msg, donotShowMsg)
                .then(choice => {
                    if (choice && choice === donotShowMsg) {
                        // todo
                    }
                });
        }
        else {
            const donotShowMsg = 'Don\'t show again';
            vscode.window.showInformationMessage(msg, donotShowMsg)
                .then(choice => {
                    if (choice && choice === donotShowMsg) {
                       //todo
                    }
                });
        }


    }



}
