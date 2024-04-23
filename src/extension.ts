// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import axios from 'axios';
import { LangageDataTreeProvider } from './LangageDataTreeProvider';
import { LangageDetails } from './LangageDetails';
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "masseka" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('masseka.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showQuickPick(['HTML','CSS'],{
			placeHolder: "Votre choix"
		}).then((result)=>{
			if(result === "HTML"){
				axios.get("https://api.chucknorris.io/jokes/random").then((response) =>{
					vscode.window.showInformationMessage(response.data.value)
				});
			}else{
				/* axios.get("https://backend-omega-seven.vercel.app/api/getjoke").then((response) =>{
					vscode.window.showInformationMessage(response.data[0].question + ""+response.data[0].punchline)
				}); */
				vscode.window.showInformationMessage("Sans css c'est une fille sans macqup, tu as deja vu ? :)");
			}
		});
		
		//vscode.window.showInformationMessage('Bienvenu chez masseka!');
		//vscode.window.showInformationMessage(vscode.workspace.getConfiguration().get('greetings')+ " Codeur");

	});

	const treeview = vscode.window.createTreeView('Liste-langages',{
		treeDataProvider: new LangageDataTreeProvider()
	})

	const langDetails = new LangageDetails()
	treeview.onDidChangeSelection((event)=>{
		langDetails.openDetail(event.selection[0]);
	});

	context.subscriptions.push(vscode.window.registerWebviewViewProvider('langage-datails', langDetails))
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
