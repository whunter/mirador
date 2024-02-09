import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import * as actions from '../state/actions';
import { getThumbnailNavigationPosition, getThemeDirection } from '../state/selectors';
import { WindowThumbnailSettings } from '../components/WindowThumbnailSettings';

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */
var mapDispatchToProps = {
  setWindowThumbnailPosition: actions.setWindowThumbnailPosition
};

/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    direction: getThemeDirection(state),
    thumbnailNavigationPosition: getThumbnailNavigationPosition(state, {
      windowId: windowId
    })
  };
};
var enhance = compose(withTranslation(null, {
  withRef: true
}), connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true
}), withPlugins('WindowThumbnailSettings')
// further HOC go here
);
export default enhance(WindowThumbnailSettings);