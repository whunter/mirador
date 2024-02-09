"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCompanionWindowIdsForPosition = exports.getCompanionWindow = exports.getCompanionAreaVisibility = void 0;
exports.getCompanionWindows = getCompanionWindows;
exports.selectCompanionWindowDimensions = exports.getThumbnailNavigationPosition = exports.getCompanionWindowsForPosition = exports.getCompanionWindowsForContent = void 0;
var _reselect = require("reselect");
var _groupBy = _interopRequireDefault(require("lodash/groupBy"));
var _utils = require("./utils");
var _getters = require("./getters");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Returns companion windows.
 * @param {object} state
 * @returns {object}
 */
function getCompanionWindows(state) {
  return (0, _utils.miradorSlice)(state).companionWindows || {};
}

/**
 * Returns the companion window.
 * @param {object} state
 * @param {object} props
 * @param {string} props.companionWindowId
 * @returns {object|undefined}
 */
var getCompanionWindow = exports.getCompanionWindow = (0, _reselect.createSelector)([getCompanionWindows, function (state, _ref) {
  var companionWindowId = _ref.companionWindowId;
  return companionWindowId;
}], function (companionWindows, companionWindowId) {
  return companionWindowId && companionWindows[companionWindowId];
});

/**
 * Return position of thumbnail navigation in a certain window.
 * @param {object} state
 * @param {object} props
 * @param {string} props.windowId
 * @returns {string|undefined}
 */
var getThumbnailNavigationPosition = exports.getThumbnailNavigationPosition = (0, _reselect.createSelector)([_getters.getWindow, getCompanionWindows], function (window, companionWindows) {
  return window && companionWindows[window.thumbnailNavigationId] && companionWindows[window.thumbnailNavigationId].position;
});

/**
 * Return companion window ids from a window.
 * @param {string} windowId
 * @returns {Array}
 */
var getCompanionWindowIndexByWindowAndPosition = (0, _reselect.createSelector)([_getters.getWindows, getCompanionWindows], function (windows, companionWindows) {
  return (Object.keys(windows) || []).reduce(function (obj, id) {
    return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, id, (0, _groupBy["default"])(windows[id].companionWindowIds, function (cwid) {
      return companionWindows[cwid] && companionWindows[cwid].position;
    })));
  }, {});
});

/**
 * Return companion window ids from a window.
 * @param {string} windowId
 * @returns {Array}
 */
var getCompanionWindowsByWindowAndPosition = (0, _reselect.createSelector)([_getters.getWindows, getCompanionWindows], function (windows, companionWindows) {
  return (Object.keys(windows) || []).reduce(function (obj, id) {
    return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, id, (0, _groupBy["default"])(windows[id].companionWindowIds.map(function (cwid) {
      return companionWindows[cwid];
    }), function (cw) {
      return cw.position;
    })));
  }, {});
});

/**
 * Return companion windows of a window.
 * @param {object} state
 * @param {string} windowId
 * @returns {Array}
 */
var getCompanionWindowsOfWindow = (0, _reselect.createSelector)([function (state, _ref2) {
  var windowId = _ref2.windowId;
  return windowId;
}, getCompanionWindowsByWindowAndPosition], function (windowId, companionWindows) {
  return companionWindows[windowId] || {};
});

/**
 * Return companion windows ids of a window.
 * @param {object} state
 * @param {string} windowId
 * @returns {Array}
 */
var getCompanionWindowIdsOfWindow = (0, _reselect.createSelector)([function (state, _ref3) {
  var windowId = _ref3.windowId;
  return windowId;
}, getCompanionWindowIndexByWindowAndPosition], function (windowId, companionWindowIds) {
  return companionWindowIds[windowId] || {};
});

/**
 * Return the companion window string from state in a given windowId and position.
 * @param {object} state
 * @param {string} windowId
 * @param {string} position
 * @returns {string}
 */
var getCompanionWindowsForPosition = exports.getCompanionWindowsForPosition = (0, _reselect.createSelector)([getCompanionWindowsOfWindow, function (state, _ref4) {
  var position = _ref4.position;
  return position;
}], function (companionWindows, position) {
  return companionWindows[position] || EMPTY_ARRAY;
});

/**
 * Return the companion window string from state in a given windowId and content type.
 * @param {object} state
 * @param {string} windowId
 * @param {string} position
 * @returns {string}
 */
var getCompanionWindowsForContent = exports.getCompanionWindowsForContent = (0, _reselect.createSelector)([getCompanionWindowsOfWindow, function (state, _ref5) {
  var content = _ref5.content;
  return content;
}], function (companionWindows, content) {
  var _ref6;
  return (_ref6 = []).concat.apply(_ref6, _toConsumableArray(Object.values(companionWindows))).filter(function (w) {
    return w.content === content;
  });
});
var EMPTY_ARRAY = [];

/**
 * Returns companion window ids for position.
 * @param {object} state
 * @param {object} props
 * @param {string} props.windowId
 * @param {string} props.position
 * @returns {Array}
 */
var getCompanionWindowIdsForPosition = exports.getCompanionWindowIdsForPosition = (0, _reselect.createSelector)([getCompanionWindowIdsOfWindow, function (state, _ref7) {
  var position = _ref7.position;
  return position;
}], function (companionWindowIds, position) {
  return companionWindowIds[position] || EMPTY_ARRAY;
});

/**
 * Returns the visibility of the companion area.
 * @param {object} state
 * @param {string} position
 * @returns {boolean}
 */
var getCompanionAreaVisibility = exports.getCompanionAreaVisibility = (0, _reselect.createSelector)([function (state, _ref8) {
  var position = _ref8.position;
  return position;
}, _getters.getWindow], function (position, window) {
  if (!window) return false;
  var companionAreaOpen = window.companionAreaOpen,
    sideBarOpen = window.sideBarOpen;
  if (position !== 'left') return true;
  return !!(companionAreaOpen && sideBarOpen);
});

/**
 * Returns the dimensions.
 * @param {object} state
 * @param {string} companionWindowId
 * @returns {object} containing height and width
 */
var selectCompanionWindowDimensions = exports.selectCompanionWindowDimensions = (0, _reselect.createSelector)([getCompanionWindowsOfWindow], function (companionWindows) {
  var _ref9;
  var width = 0;
  var height = 0;
  (_ref9 = []).concat.apply(_ref9, _toConsumableArray(Object.values(companionWindows))).forEach(function (cw) {
    if (cw.position.match(/right/)) {
      width += 235;
    }
    if (cw.position.match(/bottom/)) {
      height += 201;
    }
  });
  return {
    height: height,
    width: width
  };
});