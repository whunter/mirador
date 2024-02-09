"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withPlugins = void 0;
var _react = require("react");
var _curry = _interopRequireDefault(require("lodash/curry"));
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _PluginContext = _interopRequireDefault(require("./PluginContext"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /** withPlugins should be the innermost HOC */
function _withPlugins(targetName, TargetComponent) {
  // eslint-disable-line no-underscore-dangle
  /** */
  function PluginHoc(props, ref) {
    var pluginMap = (0, _react.useContext)(_PluginContext["default"]);
    var passDownProps = _objectSpread(_objectSpread({}, props), ref ? {
      ref: ref
    } : {});
    var plugins = (pluginMap || {})[targetName];
    if ((0, _isEmpty["default"])(plugins) || (0, _isEmpty["default"])(plugins.wrap) && (0, _isEmpty["default"])(plugins.add)) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(TargetComponent, _objectSpread({}, passDownProps));
    }
    var PluginComponents = (plugins.add || []).map(function (plugin) {
      return plugin.component;
    });
    var targetComponent = /*#__PURE__*/(0, _jsxRuntime.jsx)(TargetComponent, _objectSpread(_objectSpread({}, passDownProps), {}, {
      PluginComponents: PluginComponents
    }));
    if ((0, _isEmpty["default"])(plugins.wrap)) return targetComponent;

    /** */
    var pluginWrapper = function pluginWrapper(children, plugin) {
      var WrapPluginComponent = plugin.component;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(WrapPluginComponent, _objectSpread(_objectSpread({
        targetProps: passDownProps
      }, passDownProps), {}, {
        PluginComponents: PluginComponents,
        TargetComponent: TargetComponent,
        children: children
      }));
    };
    return plugins.wrap.slice().reverse().reduce(pluginWrapper, /*#__PURE__*/(0, _jsxRuntime.jsx)(TargetComponent, _objectSpread({}, passDownProps)));
  }
  var whatever = /*#__PURE__*/(0, _react.forwardRef)(PluginHoc);
  whatever.displayName = "WithPlugins(".concat(targetName, ")");
  return whatever;
}

/** withPlugins('MyComponent')(MyComponent) */
var withPlugins = exports.withPlugins = (0, _curry["default"])(_withPlugins);