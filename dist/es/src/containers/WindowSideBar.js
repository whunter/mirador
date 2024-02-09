import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { WindowSideBar } from '../components/WindowSideBar';
import { getThemeDirection, getWindow } from '../state/selectors';

/**
 * mapStateToProps - to hook up connect
 * @memberof WindowSideBar
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    direction: getThemeDirection(state),
    sideBarOpen: (getWindow(state, {
      windowId: windowId
    }) || {}).sideBarOpen,
    sideBarPanel: (getWindow(state, {
      windowId: windowId
    }) || {}).sideBarPanel
  };
};
var enhance = compose(withTranslation(), connect(mapStateToProps, null), withPlugins('WindowSideBar'));
export default enhance(WindowSideBar);