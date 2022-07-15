"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var DimensionsContext = react_1.default.createContext({
    width: 0,
    height: 0,
});
exports.DimensionsProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(react_native_1.Dimensions.get('window')), dimensions = _b[0], setDimensions = _b[1];
    var onChange = function (_a) {
        var window = _a.window;
        setDimensions(window);
    };
    react_1.useEffect(function () {
        var subscription = react_native_1.Dimensions.addEventListener('change', onChange);
        return function () {
            // Using removeEventListener is deprecated in react-native > 0.65 and will throw warning. Use .remove() if available.
            return subscription && subscription.remove
                ? subscription.remove()
                : react_native_1.Dimensions.removeEventListener('change', onChange);
        };
    }, []);
    return (react_1.default.createElement(DimensionsContext.Provider, { value: dimensions }, children));
};
var useDimensions = function () { return react_1.useContext(DimensionsContext); };
exports.default = useDimensions;
