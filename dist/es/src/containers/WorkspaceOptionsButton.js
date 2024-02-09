import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { WorkspaceOptionsButton } from '../components/WorkspaceOptionsButton';
var enhance = compose(withTranslation(), withPlugins('WorkspaceOptionsButton'));
export default enhance(WorkspaceOptionsButton);