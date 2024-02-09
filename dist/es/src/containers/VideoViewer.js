import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { VideoViewer } from '../components/VideoViewer';
import { getConfig, getVisibleCanvasCaptions, getVisibleCanvasVideoResources } from '../state/selectors';

/** */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    captions: getVisibleCanvasCaptions(state, {
      windowId: windowId
    }) || [],
    videoOptions: getConfig(state).videoOptions,
    videoResources: getVisibleCanvasVideoResources(state, {
      windowId: windowId
    }) || []
  };
};
var enhance = compose(withTranslation(), connect(mapStateToProps, null), withPlugins('VideoViewer'));
export default enhance(VideoViewer);