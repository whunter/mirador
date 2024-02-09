import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { getCompanionWindowIdsForPosition, getCompanionAreaVisibility, getThemeDirection, getWindow } from '../state/selectors';
import * as actions from '../state/actions';
import { CompanionArea } from '../components/CompanionArea';

/** */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId,
    position = _ref.position;
  return {
    companionAreaOpen: getCompanionAreaVisibility(state, {
      position: position,
      windowId: windowId
    }),
    companionWindowIds: getCompanionWindowIdsForPosition(state, {
      position: position,
      windowId: windowId
    }),
    direction: getThemeDirection(state),
    sideBarOpen: (getWindow(state, {
      windowId: windowId
    }) || {}).sideBarOpen
  };
};
var mapDispatchToProps = {
  setCompanionAreaOpen: actions.setCompanionAreaOpen
};
var enhance = compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps), withPlugins('CompanionArea'));
export default enhance(CompanionArea);