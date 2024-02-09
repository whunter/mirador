import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { fetchManifest, removeResource } from '../state/actions';
import { ManifestListItemError } from '../components/ManifestListItemError';

/** */
var mapDispatchToProps = {
  onDismissClick: removeResource,
  onTryAgainClick: fetchManifest
};
var enhance = compose(withTranslation(), connect(null, mapDispatchToProps), withPlugins('ManifestListItemError'));
export default enhance(ManifestListItemError);