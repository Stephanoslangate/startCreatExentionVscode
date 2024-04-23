"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LangageDetails = void 0;
class LangageDetails {
    _view;
    resolveWebviewView(webviewView, context, token) {
        this._view = webviewView;
    }
    openDetail(langages) {
        if (this._view) {
            this._view.webview.html = `
                <html>
                    <body>
                        <p>Version : ${langages.version}</p>
                    </body>
                </html>
            `;
        }
    }
}
exports.LangageDetails = LangageDetails;
//# sourceMappingURL=LangageDetails.js.map