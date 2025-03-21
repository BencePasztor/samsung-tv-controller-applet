var applet;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MainApplet: () => (/* binding */ MainApplet),
  main: () => (/* binding */ main)
});

;// ./src/settings.ts
const { AppletSettings, BindingDirection } = imports.ui.settings;
class Settings {
    constructor(uuid, instanceId) {
        this.state = {};
        this.settings = new AppletSettings(this.state, uuid, instanceId);
        this.bind_settings();
    }
    bind_settings() {
        this.settings.bindProperty(BindingDirection.IN, 'host', 'host', (arg) => this.on_settings_changed(arg), "");
        this.settings.bindProperty(BindingDirection.IN, 'port', 'port', (arg) => this.on_settings_changed(arg), "8002");
        this.settings.bindProperty(BindingDirection.IN, 'name', 'name', (arg) => this.on_settings_changed(arg), "SamsungTvRemote");
        this.settings.bindProperty(BindingDirection.BIDIRECTIONAL, 'token', 'token', (arg) => this.on_settings_changed(arg), "");
    }
    on_settings_changed(arg) {
        if (typeof this.handle_on_settings_changed === "function") {
            this.handle_on_settings_changed(arg);
        }
    }
}

;// ./src/main.ts
const { IconApplet } = imports.ui.applet;

class MainApplet extends IconApplet {
    constructor(metadata, orientation, panelHeight, instanceId) {
        super(orientation, panelHeight, instanceId);
        this.metadata = metadata;
        this.uuid = metadata.uuid;
        this.orientation = orientation;
        this.panelHeight = panelHeight;
        this.instanceId = instanceId;
        this.settings = new Settings(metadata.uuid, instanceId);
        this.set_applet_icon_name("cs-screen");
        this.set_applet_tooltip('Click here to change the tooltip to "Hello world!"');
    }
    on_applet_clicked(_) {
        this.set_applet_tooltip("Hello world!");
        return false;
    }
}
function main(metadata, orientation, panelHeight, instanceId) {
    return new MainApplet(metadata, orientation, panelHeight, instanceId);
}

applet = __webpack_exports__;
/******/ })()
;