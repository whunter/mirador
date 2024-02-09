import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import * as actions from '../state/actions';
import { getAllowedWindowViewTypes, getWindowViewType } from '../state/selectors';
import { WindowViewSettings } from '../components/WindowViewSettings';

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */
var mapDispatchToProps = {
  setWindowViewType: actions.setWindowViewType
};

/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    viewTypes: getAllowedWindowViewTypes(state, {
      windowId: windowId
    }),
    windowViewType: getWindowViewType(state, {
      windowId: windowId
    })
  };
};
var enhance = compose(withTranslation(null, {
  withRef: true
}), connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true
}), withPlugins('WindowViewSettings'));
export default enhance(WindowViewSettings);