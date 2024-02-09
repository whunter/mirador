import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { withWorkspaceContext } from '../contexts/WorkspaceContext';
import { WorkspaceOptionsMenu } from '../components/WorkspaceOptionsMenu';
var enhance = compose(withTranslation(), withWorkspaceContext);
export default enhance(WorkspaceOptionsMenu);