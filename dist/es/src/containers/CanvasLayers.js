import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import * as actions from '../state/actions';
import { getCanvasLabel, getLayers, getSortedLayers } from '../state/selectors';
import { CanvasLayers } from '../components/CanvasLayers';

/** For connect */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var canvasId = _ref.canvasId,
    windowId = _ref.windowId;
  return {
    label: getCanvasLabel(state, {
      canvasId: canvasId,
      windowId: windowId
    }),
    layerMetadata: getLayers(state, {
      canvasId: canvasId,
      windowId: windowId
    }),
    layers: getSortedLayers(state, {
      canvasId: canvasId,
      windowId: windowId
    })
  };
};

/**
 * mapDispatchToProps - to hook up connect
 * @memberof WindowSideBarAnnotationsPanel
 * @private
 */
var mapDispatchToProps = {
  updateLayers: actions.updateLayers
};
var enhance = compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps));
export default enhance(CanvasLayers);