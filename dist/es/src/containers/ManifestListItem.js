import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { getManifest, getManifestTitle, getManifestThumbnail, getCanvases, getManifestLogo, getManifestProviderName, getWindowManifests, getManifestoInstance, getSequenceBehaviors } from '../state/selectors';
import * as actions from '../state/actions';
import { ManifestListItem } from '../components/ManifestListItem';

/** */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var manifestId = _ref.manifestId,
    provider = _ref.provider;
  var manifest = getManifest(state, {
    manifestId: manifestId
  }) || {};
  var manifesto = getManifestoInstance(state, {
    manifestId: manifestId
  });
  var isCollection = (manifesto || {
    isCollection: function isCollection() {
      return false;
    }
  }).isCollection();
  var size = isCollection ? manifesto.getTotalItems() : getCanvases(state, {
    manifestId: manifestId
  }).length;
  return {
    active: getWindowManifests(state).includes(manifestId),
    error: manifest.error,
    isCollection: isCollection,
    isFetching: manifest.isFetching,
    isMultipart: isCollection && getSequenceBehaviors(state, {
      manifestId: manifestId
    }).includes('multi-part'),
    manifestLogo: getManifestLogo(state, {
      manifestId: manifestId
    }),
    provider: provider || getManifestProviderName(state, {
      manifestId: manifestId
    }),
    ready: !!manifest.json,
    size: size,
    thumbnail: getManifestThumbnail(state, {
      manifestId: manifestId
    }),
    title: getManifestTitle(state, {
      manifestId: manifestId
    })
  };
};

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */
var mapDispatchToProps = {
  addWindow: actions.addWindow,
  fetchManifest: actions.fetchManifest
};
var enhance = compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps), withPlugins('ManifestListItem'));
export default enhance(ManifestListItem);