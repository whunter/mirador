import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { AudioViewer } from '../components/AudioViewer';
import { getConfig, getVisibleCanvasAudioResources, getVisibleCanvasCaptions } from '../state/selectors';

/** */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    audioOptions: getConfig(state).audioOptions,
    audioResources: getVisibleCanvasAudioResources(state, {
      windowId: windowId
    }) || [],
    captions: getVisibleCanvasCaptions(state, {
      windowId: windowId
    }) || []
  };
};
var enhance = compose(withTranslation(), connect(mapStateToProps, null), withPlugins('AudioViewer'));
export default enhance(AudioViewer);