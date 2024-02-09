function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { createSelector } from 'reselect';
import { getWorkspace } from './getters';
import { miradorSlice } from './utils';

/**
 * Returns the elastic layout from the state.
 * @param {object} state
 * @returns {Object}
 */
export function getElasticLayout(state) {
  return miradorSlice(state).elasticLayout;
}

/**
 * Returns if fullscreen is enabled.
 * @param {object} state
 * @returns {boolean}
 */
export var getFullScreenEnabled = createSelector([getWorkspace], function (workspace) {
  return workspace.isFullscreenEnabled;
});

/**
 * Returns the latest error from the state.
 * @param {object} state
 * @returns {object|undefined}
 */
export function getLatestError(state) {
  var _miradorSlice$errors$ = _slicedToArray(miradorSlice(state).errors.items, 1),
    errorId = _miradorSlice$errors$[0];
  return miradorSlice(state).errors[errorId];
}

/**
 * Returns the type of the workspace.
 * @param {Object} state
 * @returns {string} 'mosaic' | 'elastic'
 */
export var getWorkspaceType = createSelector([getWorkspace], function (_ref) {
  var type = _ref.type;
  return type;
});

/**
 * Returns the ID of the focused window.
 * @param {object} state
 * @returns {string|undefined}
 */
export var getFocusedWindowId = createSelector([getWorkspace], function (_ref2) {
  var focusedWindowId = _ref2.focusedWindowId;
  return focusedWindowId;
});

/**
 * Returns if a given window is focused.
 * @param {object} state
 * @param {string} windowId
 * @returns {boolean}
 */
export var isFocused = function isFocused(state, _ref3) {
  var windowId = _ref3.windowId;
  return getFocusedWindowId(state) === windowId;
};