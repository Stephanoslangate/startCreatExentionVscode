"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileGenerate = void 0;
const vscode = __importStar(require("vscode"));
const GlobalThemeAutoLoad_1 = require("../Fille/Html/GlobalThemeAutoLoad");
// dependence pour générer nos fichier avec du contenu Debut
const fs = require('fs');
const path = require('path');
// dependence pour générer nos fichier avec du contenu Fin
class FileGenerate {
    _rootPath;
    _content;
    // recuperation du dossier ouvert dans lequel nous allons creer notre fichier htm
    getRoot() {
        this._rootPath = (vscode.workspace.workspaceFolders && (vscode.workspace.workspaceFolders.length > 0)) ? vscode.workspace.workspaceFolders[0].uri.fsPath : undefined;
        try {
            fs.writeFileSync(path.join(this._rootPath, 'test.html'), "<p>Bonjour Masseka</p>");
        }
        catch (error) {
            console.log(error);
        }
    }
    createFile(id) {
        this.getRoot();
        const global = new GlobalThemeAutoLoad_1.GlobalThemeAutoLoad();
        const theme = global.getThemeObjet(id);
        this._content = theme.getContentTheme();
        fs.writeFile(path.join(this._rootPath, 'index.html'), this._content, (err) => {
            if (err) {
                return vscode.window.showErrorMessage('Failed to create boilerplate file!');
            }
            vscode.window.showInformationMessage('Le template généré avec succes');
        });
    }
    createFile1(id) {
        this.getRoot();
        const global = new GlobalThemeAutoLoad_1.GlobalThemeAutoLoad();
        const theme = global.getThemeObjet(id);
        this._content = theme.getContentTheme();
        fs.writeFile(path.join(this._rootPath, 'index.html'), this._content, (err) => {
            if (err) {
                return vscode.window.showErrorMessage('Failed to create boilerplate file!');
            }
            vscode.window.showInformationMessage('Le template généré avec succes');
        });
        var openPath = vscode.Uri.parse(path.join(this._rootPath, 'index.html')); //A request file path
        vscode.workspace.openTextDocument(openPath).then(doc => {
            vscode.window.showTextDocument(doc);
        });
    }
    getThemeHtml(id) {
    }
}
exports.FileGenerate = FileGenerate;
//# sourceMappingURL=FileGenerate.js.map