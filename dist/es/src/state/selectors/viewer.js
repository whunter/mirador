import { createSelector } from 'reselect';
import CanvasWorld from '../../lib/CanvasWorld';
import { getVisibleCanvases } from './canvases';
import { getLayersForVisibleCanvases } from './layers';
import { getSequenceViewingDirection } from './sequences';

/**
 *  Instantiate a manifesto instance.
 * @param {object} state
 * @param {string} windowId
 * @return {object}
 */
export var getCurrentCanvasWorld = createSelector([getVisibleCanvases, getLayersForVisibleCanvases, getSequenceViewingDirection], function (canvases, layers, viewingDirection) {
  return new CanvasWorld(canvases, layers, viewingDirection);
});