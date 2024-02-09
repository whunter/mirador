import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { ErrorContent } from '../components/ErrorContent';
import { getCompanionWindow, getManifest, getWindow, getViewer, getConfig } from '../state/selectors';

/** mapStateToProps */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var companionWindowId = _ref.companionWindowId,
    windowId = _ref.windowId;
  return {
    metadata: {
      companionWindow: companionWindowId && getCompanionWindow(state, {
        companionWindowId: companionWindowId
      }),
      manifest: getManifest(state, {
        windowId: windowId
      }),
      viewer: getViewer(state, {
        windowId: windowId
      }),
      window: getWindow(state, {
        windowId: windowId
      })
    },
    showJsError: getConfig(state).window.showJsError
  };
};
var enhance = compose(withTranslation(), connect(mapStateToProps), withPlugins('ErrorContent'));
export default enhance(ErrorContent);