import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { getVisibleCanvasIds, getAnnotationResourcesByMotivation } from '../state/selectors';
import { WindowSideBarAnnotationsPanel } from '../components/WindowSideBarAnnotationsPanel';

/**
 * mapStateToProps - to hook up connect
 * @memberof WindowSideBarAnnotationsPanel
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    annotationCount: getAnnotationResourcesByMotivation(state, {
      windowId: windowId
    }).length,
    canvasIds: getVisibleCanvasIds(state, {
      windowId: windowId
    })
  };
};
var enhance = compose(withTranslation(), connect(mapStateToProps, null), withPlugins('WindowSideBarAnnotationsPanel')
// further HOC
);
export default enhance(WindowSideBarAnnotationsPanel);