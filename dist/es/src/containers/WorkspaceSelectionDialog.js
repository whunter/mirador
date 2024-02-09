import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { WorkspaceSelectionDialog } from '../components/WorkspaceSelectionDialog';
import * as actions from '../state/actions';
import { getWorkspaceType } from '../state/selectors';

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */
var mapDispatchToProps = {
  updateWorkspace: actions.updateWorkspace
};

/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    workspaceType: getWorkspaceType(state)
  };
};
var enhance = compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps), withPlugins('WorkspaceSelectionDialog'));
export default enhance(WorkspaceSelectionDialog);