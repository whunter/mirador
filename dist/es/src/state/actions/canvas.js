function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import ActionTypes from './action-types';
import { getNextCanvasGrouping, getPreviousCanvasGrouping, getCanvasGrouping } from '../selectors';

/**
 * setCanvas - action creator
 *
 * @param  {String} windowId
 * @param  {String} canvasId
 * @memberof ActionCreators
 */
export function setCanvas(windowId, canvasId) {
  var newGroup = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return function (dispatch, getState) {
    var state = getState();
    var visibleCanvases = newGroup;
    if (!visibleCanvases) {
      var group = getCanvasGrouping(state, {
        canvasId: canvasId,
        windowId: windowId
      });
      visibleCanvases = (group || []).map(function (c) {
        return c.id;
      });
    }
    dispatch(_objectSpread(_objectSpread({}, options), {}, {
      canvasId: canvasId,
      type: ActionTypes.SET_CANVAS,
      visibleCanvases: visibleCanvases,
      windowId: windowId
    }));
  };
}

/** Set the window's canvas to the next canvas grouping */
export function setNextCanvas(windowId) {
  return function (dispatch, getState) {
    var state = getState();
    var newGroup = getNextCanvasGrouping(state, {
      windowId: windowId
    });
    var ids = (newGroup || []).map(function (c) {
      return c.id;
    });
    newGroup && dispatch(setCanvas(windowId, ids[0], ids));
  };
}

/** Set the window's canvas to the previous canvas grouping */
export function setPreviousCanvas(windowId) {
  return function (dispatch, getState) {
    var state = getState();
    var newGroup = getPreviousCanvasGrouping(state, {
      windowId: windowId
    });
    var ids = (newGroup || []).map(function (c) {
      return c.id;
    });
    newGroup && dispatch(setCanvas(windowId, ids[0], ids));
  };
}

/**
 *
 * @param windowId
 * @param payload
 * @returns {{payload: *, type: string, windowId: *}}
 */
export function updateViewport(windowId, payload) {
  return {
    payload: payload,
    type: ActionTypes.UPDATE_VIEWPORT,
    windowId: windowId
  };
}