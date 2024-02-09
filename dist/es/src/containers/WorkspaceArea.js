import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { WorkspaceArea } from '../components/WorkspaceArea';
import { getConfig, getWindowIds, getWorkspace } from '../state/selectors';

/**
 * mapStateToProps - to hook up connect
 * @memberof App
 * @private
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    controlPanelVariant: getWorkspace(state).isWorkspaceAddVisible || getWindowIds(state).length > 0 ? undefined : 'wide',
    isWorkspaceAddVisible: getWorkspace(state).isWorkspaceAddVisible,
    isWorkspaceControlPanelVisible: getConfig(state).workspaceControlPanel.enabled,
    lang: getConfig(state).language
  };
};
var enhance = compose(withTranslation(), connect(mapStateToProps), withPlugins('WorkspaceArea'));
export default enhance(WorkspaceArea);