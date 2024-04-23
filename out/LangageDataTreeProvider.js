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
exports.Langage = exports.LangageDataTreeProvider = void 0;
const vscode = __importStar(require("vscode"));
class LangageDataTreeProvider {
    onDidChangeTreeData;
    getTreeItem(element) {
        return Promise.resolve(element);
    }
    getChildren(element) {
        return Promise.resolve(langs);
    }
}
exports.LangageDataTreeProvider = LangageDataTreeProvider;
class Langage extends vscode.TreeItem {
    label;
    version;
    constructor(label, version) {
        super(label);
        this.label = label;
        this.version = version;
    }
}
exports.Langage = Langage;
const langs = [
    {
        "label": "HTML",
        "version": "html version 5"
    },
    {
        "label": "CSS",
        "version": "css version 3"
    },
    {
        "label": "PHP",
        "version": "php version 8"
    }
];
//# sourceMappingURL=LangageDataTreeProvider.js.map