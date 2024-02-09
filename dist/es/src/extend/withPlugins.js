function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { forwardRef, useContext } from 'react';
import curry from 'lodash/curry';
import isEmpty from 'lodash/isEmpty';
import PluginContext from './PluginContext';

/** withPlugins should be the innermost HOC */
import { jsx as _jsx } from "react/jsx-runtime";
function _withPlugins(targetName, TargetComponent) {
  // eslint-disable-line no-underscore-dangle
  /** */
  function PluginHoc(props, ref) {
    var pluginMap = useContext(PluginContext);
    var passDownProps = _objectSpread(_objectSpread({}, props), ref ? {
      ref: ref
    } : {});
    var plugins = (pluginMap || {})[targetName];
    if (isEmpty(plugins) || isEmpty(plugins.wrap) && isEmpty(plugins.add)) {
      return /*#__PURE__*/_jsx(TargetComponent, _objectSpread({}, passDownProps));
    }
    var PluginComponents = (plugins.add || []).map(function (plugin) {
      return plugin.component;
    });
    var targetComponent = /*#__PURE__*/_jsx(TargetComponent, _objectSpread(_objectSpread({}, passDownProps), {}, {
      PluginComponents: PluginComponents
    }));
    if (isEmpty(plugins.wrap)) return targetComponent;

    /** */
    var pluginWrapper = function pluginWrapper(children, plugin) {
      var WrapPluginComponent = plugin.component;
      return /*#__PURE__*/_jsx(WrapPluginComponent, _objectSpread(_objectSpread({
        targetProps: passDownProps
      }, passDownProps), {}, {
        PluginComponents: PluginComponents,
        TargetComponent: TargetComponent,
        children: children
      }));
    };
    return plugins.wrap.slice().reverse().reduce(pluginWrapper, /*#__PURE__*/_jsx(TargetComponent, _objectSpread({}, passDownProps)));
  }
  var whatever = /*#__PURE__*/forwardRef(PluginHoc);
  whatever.displayName = "WithPlugins(".concat(targetName, ")");
  return whatever;
}

/** withPlugins('MyComponent')(MyComponent) */
export var withPlugins = curry(_withPlugins);