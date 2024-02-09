import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { getManifestStatus, getManifestTitle, getWindowConfig } from '../state/selectors';
import { WindowTopBarTitle } from '../components/WindowTopBarTitle';

/** mapStateToProps */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    error: getManifestStatus(state, {
      windowId: windowId
    }).error,
    hideWindowTitle: getWindowConfig(state, {
      windowId: windowId
    }).hideWindowTitle,
    isFetching: getManifestStatus(state, {
      windowId: windowId
    }).isFetching,
    manifestTitle: getManifestTitle(state, {
      windowId: windowId
    })
  };
};
var enhance = compose(withTranslation(), connect(mapStateToProps, null), withPlugins('WindowTopBarTitle'));
export default enhance(WindowTopBarTitle);