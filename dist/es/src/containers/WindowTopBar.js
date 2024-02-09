import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import * as actions from '../state/actions';
import { getWindowConfig, isFocused } from '../state/selectors';
import { WindowTopBar } from '../components/WindowTopBar';

/** mapStateToProps */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  var config = getWindowConfig(state, {
    windowId: windowId
  });
  return {
    allowClose: config.allowClose,
    allowFullscreen: config.allowFullscreen,
    allowMaximize: config.allowMaximize,
    allowTopMenuButton: config.allowTopMenuButton,
    allowWindowSideBar: config.allowWindowSideBar,
    focused: isFocused(state, {
      windowId: windowId
    }),
    maximized: config.maximized
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
    focusWindow: function focusWindow() {
      return dispatch(actions.focusWindow(windowId));
    },
    maximizeWindow: function maximizeWindow() {
      return dispatch(actions.maximizeWindow(windowId));
    },
    minimizeWindow: function minimizeWindow() {
      return dispatch(actions.minimizeWindow(windowId));
    },
    removeWindow: function removeWindow() {
      return dispatch(actions.removeWindow(windowId));
    },
    toggleWindowSideBar: function toggleWindowSideBar() {
      return dispatch(actions.toggleWindowSideBar(windowId));
    }
  };
};
var enhance = compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps), withPlugins('WindowTopBar'));
export default enhance(WindowTopBar);