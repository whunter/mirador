"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCatalog = getCatalog;
exports.getManifest = getManifest;
exports.getManifests = getManifests;
exports.getViewer = void 0;
exports.getWindow = getWindow;
exports.getWindowIds = void 0;
exports.getWindowManifests = getWindowManifests;
exports.getWindows = getWindows;
exports.getWorkspace = getWorkspace;
var _reselect = require("reselect");
var _utils = require("./utils");
/**
 * Returns the manifest titles for all open windows.
 * @param {object} state
 * @returns {Array} containing manifests ids.
 */
function getWindowManifests(state) {
  return Object.values((0, _utils.miradorSlice)(state).windows).map(function (window) {
    return window.manifestId;
  });
}

/**
 * Returns the opened windows.
 * @param {object} state
 * @returns {object} {id: {canvasId: {...}, ...}, ...}
 */
function getWindows(state) {
  return (0, _utils.miradorSlice)(state).windows || {};
}

/**
 * Returns a window based on a given windowId.
 * @param {object} state
 * @param {object} props
 * @param {string} props.windowId
 * @returns {object|undefined}
 */
function getWindow(state, _ref) {
  var windowId = _ref.windowId;
  return getWindows(state)[windowId];
}

/**
 * Returns the viewer for a given window.
 * @param {object} state
 * @param {object} props
 * @param {string} props.windowId
 * @returns {object|undefined} {flip: false, rotation: 0, x: 1, y: 2, zoom: 0.5}
 */
var getViewer = exports.getViewer = (0, _reselect.createSelector)([function (state) {
  return (0, _utils.miradorSlice)(state).viewers;
}, function (state, _ref2) {
  var windowId = _ref2.windowId;
  return windowId;
}], function (viewers, windowId) {
  return viewers[windowId];
});

/**
 * Returns the workspace.
 * @param {object} state
 * @returns {object}
 */
function getWorkspace(state) {
  return (0, _utils.miradorSlice)(state).workspace;
}

/**
 * Returns the windowIds.
 * @param {object} state
 * @returns {Array}
 */
var getWindowIds = exports.getWindowIds = (0, _reselect.createSelector)([getWorkspace], function (_ref3) {
  var windowIds = _ref3.windowIds;
  return windowIds || [];
});

/**
 * Returns all manifests including manifest information.
 * @param {object} state
 * @returns {object}
 */
function getManifests(state) {
  return (0, _utils.miradorSlice)(state).manifests || {};
}

/**
 * Get the relevant manifest information for a given manifest.
 * @param {object} state
 * @param {object} props
 * @param {string} props.manifestId
 * @param {string} props.windowId
 * @returns {object}
 */
function getManifest(state, _ref4) {
  var manifestId = _ref4.manifestId,
    windowId = _ref4.windowId;
  var manifests = getManifests(state);
  return manifests && manifests[manifestId || windowId && (getWindow(state, {
    windowId: windowId
  }) || {}).manifestId];
}

/**
 * Get the opened catalog.
 * @param {object} state
 * @returns {object} containing manifestIds for the manifests in the catalog
 */
function getCatalog(state) {
  return (0, _utils.miradorSlice)(state).catalog || {};
}