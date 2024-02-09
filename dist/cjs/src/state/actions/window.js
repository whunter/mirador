"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addWindow = addWindow;
exports.focusWindow = focusWindow;
exports.hideCollectionDialog = hideCollectionDialog;
exports.maximizeWindow = maximizeWindow;
exports.minimizeWindow = minimizeWindow;
exports.removeWindow = removeWindow;
exports.setCompanionAreaOpen = setCompanionAreaOpen;
exports.setWindowThumbnailPosition = setWindowThumbnailPosition;
exports.setWindowViewType = setWindowViewType;
exports.showCollectionDialog = showCollectionDialog;
exports.toggleWindowSideBar = toggleWindowSideBar;
exports.updateWindow = updateWindow;
var _uuid = require("uuid");
var _actionTypes = _interopRequireDefault(require("./action-types"));
var _utils = require("../selectors/utils");
var _excluded = ["companionWindows", "manifest"];
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
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * focusWindow - action creator
 *
 * @param  {String} windowId
 * @memberof ActionCreators
 */
function focusWindow(windowId) {
  var pan = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    pan: pan,
    type: _actionTypes["default"].FOCUS_WINDOW,
    windowId: windowId
  };
}

/**
 * addWindow - action creator
 *
 * @param  {Object} options
 * @memberof ActionCreators
 */
function addWindow(_ref) {
  var companionWindows = _ref.companionWindows,
    manifest = _ref.manifest,
    options = _objectWithoutProperties(_ref, _excluded);
  return function (dispatch, getState) {
    var _miradorSlice = (0, _utils.miradorSlice)(getState()),
      config = _miradorSlice.config,
      _miradorSlice$workspa = _miradorSlice.workspace.windowIds,
      windowIds = _miradorSlice$workspa === void 0 ? [] : _miradorSlice$workspa;
    var numWindows = windowIds.length;
    var windowId = options.id || "window-".concat((0, _uuid.v4)());
    var cwThumbs = "cw-".concat((0, _uuid.v4)());
    var defaultCompanionWindows = [{
      content: 'thumbnailNavigation',
      "default": true,
      id: cwThumbs,
      position: options.thumbnailNavigationPosition || config.thumbnailNavigation.defaultPosition,
      windowId: windowId
    }].concat(_toConsumableArray((companionWindows || []).map(function (cw, i) {
      return _objectSpread(_objectSpread({}, cw), {}, {
        id: "cw-".concat((0, _uuid.v4)())
      });
    })));
    if (options.sideBarPanel || config.window.defaultSideBarPanel || config.window.sideBarPanel) {
      defaultCompanionWindows.unshift({
        content: options.sideBarPanel || options.defaultSearchQuery && 'search' || config.window.defaultSideBarPanel || config.window.sideBarPanel,
        "default": true,
        id: "cw-".concat((0, _uuid.v4)()),
        position: 'left',
        windowId: windowId
      });
    }
    var defaultOptions = {
      canvasId: undefined,
      collectionIndex: 0,
      companionAreaOpen: true,
      companionWindowIds: defaultCompanionWindows.map(function (cw) {
        return cw.id;
      }),
      draggingEnabled: true,
      highlightAllAnnotations: config.window.highlightAllAnnotations || false,
      id: windowId,
      manifestId: null,
      maximized: false,
      rangeId: null,
      rotation: null,
      selectedAnnotations: {},
      sideBarOpen: config.window.sideBarOpenByDefault !== undefined ? config.window.sideBarOpenByDefault || !!options.defaultSearchQuery : config.window.sideBarOpen || !!options.defaultSearchQuery,
      sideBarPanel: options.sideBarPanel || config.window.defaultSideBarPanel || config.window.sideBarPanel,
      thumbnailNavigationId: cwThumbs
    };
    var elasticLayout = _objectSpread(_objectSpread({}, config.window.elastic || {
      height: 400,
      width: 480
    }), {}, {
      x: 200 + (Math.floor(numWindows / 10) * 50 + numWindows * 30 % 300),
      y: 200 + numWindows * 50 % 300
    });
    dispatch({
      companionWindows: defaultCompanionWindows,
      elasticLayout: elasticLayout,
      manifest: manifest,
      type: _actionTypes["default"].ADD_WINDOW,
      window: _objectSpread(_objectSpread({}, defaultOptions), options)
    });
  };
}

/** */
function updateWindow(id, payload) {
  return {
    id: id,
    payload: payload,
    type: _actionTypes["default"].UPDATE_WINDOW
  };
}

/**
 * maximizeWindow
 * @param  {String} windowId
 * @memberof ActionCreators
 */
function maximizeWindow(windowId, layout) {
  return {
    type: _actionTypes["default"].MAXIMIZE_WINDOW,
    windowId: windowId
  };
}

/**
 * minimizeWindow
 * @param  {String} windowId
 * @memberof ActionCreators
 */
function minimizeWindow(windowId) {
  return {
    type: _actionTypes["default"].MINIMIZE_WINDOW,
    windowId: windowId
  };
}

/** */
function setCompanionAreaOpen(id, companionAreaOpen) {
  return {
    id: id,
    payload: {
      companionAreaOpen: companionAreaOpen
    },
    type: _actionTypes["default"].UPDATE_WINDOW
  };
}

/**
 * removeWindow - action creator
 *
 * @param  {String} windowId
 * @memberof ActionCreators
 */
function removeWindow(windowId) {
  return {
    type: _actionTypes["default"].REMOVE_WINDOW,
    windowId: windowId
  };
}

/**
 * toggleWindowSideBar - action creator
 *
 * @param  {String} windowId
 * @memberof ActionCreators
 */
function toggleWindowSideBar(windowId) {
  return {
    type: _actionTypes["default"].TOGGLE_WINDOW_SIDE_BAR,
    windowId: windowId
  };
}

/**
 * setWindowThumbnailPosition - action creator
 *
 * @param  {String} windowId
 * @param  {String} position
 * @memberof ActionCreators
 */
function setWindowThumbnailPosition(windowId, position) {
  return function (dispatch, getState) {
    var _getState = getState(),
      windows = _getState.windows;
    var thumbnailNavigationId = windows[windowId].thumbnailNavigationId;
    dispatch({
      id: thumbnailNavigationId,
      payload: {
        position: position
      },
      type: _actionTypes["default"].UPDATE_COMPANION_WINDOW
    });
  };
}

/**
 * setWindowViewType - action creator
 *
 * @param  {String} windowId
 * @param  {String} viewType
 * @memberof ActionCreators
 */
function setWindowViewType(windowId, viewType) {
  return {
    type: _actionTypes["default"].SET_WINDOW_VIEW_TYPE,
    viewType: viewType,
    windowId: windowId
  };
}

/** */
function showCollectionDialog(manifestId) {
  var collectionPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var windowId = arguments.length > 2 ? arguments[2] : undefined;
  return {
    collectionPath: collectionPath,
    manifestId: manifestId,
    type: _actionTypes["default"].SHOW_COLLECTION_DIALOG,
    windowId: windowId
  };
}

/** */
function hideCollectionDialog(windowId) {
  return {
    type: _actionTypes["default"].HIDE_COLLECTION_DIALOG,
    windowId: windowId
  };
}