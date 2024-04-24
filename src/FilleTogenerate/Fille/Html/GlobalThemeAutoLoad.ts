import * as vscode from 'vscode';
import { Theme1 } from './Theme1';
import { DefaultTheme } from './DefaultTheme';

export class GlobalThemeAutoLoad {
    getThemeObjet(id:number){
        if( id == 1){
            return new Theme1();
        }else{
            return new DefaultTheme();
        }
    }
}