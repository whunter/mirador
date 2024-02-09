"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCompanionWindow = addCompanionWindow;
exports.addOrUpdateCompanionWindow = addOrUpdateCompanionWindow;
exports.expandNodes = expandNodes;
exports.removeCompanionWindow = removeCompanionWindow;
exports.toggleNode = toggleNode;
exports.updateCompanionWindow = updateCompanionWindow;
var _uuid = require("uuid");
var _actionTypes = _interopRequireDefault(require("./action-types"));
var _selectors = require("../selectors");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var defaultProps = {
  content: null,
  position: null
};

/** */
function addCompanionWindow(windowId, payload) {
  var defaults = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps;
  var id = "cw-".concat((0, _uuid.v4)());
  return {
    id: id,
    payload: _objectSpread(_objectSpread(_objectSpread({}, defaults), payload), {}, {
      id: id,
      windowId: windowId
    }),
    type: _actionTypes["default"].ADD_COMPANION_WINDOW,
    windowId: windowId
  };
}

/** */
function addOrUpdateCompanionWindow(windowId, payload) {
  var defaults = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps;
  return function (dispatch, getState) {
    var state = getState();
    var position = payload.position;
    var updatableWindowId = position === 'left' && (0, _selectors.getCompanionWindowIdsForPosition)(state, {
      position: position,
      windowId: windowId
    })[0];
    if (updatableWindowId) {
      dispatch(updateCompanionWindow(windowId, updatableWindowId, payload));
    } else {
      dispatch(addCompanionWindow(windowId, payload, defaults));
    }
  };
}

/** */
function updateCompanionWindow(windowId, id, payload) {
  return {
    id: id,
    payload: payload,
    type: _actionTypes["default"].UPDATE_COMPANION_WINDOW,
    windowId: windowId
  };
}

/** */
function removeCompanionWindow(windowId, id) {
  return {
    id: id,
    type: _actionTypes["default"].REMOVE_COMPANION_WINDOW,
    windowId: windowId
  };
}

/** */
function toggleNode(windowId, id, nodeId) {
  return function (dispatch, getState) {
    var state = getState();
    var collapsedNodeIds = (0, _selectors.getManuallyExpandedNodeIds)(state, {
      companionWindowId: id
    }, false);
    var expandedNodeIds = (0, _selectors.getManuallyExpandedNodeIds)(state, {
      companionWindowId: id
    }, true);
    var visibleNodeIds = (0, _selectors.getVisibleNodeIds)(state, {
      id: id,
      windowId: windowId
    });
    var expand = collapsedNodeIds.indexOf(nodeId) !== -1 || expandedNodeIds.indexOf(nodeId) === -1 && visibleNodeIds.indexOf(nodeId) === -1;
    return dispatch({
      id: id,
      payload: _defineProperty({}, nodeId, {
        expanded: expand
      }),
      type: _actionTypes["default"].TOGGLE_TOC_NODE,
      windowId: windowId
    });
  };
}

/** Update the expanded nodes state */
function expandNodes(windowId, id, nodeIds) {
  return function (dispatch, getState) {
    var state = getState();
    var expandedNodeIds = (0, _selectors.getManuallyExpandedNodeIds)(state, {
      companionWindowId: id
    }, true);
    var payload = {};
    expandedNodeIds.forEach(function (nodeId) {
      payload[nodeId] = {
        expanded: false
      };
    });
    nodeIds.forEach(function (nodeId) {
      payload[nodeId] = {
        expanded: true
      };
    });
    return dispatch({
      id: id,
      payload: payload,
      type: _actionTypes["default"].TOGGLE_TOC_NODE,
      windowId: windowId
    });
  };
}