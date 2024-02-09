import { compose } from 'redux';
import { connect } from 'react-redux';
import { withPlugins } from '../extend/withPlugins';
import { getManifestoInstance, getVisibleCanvasAudioResources, getVisibleCanvasVideoResources, getWindow } from '../state/selectors';
import { PrimaryWindow } from '../components/PrimaryWindow';

/** */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  var manifestoInstance = getManifestoInstance(state, {
    windowId: windowId
  });
  return {
    audioResources: getVisibleCanvasAudioResources(state, {
      windowId: windowId
    }) || [],
    isCollection: manifestoInstance && manifestoInstance.isCollection(),
    isCollectionDialogVisible: getWindow(state, {
      windowId: windowId
    }).collectionDialogOn,
    videoResources: getVisibleCanvasVideoResources(state, {
      windowId: windowId
    }) || []
  };
};
var enhance = compose(connect(mapStateToProps, null), withPlugins('PrimaryWindow'));
export default enhance(PrimaryWindow);