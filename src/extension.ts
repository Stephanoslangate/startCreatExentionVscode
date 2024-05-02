// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import axios from 'axios';
import { LangageDataTreeProvider } from './LangageDataTreeProvider';
import { LangageDetails } from './LangageDetails';
import { FileGenerate } from './FilleTogenerate/Model/FileGenerate';
import { subscribeToDocumentChanges, EMOJI_MENTION } from './FilleTogenerate/Model/Diagnostic';
const COMMAND = 'code-actions-sample.command';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "masseka" is now active!');


	context.subscriptions.push(
		vscode.languages.registerCodeActionsProvider('markdown', new Emojizer(), {
			providedCodeActionKinds: Emojizer.providedCodeActionKinds
		}));

	const emojiDiagnostics = vscode.languages.createDiagnosticCollection("emoji");
	context.subscriptions.push(emojiDiagnostics);

	subscribeToDocumentChanges(context, emojiDiagnostics);

	context.subscriptions.push(
		vscode.languages.registerCodeActionsProvider('markdown', new Emojinfo(), {
			providedCodeActionKinds: Emojinfo.providedCodeActionKinds
		})
	);


	context.subscriptions.push(
		vscode.commands.registerCommand(COMMAND, () => vscode.env.openExternal(vscode.Uri.parse('https://unicode.org/emoji/charts-12.0/full-emoji-list.html')))
	);

	vscode.commands.registerCommand('extension.fatene', () => {
		fatene();
	});
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
		vscode.window.showQuickPick(['HTML','CSS'],{
			placeHolder: "Votre choix"
		}).then((result)=>{
			if(result === "HTML"){
				axios.get("https://api.chucknorris.io/jokes/random").then((response) =>{
					vscode.window.showInformationMessage(response.data.value)
				});

				 // Create and show a new webview
				const panel = vscode.window.createWebviewPanel(
					'Masseka', // Identifies the type of the webview. Used internally
					'masseka code', // Title of the panel displayed to the user
					vscode.ViewColumn.One, // Editor column to show the new webview panel in.
					{} // Webview options. More on these later.
				);

				//Gestion de mes images qui sont dans le assets DEBUT
				const webview1 = panel.webview;
				const asWebviewUri = (...args: string[]) => webview1.asWebviewUri(
					vscode.Uri.joinPath(context.extensionUri, ...args)
				);
				const placeholderUri1 = asWebviewUri("assets", "TP1.PNG");
				const placeholderUri2 = asWebviewUri("assets", "TP2.PNG");
				//Gestion de mes images qui sont dans le assets FIN

				panel.webview.html = getWebviewContent2(placeholderUri1,placeholderUri2);
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

	const fileG = new FileGenerate();
	fileG.createFile1(1);
	//const writeData = Buffer.from('my text data', 'utf8');
	//vscode.workspace.fs.writeFile(fileUri, writeData);
	const treeview = vscode.window.createTreeView('Liste-langages',{
		treeDataProvider: new LangageDataTreeProvider()
	})

	const langDetails = new LangageDetails();
	treeview.onDidChangeSelection((event)=>{
		langDetails.openDetail(event.selection[0]);
	});

	context.subscriptions.push(vscode.window.registerWebviewViewProvider('langage-datails', langDetails))
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {

}


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


export function fatene() {
	console.log("Nice Steph")
}
function fatene2() {
	vscode.window.showInformationMessage("Nice Steph")

}
function getWebviewContent2(placeholderUri1: vscode.Uri,placeholderUri2: vscode.Uri) {
	return `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
	</head>
	<style>
		body{
			background-color: rgb(223, 226, 226);
		}
		.txtctr{
			text-align: center;
			font-weight: 900;
			color:black;
	
		}
		.mc{
			text-decoration: none;
			text-transform: uppercase;
			color: rgb(244, 43, 43);
			padding: 4px;
			border: 1px solid rgb(115, 115, 33);
		}
		.mc span{
			color: rgb(31, 30, 2);
			animation: lg 5s;
		}
		@keyframes lg{
			0%{
				color: white;
			}
			100%{
				color: rgb(31, 30, 2);
			}
		}
		.fslist{
			width: 100%;
			display: flex;
			background-color: rgb(15, 35, 2);
		}
		.fs1{
			margin-left: 8%;
			padding-top: 10px;
			padding-bottom: 10px;
			animation: templates 2s ;
		}
		@keyframes templates{
			0%{
				transform: translate(100%,100%);
			}
			50%{
				transform: translate(50%,0%);
			}
			100%{
				transform: translate(0%,0%);
			}
		}
	</style>
	<body>
		<h2 class="txtctr">Bienvenu sur les templates <a href="" class="mc">Ma<span>sse</span>ka</a></h2>
		<div class="fslist">
			<div class="fs1">
				<a href="#" onclick="callFunction()"> <img src="${placeholderUri1}" alt="template 1 " width="200"></a>
			</div>
			<div class="fs1">
				<a href="#" onclick="${fatene2()}"><img src="${placeholderUri2}" alt="template 1 " width="200"></a>
			</div>
		</div>
		<button onclick="${fatene2()}">Call Function</button>

		<script>
			function callFunction() {
				vscode.postMessage({
					command: 'extension.fatene'
				});
			}
		</script>
	</body>
	</html>
	`;
}

export class Emojizer implements vscode.CodeActionProvider {

	public static readonly providedCodeActionKinds = [
		vscode.CodeActionKind.QuickFix
	];

	public provideCodeActions(document: vscode.TextDocument, range: vscode.Range): vscode.CodeAction[] | undefined {
		if (!this.isAtStartOfSmiley(document, range)) {
			return;
		}

		const replaceWithSmileyCatFix = this.createFix(document, range, '😺');

		const replaceWithSmileyFix = this.createFix(document, range, '😀');
		// Marking a single fix as `preferred` means that users can apply it with a
		// single keyboard shortcut using the `Auto Fix` command.
		replaceWithSmileyFix.isPreferred = true;
		const replaceWithSmileyHankyFix = this.createFix(document, range, '💩');

		const commandAction = this.createCommand();

		return [
			replaceWithSmileyCatFix,
			replaceWithSmileyFix,
			replaceWithSmileyHankyFix,
			commandAction
		];
	}

	private isAtStartOfSmiley(document: vscode.TextDocument, range: vscode.Range) {
		const start = range.start;
		const line = document.lineAt(start.line);
		return line.text[start.character] === ':' && line.text[start.character + 1] === ')';
	}

	private createFix(document: vscode.TextDocument, range: vscode.Range, emoji: string): vscode.CodeAction {
		const fix = new vscode.CodeAction(`Convert to ${emoji}`, vscode.CodeActionKind.QuickFix);
		fix.edit = new vscode.WorkspaceEdit();
		fix.edit.replace(document.uri, new vscode.Range(range.start, range.start.translate(0, 2)), emoji);
		return fix;
	}

	private createCommand(): vscode.CodeAction {
		const action = new vscode.CodeAction('Learn more...', vscode.CodeActionKind.Empty);
		action.command = { command: COMMAND, title: 'Learn more about emojis', tooltip: 'This will open the unicode emoji page.' };
		return action;
	}
}
export class Emojinfo implements vscode.CodeActionProvider {

	public static readonly providedCodeActionKinds = [
		vscode.CodeActionKind.QuickFix
	];

	provideCodeActions(document: vscode.TextDocument, range: vscode.Range | vscode.Selection, context: vscode.CodeActionContext, token: vscode.CancellationToken): vscode.CodeAction[] {
		// for each diagnostic entry that has the matching `code`, create a code action command
		return context.diagnostics
			.filter(diagnostic => diagnostic.code === EMOJI_MENTION)
			.map(diagnostic => this.createCommandCodeAction(diagnostic));
	}

	private createCommandCodeAction(diagnostic: vscode.Diagnostic): vscode.CodeAction {
		const action = new vscode.CodeAction('Learn more...', vscode.CodeActionKind.QuickFix);
		action.command = { command: COMMAND, title: 'Learn more about emojis', tooltip: 'This will open the unicode emoji page.' };
		action.diagnostics = [diagnostic];
		action.isPreferred = true;
		return action;
	}
}