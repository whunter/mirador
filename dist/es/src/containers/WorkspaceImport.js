import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { WorkspaceImport } from '../components/WorkspaceImport';
import * as actions from '../state/actions';

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof App
 * @private
 */
var mapDispatchToProps = {
  addError: actions.addError,
  importConfig: actions.importMiradorState
};
var enhance = compose(withTranslation(), connect(null, mapDispatchToProps), withPlugins('WorkspaceImport'));
export default enhance(WorkspaceImport);