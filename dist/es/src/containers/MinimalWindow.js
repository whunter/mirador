import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import * as actions from '../state/actions';
import { MinimalWindow } from '../components/MinimalWindow';
import { getWindowConfig } from '../state/selectors';

/** mapStateToProps */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    allowClose: getWindowConfig(state, {
      windowId: windowId
    }).allowClose,
    allowWindowSideBar: getWindowConfig(state, {
      windowId: windowId
    }).allowWindowSideBar
  };
};

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */
var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var windowId = _ref2.windowId;
  return {
    removeWindow: function removeWindow() {
      return dispatch(actions.removeWindow(windowId));
    }
  };
};
var enhance = compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps), withPlugins('MinimalWindow'));
export default enhance(MinimalWindow);