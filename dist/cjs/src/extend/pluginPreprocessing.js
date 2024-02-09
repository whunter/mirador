"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterValidPlugins = filterValidPlugins;
exports.getConfigFromPlugins = getConfigFromPlugins;
exports.getReducersFromPlugins = getReducersFromPlugins;
exports.getSagasFromPlugins = getSagasFromPlugins;
var _deepmerge = _interopRequireDefault(require("deepmerge"));
var _pluginValidation = require("./pluginValidation");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
/** */
function filterValidPlugins(plugins) {
  var _splitPluginsByValida = splitPluginsByValidation(plugins),
    validPlugins = _splitPluginsByValida.validPlugins,
    invalidPlugins = _splitPluginsByValida.invalidPlugins;
  logInvalidPlugins(invalidPlugins);
  return validPlugins;
}

/** */
function splitPluginsByValidation(plugins) {
  var invalidPlugins = [];
  var validPlugins = [];
  plugins.forEach(function (plugin) {
    if (Array.isArray(plugin)) {
      var allValid = plugin.every(function (p) {
        return (0, _pluginValidation.validatePlugin)(p);
      });
      allValid ? validPlugins.push.apply(validPlugins, _toConsumableArray(plugin)) : invalidPlugins.push.apply(invalidPlugins, _toConsumableArray(plugin));
    } else {
      (0, _pluginValidation.validatePlugin)(plugin) ? validPlugins.push(plugin) : invalidPlugins.push(plugin);
    }
  });
  return {
    invalidPlugins: invalidPlugins,
    validPlugins: validPlugins
  };
}

/** */
function logInvalidPlugins(plugins) {
  plugins.forEach(function (plugin) {
    return console.log("Mirador: Plugin ".concat(plugin.name, " is not valid and was rejected."));
  });
}

/**  */
function getReducersFromPlugins(plugins) {
  return plugins && plugins.reduce(function (acc, plugin) {
    return _objectSpread(_objectSpread({}, acc), plugin.reducers);
  }, {});
}

/**  */
function getConfigFromPlugins(plugins) {
  return plugins && plugins.reduce(function (acc, plugin) {
    return (0, _deepmerge["default"])(acc, plugin.config || {});
  }, {});
}

/**  */
function getSagasFromPlugins(plugins) {
  return plugins && plugins.filter(function (plugin) {
    return plugin.saga;
  }).map(function (plugin) {
    return plugin.saga;
  });
}