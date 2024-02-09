import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { getWindowIds, getWorkspace } from '../state/selectors';
import { WindowListButton } from '../components/WindowListButton';

/** */
var mapStateToProps = function mapStateToProps(state) {
  return {
    disabled: getWorkspace(state).isWorkspaceAddVisible,
    windowCount: getWindowIds(state).length
  };
};
var enhance = compose(withTranslation(), connect(mapStateToProps, null), withPlugins('WindowListButton'));
export default enhance(WindowListButton);