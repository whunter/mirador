import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { WindowTopBarPluginMenu } from '../components/WindowTopBarPluginMenu';
import { withWorkspaceContext } from '../contexts/WorkspaceContext';
var enhance = compose(withTranslation(), withWorkspaceContext, withPlugins('WindowTopBarPluginMenu'));
export default enhance(WindowTopBarPluginMenu);