"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApi = void 0;
var react_1 = require("react");
var Context_1 = require("../Context");
var useApi = function (name) {
    var _a, _b;
    var networks = (0, react_1.useContext)(Context_1.Context).networks;
    // if name is empty, return primary api
    if (!name) {
        return (_a = Object.values(networks).find(function (item) { return item.tag === 'primary'; })) === null || _a === void 0 ? void 0 : _a.api;
    }
    // try find by name
    var temp = networks[name];
    if (temp) {
        return temp.api;
    }
    // try find by tag
    return (_b = Object.values(networks).find(function (item) { return item.tag === name; })) === null || _b === void 0 ? void 0 : _b.api;
};
exports.useApi = useApi;
