import { compose } from 'redux';
import { connect } from 'react-redux';
import { withPlugins } from '../extend/withPlugins';
import { getWorkspace } from '../state/selectors';
import * as actions from '../state/actions';
import { WorkspaceMosaic } from '../components/WorkspaceMosaic';

/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    layout: getWorkspace(state).layout,
    windowIds: getWorkspace(state).windowIds,
    workspaceId: getWorkspace(state).id
  };
};

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */
var mapDispatchToProps = {
  updateWorkspaceMosaicLayout: actions.updateWorkspaceMosaicLayout
};
var enhance = compose(connect(mapStateToProps, mapDispatchToProps), withPlugins('WorkspaceMosaic')
// further HOC go here
);
export default enhance(WorkspaceMosaic);