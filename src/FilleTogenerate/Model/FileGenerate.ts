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
    createFile2(id:number){
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
    // autoriser la creation du fichier index.html
    createFile(){
        this.getRoot();
        fs.writeFile(path.join(this._rootPath , 'index.html'), this.getIndexFileContent(), (err: any) => {
                if (err) {
                    return vscode.window.showErrorMessage('Failed to create boilerplate file!');
                }
                vscode.window.showInformationMessage('Created boilerplate files');
        });
    }
    //Le contenu du fichier html généré
    getIndexFileContent(){
	return `<!DOCTYPE html>
	<html lang="en">
	<head>
	  <meta charset="UTF-8" />
	  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
	  <title>Document</title>
	  <link rel="stylesheet" href="app.css" />
	</head>
	<body>
		<p>Bonjour et Bien chez Masseka</p>
	  <script src="app.js"></script>
	</body>
	</html>`;
}

    getThemeHtml(id:number){

    }

}