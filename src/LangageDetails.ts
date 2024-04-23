import * as vscode from 'vscode';
import { Langage } from './LangageDataTreeProvider';

export class LangageDetails implements vscode.WebviewViewProvider{
    private _view?: vscode.WebviewView;
    
    resolveWebviewView(webviewView: vscode.WebviewView, context: vscode.WebviewViewResolveContext<unknown>, token: vscode.CancellationToken): void | Thenable<void> {
        this._view = webviewView
    }
    openDetail(langages : Langage){
        if(this._view){
            this._view.webview.html=`
                <html>
                    <body>
                        <p>Version : ${langages.version}</p>
                    </body>
                </html>
            `;
        }
    }

}