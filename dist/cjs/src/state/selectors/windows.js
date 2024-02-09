"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWindowDraggability = exports.getWindowConfig = exports.getMaximizedWindowsIds = exports.getAllowedWindowViewTypes = void 0;
exports.getWindowTitles = getWindowTitles;
exports.getWindowViewType = void 0;
var _reselect = require("reselect");
var _manifests = require("./manifests");
var _config = require("./config");
var _getters = require("./getters");
var _workspace = require("./workspace");
var _sequences = require("./sequences");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Returns the window configuration based.
 * @param {object} state
 * @param {string} windowId
 * @returns {object}
 */
var getWindowConfig = exports.getWindowConfig = (0, _reselect.createSelector)([_config.getConfig, _getters.getWindow], function (_ref) {
  var defaultConfig = _ref.window;
  var windowConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _objectSpread(_objectSpread({}, defaultConfig), windowConfig);
});

/**
 * Returns the manifest titles for all open windows.
 * @param {object} state
 * @returns {object}
 */
function getWindowTitles(state) {
  var result = {};
  Object.keys((0, _getters.getWindows)(state)).forEach(function (windowId) {
    result[windowId] = (0, _manifests.getManifestTitle)(state, {
      windowId: windowId
    });
  });
  return result;
}

/**
 * Returns an array containing the maximized windowIds.
 * @param {object} state
 * @return {Array}
 */
var getMaximizedWindowsIds = exports.getMaximizedWindowsIds = (0, _reselect.createSelector)([_getters.getWindows], function (windows) {
  return Object.values(windows).filter(function (window) {
    return window.maximized === true;
  }).map(function (window) {
    return window.id;
  });
});

/**
 * Returns type of view in a certain window.
 * @param {object} state
 * @param {object} props
 * @param {string} props.manifestId
 * @param {string} props.windowId
 * @param {string}
 */
var getWindowViewType = exports.getWindowViewType = (0, _reselect.createSelector)([_getters.getWindow, getWindowConfig, _sequences.getSequenceViewingHint, _sequences.getSequenceBehaviors], function (window, _ref2, manifestViewingHint, manifestBehaviors) {
  var _ref2$views = _ref2.views,
    views = _ref2$views === void 0 ? [] : _ref2$views,
    defaultView = _ref2.defaultView;
  if (window && window.view) return window.view;
  var config = (views || []).find(function (view) {
    return view.behaviors && view.behaviors.some(function (b) {
      return manifestViewingHint === b || manifestBehaviors.includes(b);
    });
  });
  return config && config.key || defaultView;
});

/**
 * Returns the window view type for a given window.
 * @param {object} state
 * @param {string} windowId
 * @returns {string} 'single' | 'book' | 'scroll' | 'gallery'
 */
var getAllowedWindowViewTypes = exports.getAllowedWindowViewTypes = (0, _reselect.createSelector)([_sequences.getSequenceViewingHint, _sequences.getSequenceBehaviors, getWindowConfig], function (manifestViewingHint, manifestBehaviors, _ref3) {
  var _ref3$views = _ref3.views,
    views = _ref3$views === void 0 ? [] : _ref3$views,
    defaultView = _ref3.defaultView;
  return (views || []).reduce(function (allowedViews, view) {
    if (view.key === defaultView || !view.behaviors || view.behaviors.some(function (b) {
      return manifestViewingHint === b || manifestBehaviors.includes(b);
    })) allowedViews.push(view.key);
    return allowedViews;
  }, []);
});

/**
 * Return the draggability of a window.
 * @param {object} state
 * @param {object} props
 * @returns {boolean}
 */
var getWindowDraggability = exports.getWindowDraggability = (0, _reselect.createSelector)([_workspace.getWorkspaceType, _getters.getWindow, function (state) {
  return (0, _getters.getWindowIds)(state).length > 1;
}], function (workspaceType, window, manyWindows) {
  if (workspaceType === 'elastic') return true;
  return manyWindows && window && window.maximized === false;
});