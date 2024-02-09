"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.workspaceReducer = void 0;
var _settings = _interopRequireDefault(require("../../config/settings"));
var _actionTypes = _interopRequireDefault(require("../actions/action-types"));
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
/** Check if the viewport dimensions are fully specified */
function hasViewportPosition(viewportPosition) {
  return viewportPosition.x !== undefined && viewportPosition.y !== undefined && viewportPosition.width !== undefined && viewportPosition.height !== undefined;
}

/** Check if the containee is fully within the bounds on the container */
function contains(container, containee) {
  return containee.x - containee.width / 2 > container.x - container.width / 2 && containee.y - containee.height / 2 > container.y - container.height / 2 && containee.x + containee.width / 2 < container.x + container.width / 2 && containee.y + containee.height / 2 < container.y + container.height / 2;
}

/**
 * workspaceReducer
 */
var workspaceReducer = exports.workspaceReducer = function workspaceReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _objectSpread(_objectSpread({}, _settings["default"].workspace), {}, {
    windowIds: []
  });
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newWorkspaceDimensions;
  var viewportPosition;
  var newWindowIds;
  switch (action.type) {
    case _actionTypes["default"].UPDATE_WORKSPACE:
      return _objectSpread(_objectSpread({}, state), action.config);
    case _actionTypes["default"].FOCUS_WINDOW:
      return _objectSpread(_objectSpread({}, state), {}, {
        focusedWindowId: action.windowId,
        viewportPosition: _objectSpread(_objectSpread({}, state.viewportPosition), action.position)
      });
    case _actionTypes["default"].ADD_WINDOW:
      return _objectSpread(_objectSpread({}, state), {}, {
        focusedWindowId: action.window.id,
        windowIds: [].concat(_toConsumableArray(state.windowIds || []), [action.window.id])
      });
    case _actionTypes["default"].REMOVE_WINDOW:
      newWindowIds = (state.windowIds || []).filter(function (v) {
        return v !== action.windowId;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        focusedWindowId: action.windowId === state.focusedWindowId ? newWindowIds[newWindowIds.length - 1] : state.focusedWindowId,
        windowIds: newWindowIds
      });
    case _actionTypes["default"].SET_WORKSPACE_FULLSCREEN:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFullscreenEnabled: action.isFullscreenEnabled
      });
    case _actionTypes["default"].TOGGLE_ZOOM_CONTROLS:
      return _objectSpread(_objectSpread({}, state), {}, {
        showZoomControls: action.showZoomControls
      });
    case _actionTypes["default"].UPDATE_WORKSPACE_MOSAIC_LAYOUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        layout: action.layout
      });
    case _actionTypes["default"].SET_WORKSPACE_ADD_VISIBILITY:
      return _objectSpread(_objectSpread({}, state), {}, {
        isWorkspaceAddVisible: action.isWorkspaceAddVisible
      });
    case _actionTypes["default"].SET_WORKSPACE_VIEWPORT_POSITION:
      newWorkspaceDimensions = {};
      viewportPosition = _objectSpread(_objectSpread({}, state.viewportPosition), action.payload.position);
      if (hasViewportPosition(viewportPosition) && !contains({
        height: state.height,
        width: state.width,
        x: 0,
        y: 0
      }, viewportPosition)) {
        newWorkspaceDimensions = {
          height: state.height * 2,
          width: state.width * 2
        };
      }
      return _objectSpread(_objectSpread(_objectSpread({}, state), newWorkspaceDimensions), {}, {
        viewportPosition: viewportPosition
      });
    case _actionTypes["default"].SET_CONFIG:
    case _actionTypes["default"].IMPORT_CONFIG:
    case _actionTypes["default"].UPDATE_CONFIG:
      return _objectSpread(_objectSpread({}, state), action.config.workspace);
    case _actionTypes["default"].IMPORT_MIRADOR_STATE:
      return action.state.workspace || {};
    case _actionTypes["default"].TOGGLE_DRAGGING:
      return _objectSpread(_objectSpread({}, state), {}, {
        draggingEnabled: !state.draggingEnabled
      });
    default:
      return state;
  }
};