"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consumer = exports.Provider = exports.Context = void 0;
var react_1 = __importDefault(require("react"));
exports.Context = react_1.default.createContext({});
exports.Provider = exports.Context.Provider;
exports.Consumer = exports.Context.Consumer;
