"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useKeyboardShortcuts = exports.useLocalStorage = exports.useIPC = void 0;
var useIPC_1 = require("./useIPC");
Object.defineProperty(exports, "useIPC", { enumerable: true, get: function () { return useIPC_1.useIPC; } });
var useLocalStorage_1 = require("./useLocalStorage");
Object.defineProperty(exports, "useLocalStorage", { enumerable: true, get: function () { return useLocalStorage_1.useLocalStorage; } });
var useKeyboardShortcuts_1 = require("./useKeyboardShortcuts");
Object.defineProperty(exports, "useKeyboardShortcuts", { enumerable: true, get: function () { return useKeyboardShortcuts_1.useKeyboardShortcuts; } });
