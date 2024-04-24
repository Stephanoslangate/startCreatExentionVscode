"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalTheme = void 0;
const Theme1_1 = require("./Theme1");
const DefaultTheme_1 = require("./DefaultTheme");
class GlobalTheme {
    getThemeObjet(id) {
        if (id == 1) {
            return new Theme1_1.Theme1();
        }
        else {
            return new DefaultTheme_1.DefaultTheme();
        }
    }
}
exports.GlobalTheme = GlobalTheme;
//# sourceMappingURL=GlobalTheme.js.map