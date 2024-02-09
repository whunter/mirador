"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSortedLayers = exports.getLayersForWindow = exports.getLayersForVisibleCanvases = exports.getLayers = exports.getCanvasLayers = void 0;
var _reselect = require("reselect");
var _MiradorCanvas = _interopRequireDefault(require("../../lib/MiradorCanvas"));
var _canvases = require("./canvases");
var _utils = require("./utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * Get the image layers from a canvas.
 * @param {object} state
 * @param {object} props
 * @param {string} props.canvasId
 * @param {string} props.windowId
 * @param {string} props.companionWindowId
 * @returns {Array}
 */
var getCanvasLayers = exports.getCanvasLayers = (0, _reselect.createSelector)([_canvases.getCanvas], function (canvas) {
  if (!canvas) return [];
  var miradorCanvas = new _MiradorCanvas["default"](canvas);
  return miradorCanvas.imageResources;
});
var EMPTY_ARRAY = Object.freeze([]);
var getLayersForWindow = exports.getLayersForWindow = (0, _reselect.createSelector)([function (state) {
  return (0, _utils.miradorSlice)(state).layers;
}, function (state, _ref) {
  var windowId = _ref.windowId;
  return windowId;
}], function (layers, windowId) {
  return layers ? layers[windowId] || EMPTY_ARRAY : EMPTY_ARRAY;
});

/**
 * Get the layer state for a particular canvas.
 * @param {object} state
 * @param {string} windowId
 * @returns {object}
 */
var getLayers = exports.getLayers = (0, _reselect.createSelector)([getLayersForWindow, function (state, _ref2) {
  var canvasId = _ref2.canvasId;
  return canvasId;
}], function (layers, canvasId) {
  return layers[canvasId];
});

/**
 * Returns a list of canvas layers, sorted by the layer state configuration.
 * @param {object} state
 * @param {object} props
 * @param {string} props.companionWindowId
 * @returns {Array}
 */
var getSortedLayers = exports.getSortedLayers = (0, _reselect.createSelector)([getCanvasLayers, getLayers], function (canvasLayers, layerConfig) {
  if (!layerConfig) return canvasLayers;
  var sorted = canvasLayers.sort(function (a, b) {
    if (layerConfig[a.id] && layerConfig[a.id].index !== undefined && layerConfig[b.id] && layerConfig[b.id].index !== undefined) {
      return layerConfig[a.id].index - layerConfig[b.id].index;
    }

    // sort a layer with index data above layers without
    if (layerConfig[a.id] && layerConfig[a.id].index !== undefined) return -1;
    if (layerConfig[b.id] && layerConfig[b.id].index !== undefined) return 1;
    return 0;
  });
  return sorted;
});

/**
 * Get all the layer configuration for visible canvases.
 * @param {object} state
 * @param {object} props
 * @param {string} props.windowId
 * @returns {object}
 */
var getLayersForVisibleCanvases = exports.getLayersForVisibleCanvases = (0, _reselect.createSelector)([_canvases.getVisibleCanvasIds, getLayersForWindow], function (canvasIds, layers) {
  return canvasIds.reduce(function (acc, canvasId) {
    acc[canvasId] = layers[canvasId];
    return acc;
  }, {});
});