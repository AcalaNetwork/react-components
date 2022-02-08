"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var react_1 = __importStar(require("react"));
var Context_1 = require("./Context");
var reducer_1 = require("./reducer");
var useConnector_1 = require("./hooks/useConnector");
function Connector(_a) {
    var configs = _a.configs, children = _a.children;
    var _b = (0, react_1.useReducer)(reducer_1.reducer, configs), state = _b[0], dispatch = _b[1];
    (0, useConnector_1.useConnector)(configs.networks, dispatch);
    return react_1.default.createElement(Context_1.Provider, { value: state }, children);
}
exports.default = react_1.default.memo(Connector);
