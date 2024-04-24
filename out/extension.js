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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __importStar(require("vscode"));
const axios_1 = __importDefault(require("axios"));
const LangageDataTreeProvider_1 = require("./LangageDataTreeProvider");
const LangageDetails_1 = require("./LangageDetails");
const FileGenerate_1 = require("./FilleTogenerate/Model/FileGenerate");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "masseka" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('masseka.helloWorld', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        // Le QuickPick permet d'afficher une liste d'option à choisir
        // Dans cette parti on demmande de choisir entre Html et CSS
        // En fonction de ce que l'ulisateur fera comme choix on effectue une action spécifique
        // Le choix sera sauvegarder dans la variable result
        vscode.window.showQuickPick(['HTML', 'CSS'], {
            placeHolder: "Votre choix"
        }).then((result) => {
            if (result === "HTML") {
                axios_1.default.get("https://api.chucknorris.io/jokes/random").then((response) => {
                    vscode.window.showInformationMessage(response.data.value);
                });
                // Create and show a new webview
                const panel = vscode.window.createWebviewPanel('Masseka', // Identifies the type of the webview. Used internally
                'masseka code', // Title of the panel displayed to the user
                vscode.ViewColumn.One, // Editor column to show the new webview panel in.
                {} // Webview options. More on these later.
                );
                panel.webview.html = getWebviewContent();
            }
            else {
                /* axios.get("https://backend-omega-seven.vercel.app/api/getjoke").then((response) =>{
                    vscode.window.showInformationMessage(response.data[0].question + ""+response.data[0].punchline)
                }); */
                vscode.window.showInformationMessage("Sans css c'est une fille sans macqup, tu as deja vu ? :)");
            }
        });
        //vscode.window.showInformationMessage('Bienvenu chez masseka!');
        //vscode.window.showInformationMessage(vscode.workspace.getConfiguration().get('greetings')+ " Codeur");
    });
    const fileG = new FileGenerate_1.FileGenerate();
    fileG.createFile2(1);
    //const writeData = Buffer.from('my text data', 'utf8');
    //vscode.workspace.fs.writeFile(fileUri, writeData);
    const treeview = vscode.window.createTreeView('Liste-langages', {
        treeDataProvider: new LangageDataTreeProvider_1.LangageDataTreeProvider()
    });
    const langDetails = new LangageDetails_1.LangageDetails();
    treeview.onDidChangeSelection((event) => {
        langDetails.openDetail(event.selection[0]);
    });
    context.subscriptions.push(vscode.window.registerWebviewViewProvider('langage-datails', langDetails));
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
function getWebviewContent() {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Cat Coding</title>
  </head>
  <body>
	<h2><strong style='color:red;'>MASSEKA</strong> <strong style='color:yellow;'>Code</strong> Better</h2>
	  <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
  </body>
  </html>`;
}
//# sourceMappingURL=extension.js.map