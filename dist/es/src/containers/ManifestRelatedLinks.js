import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { getManifestHomepage, getManifestRelated, getManifestRenderings, getManifestSeeAlso, getManifestUrl } from '../state/selectors';
import { ManifestRelatedLinks } from '../components/ManifestRelatedLinks';

/**
 * mapStateToProps - to hook up connect
 * @memberof WindowSideBarInfoPanel
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id,
    windowId = _ref.windowId;
  return {
    homepage: getManifestHomepage(state, {
      windowId: windowId
    }),
    manifestUrl: getManifestUrl(state, {
      windowId: windowId
    }),
    related: getManifestRelated(state, {
      windowId: windowId
    }),
    renderings: getManifestRenderings(state, {
      windowId: windowId
    }),
    seeAlso: getManifestSeeAlso(state, {
      windowId: windowId
    })
  };
};
var enhance = compose(withTranslation(), connect(mapStateToProps), withPlugins('ManifestRelatedLinks'));
export default enhance(ManifestRelatedLinks);