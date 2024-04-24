"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalThemeAutoLoad = void 0;
const Theme1_1 = require("./Theme1");
const DefaultTheme_1 = require("./DefaultTheme");
class GlobalThemeAutoLoad {
    getThemeObjet(id) {
        if (id == 1) {
            return new Theme1_1.Theme1();
        }
        else {
            return new DefaultTheme_1.DefaultTheme();
        }
    }
}
exports.GlobalThemeAutoLoad = GlobalThemeAutoLoad;
//# sourceMappingURL=GlobalThemeAutoLoad.js.map