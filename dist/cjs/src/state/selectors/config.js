"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConfig = getConfig;
exports.getContainerId = void 0;
exports.getExportableState = getExportableState;
exports.getThemeIds = exports.getThemeDirection = exports.getTheme = exports.getShowZoomControlsConfig = exports.getRequestsConfig = exports.getLanguagesFromConfigWithCurrent = void 0;
var _reselect = require("reselect");
var _deepmerge = _interopRequireDefault(require("deepmerge"));
var _utils = require("./utils");
var _getters = require("./getters");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Returns the config from the redux state.
 * @param {object} state
 * @returns {object} containing config
 */
function getConfig(state) {
  var slice = (0, _utils.miradorSlice)(state || {});
  return slice.config || {};
}

/**
 * Extract an exportable version of state using the configuration from the config.
 * @param {object} state
 * @returns {object} containing exportable state
 */
function getExportableState(state) {
  var exportConfig = getConfig(state)["export"];
  return Object.entries(exportConfig).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      stem = _ref2[0],
      value = _ref2[1];
    if (value === true) {
      acc[stem] = state[stem];
    } else if (value.filter) {
      acc[stem] = Object.entries(state[stem]).filter(value.filter).reduce(function (stemAcc, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          k = _ref4[0],
          v = _ref4[1];
        stemAcc[k] = v; // eslint-disable-line no-param-reassign
        return stemAcc;
      }, {});
    }
    return acc;
  }, {});
}

/**
* Return languages from config (in state) and indicate which is currently set.
* @param {object} state
* @returns {Array} [ {locale: 'de', label: 'Deutsch', current: true}, ... ]
*/
var getLanguagesFromConfigWithCurrent = exports.getLanguagesFromConfigWithCurrent = (0, _reselect.createSelector)([getConfig], function (_ref5) {
  var availableLanguages = _ref5.availableLanguages,
    language = _ref5.language;
  return Object.keys(availableLanguages).map(function (key) {
    return {
      current: key === language,
      label: availableLanguages[key],
      locale: key
    };
  });
});

/**
 * Returns if showZoomControls is set in the config.
 * @param {object} state
 * @returns {boolean}
 */
var getShowZoomControlsConfig = exports.getShowZoomControlsConfig = (0, _reselect.createSelector)([_getters.getWorkspace, getConfig], function (workspace, config) {
  return workspace.showZoomControls === undefined ? config.workspace.showZoomControls : workspace.showZoomControls;
});

/**
 * Returns the theme from the config.
 * @param {object} state
 * @returns {object} {palette: {...}, typography: {...}, overrides: {...}, ...}
 */
var getTheme = exports.getTheme = (0, _reselect.createSelector)([getConfig], function (_ref6) {
  var theme = _ref6.theme,
    themes = _ref6.themes,
    selectedTheme = _ref6.selectedTheme;
  return (0, _deepmerge["default"])(theme, themes[selectedTheme] || {});
});

/**
 * Returns the theme ids from the config.
 * @param {object} state
 * @returns {Array} ['dark', 'light']
 */
var getThemeIds = exports.getThemeIds = (0, _reselect.createSelector)([getConfig], function (_ref7) {
  var themes = _ref7.themes;
  return Object.keys(themes);
});

/* @deprecated */
var getContainerId = exports.getContainerId = (0, _reselect.createSelector)([getConfig], function (_ref8) {
  var id = _ref8.id;
  return id;
});

/**
 * Returns the theme direction from the config.
 * @param {object} state
 * @returns {string}
 */
var getThemeDirection = exports.getThemeDirection = (0, _reselect.createSelector)([getConfig], function (_ref9) {
  var theme = _ref9.theme;
  return theme.direction || 'ltr';
});
/**
 * Returns the theme direction from the config.
 * @param {object} state
 * @returns {object} {preprocessor: [...], postprocessor: [...]}
 */
var getRequestsConfig = exports.getRequestsConfig = (0, _reselect.createSelector)([getConfig], function (_ref10) {
  var requests = _ref10.requests;
  return requests || {};
});