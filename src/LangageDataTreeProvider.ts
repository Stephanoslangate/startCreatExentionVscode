import * as vscode from 'vscode';

export class LangageDataTreeProvider implements vscode.TreeDataProvider<Langage>{
    onDidChangeTreeData?: vscode.Event<void | Langage | Langage[] | null | undefined> | undefined;
    getTreeItem(element: Langage): vscode.TreeItem | Thenable<vscode.TreeItem> {
        return Promise.resolve(element);
    }
    getChildren(element?: Langage | undefined): vscode.ProviderResult<Langage[]> {
        return Promise.resolve(langs);
    }


}


export class Langage extends vscode.TreeItem{
    constructor
    (
        public readonly label: string,
        public readonly version : string
    ){
        super(label);
    }
}

const langs :  Langage[] =[
    {
        "label": "HTML",
        "version":"html version 5"
    },
    {
        "label": "CSS",
        "version":"css version 3"
    },
    {
        "label": "PHP",
        "version":"php version 8"
    }
]