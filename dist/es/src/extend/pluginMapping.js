function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import update from 'lodash/update';
import { connect } from 'react-redux';
import CompanionWindowRegistry from '../lib/CompanionWindowRegistry';

/**
 * Returns a mapping from targets to plugins and modes
 *
 * @param {Array} plugins
 * @return {Object} - looks like:
 *
 *  {
 *    'WorkspacePanel': {
 *      wrap:     [plugin3, ...],
 *      add:      [plugin4, ...],
 *    },
 *    ...
 *  }
 */
export function createTargetToPluginMapping(plugins) {
  return plugins.reduce(function (map, plugin) {
    return update(map, [plugin.target, plugin.mode], function (x) {
      return [].concat(_toConsumableArray(x || []), [plugin]);
    });
  }, {});
}

/** */
export function connectPluginsToStore(plugins) {
  return plugins.map(function (plugin) {
    return _objectSpread(_objectSpread({}, plugin), {}, {
      component: connectPluginComponent(plugin)
    });
  });
}

/** */
export function addPluginsToCompanionWindowsRegistry(plugins) {
  plugins.filter(function (p) {
    return p.companionWindowKey;
  }).forEach(function (plugin) {
    CompanionWindowRegistry[plugin.companionWindowKey] = plugin.component;
  });
  return CompanionWindowRegistry;
}

/** Connect plugin component to state */
function connectPluginComponent(plugin) {
  if (!plugin.mapStateToProps && !plugin.mapDispatchToProps) return plugin.component;
  return connect.apply(void 0, [plugin.mapStateToProps, plugin.mapDispatchToProps].concat(_toConsumableArray(plugin.connectOptions || [])))(plugin.component);
}