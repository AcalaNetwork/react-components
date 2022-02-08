"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
var reducer = function (state, action) {
    var _a, _b;
    switch (action.type) {
        case "update-network-status": {
            var _c = action.data, network = _c.network, status_1 = _c.status;
            var config = state.networks[network];
            if (config) {
                config["status"] = status_1;
            }
            return __assign(__assign({}, state), { networks: __assign(__assign({}, state.networks), (_a = {}, _a[network] = config, _a)) });
        }
        case "update-network-api": {
            var _d = action.data, network = _d.network, api = _d.api;
            var config = state.networks[network];
            if (config) {
                config["api"] = api;
            }
            return __assign(__assign({}, state), { networks: __assign(__assign({}, state.networks), (_b = {}, _b[network] = config, _b)) });
        }
        default: {
            return state;
        }
    }
};
exports.reducer = reducer;
