import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import * as actions from '../state/actions';
import { ManifestForm } from '../components/ManifestForm';

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestForm
 * @private
 */
var mapDispatchToProps = {
  addResource: actions.addResource
};
var enhance = compose(withTranslation(), connect(null, mapDispatchToProps), withPlugins('ManifestForm'));
export default enhance(ManifestForm);