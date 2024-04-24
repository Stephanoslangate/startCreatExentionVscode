import * as vscode from 'vscode';
import { GlobalThemeAutoLoad } from '../Fille/Html/GlobalThemeAutoLoad';
// dependence pour générer nos fichier avec du contenu Debut
const fs = require('fs');
const path = require('path');
// dependence pour générer nos fichier avec du contenu Fin

export class FileGenerate {
    private _rootPath: string | undefined;
    private _content: string| undefined;

    // recuperation du dossier ouvert dans lequel nous allons creer notre fichier htm
    getRoot(){
        this._rootPath = (vscode.workspace.workspaceFolders && (vscode.workspace.workspaceFolders.length > 0))? vscode.workspace.workspaceFolders[0].uri.fsPath : undefined;
    }
    createFile(id:number){
        this.getRoot();
        const global = new GlobalThemeAutoLoad();
        const theme = global.getThemeObjet(id);
        this._content = theme.getContentTheme();
        fs.writeFile(path.join(this._rootPath , 'index.html'),this._content, (err: any) => {
            if (err) {
                return vscode.window.showErrorMessage('Failed to create boilerplate file!');
            }
            vscode.window.showInformationMessage('Created boilerplate files');
        });
        
    }


    getThemeHtml(id:number){

    }

}