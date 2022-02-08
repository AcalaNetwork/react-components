"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConnector = void 0;
var react_1 = require("react");
var create_api_1 = require("../utils/create-api");
function useCachedNetworkConfigs(network) {
    var cacheKey = (0, react_1.useRef)("");
    var _a = (0, react_1.useState)(), cachedConfigs = _a[0], updateCacheConfigs = _a[1];
    (0, react_1.useEffect)(function () {
        var newCacheKey = Object.entries(network)
            .map(function (_a) {
            var k = _a[0], v = _a[1];
            return "".concat(k, "-").concat(JSON.stringify({ tag: v.tag, endpoints: v.endposints }));
        })
            .join("-");
        if (newCacheKey !== cacheKey.current) {
            cacheKey.current = newCacheKey;
            updateCacheConfigs(network);
        }
    }, [network]);
    return cachedConfigs;
}
var useConnector = function (networks, dispatch) {
    var cachedNetworks = useCachedNetworkConfigs(networks);
    (0, react_1.useEffect)(function () {
        if (!cachedNetworks)
            return;
        Object.entries(cachedNetworks).forEach(function (_a) {
            var name = _a[0], config = _a[1];
            if (config.apiType && config.apiType === "rxjs") {
                (0, create_api_1.initRxApi)(name, config, dispatch);
            }
            (0, create_api_1.initPromiseApi)(name, config, dispatch);
        });
    }, [cachedNetworks]);
};
exports.useConnector = useConnector;
