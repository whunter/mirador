import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import * as actions from '../state/actions';
import { Window } from '../components/Window';
import { getManifestStatus, getManifestTitle, getThumbnailNavigationPosition, getWindow, getWorkspaceType, getWindowDraggability, getWindowViewType, getManifestError } from '../state/selectors';

/**
 * mapStateToProps - used to hook up connect to action creators
 * @memberof Window
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    isFetching: getManifestStatus(state, {
      windowId: windowId
    }).isFetching,
    label: getManifestTitle(state, {
      windowId: windowId
    }),
    manifestError: getManifestError(state, {
      windowId: windowId
    }),
    maximized: (getWindow(state, {
      windowId: windowId
    }) || {}).maximized,
    sideBarOpen: (getWindow(state, {
      windowId: windowId
    }) || {}).sideBarOpen,
    thumbnailNavigationPosition: getThumbnailNavigationPosition(state, {
      windowId: windowId
    }),
    view: getWindowViewType(state, {
      windowId: windowId
    }),
    windowDraggable: getWindowDraggability(state, {
      windowId: windowId
    }),
    workspaceType: getWorkspaceType(state)
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
    }
  };
};
var enhance = compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps), withPlugins('Window'));
export default enhance(Window);