import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { LayersPanel } from '../components/LayersPanel';
import { getVisibleCanvasIds } from '../state/selectors';

/**
 * mapStateToProps - to hook up connect
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id,
    windowId = _ref.windowId;
  return {
    canvasIds: getVisibleCanvasIds(state, {
      windowId: windowId
    })
  };
};
var enhance = compose(withTranslation(), connect(mapStateToProps), withPlugins('LayersPanel'));
export default enhance(LayersPanel);