"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNetworkConfigs = void 0;
var react_1 = require("react");
var Context_1 = require("../Context");
var useNetworkConfigs = function () {
    var data = (0, react_1.useContext)(Context_1.Context);
    return data.networks;
};
exports.useNetworkConfigs = useNetworkConfigs;
