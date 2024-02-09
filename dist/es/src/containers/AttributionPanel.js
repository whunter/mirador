import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { getManifestLogo, getRequiredStatement, getRights } from '../state/selectors';
import { withPlugins } from '../extend/withPlugins';
import { AttributionPanel } from '../components/AttributionPanel';

/**
 * mapStateToProps - to hook up connect
 * @memberof WindowSideBarInfoPanel
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id,
    windowId = _ref.windowId;
  return {
    manifestLogo: getManifestLogo(state, {
      windowId: windowId
    }),
    requiredStatement: getRequiredStatement(state, {
      windowId: windowId
    }),
    rights: getRights(state, {
      windowId: windowId
    })
  };
};
var enhance = compose(withTranslation(), connect(mapStateToProps), withPlugins('AttributionPanel'));
export default enhance(AttributionPanel);