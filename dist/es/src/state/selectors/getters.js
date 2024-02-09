import { createSelector } from 'reselect';
import { miradorSlice } from './utils';

/**
 * Returns the manifest titles for all open windows.
 * @param {object} state
 * @returns {Array} containing manifests ids.
 */
export function getWindowManifests(state) {
  return Object.values(miradorSlice(state).windows).map(function (window) {
    return window.manifestId;
  });
}

/**
 * Returns the opened windows.
 * @param {object} state
 * @returns {object} {id: {canvasId: {...}, ...}, ...}
 */
export function getWindows(state) {
  return miradorSlice(state).windows || {};
}

/**
 * Returns a window based on a given windowId.
 * @param {object} state
 * @param {object} props
 * @param {string} props.windowId
 * @returns {object|undefined}
 */
export function getWindow(state, _ref) {
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
export var getViewer = createSelector([function (state) {
  return miradorSlice(state).viewers;
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
export function getWorkspace(state) {
  return miradorSlice(state).workspace;
}

/**
 * Returns the windowIds.
 * @param {object} state
 * @returns {Array}
 */
export var getWindowIds = createSelector([getWorkspace], function (_ref3) {
  var windowIds = _ref3.windowIds;
  return windowIds || [];
});

/**
 * Returns all manifests including manifest information.
 * @param {object} state
 * @returns {object}
 */
export function getManifests(state) {
  return miradorSlice(state).manifests || {};
}

/**
 * Get the relevant manifest information for a given manifest.
 * @param {object} state
 * @param {object} props
 * @param {string} props.manifestId
 * @param {string} props.windowId
 * @returns {object}
 */
export function getManifest(state, _ref4) {
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
export function getCatalog(state) {
  return miradorSlice(state).catalog || {};
}