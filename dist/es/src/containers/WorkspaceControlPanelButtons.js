import { compose } from 'redux';
import { withPlugins } from '../extend/withPlugins';
import { WorkspaceControlPanelButtons } from '../components/WorkspaceControlPanelButtons';
var enhance = compose(withPlugins('WorkspaceControlPanelButtons'));
export default enhance(WorkspaceControlPanelButtons);