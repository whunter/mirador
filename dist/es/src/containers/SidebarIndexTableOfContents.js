import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { SidebarIndexTableOfContents } from '../components/SidebarIndexTableOfContents';
import { getSequenceTreeStructure, getVisibleNodeIds, getExpandedNodeIds, getNodeIdToScrollTo } from '../state/selectors';
import * as actions from '../state/actions';

/**
 * mapStateToProps - to hook up connect
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id,
    windowId = _ref.windowId;
  return {
    expandedNodeIds: getExpandedNodeIds(state, {
      companionWindowId: id,
      windowId: windowId
    }),
    nodeIdToScrollTo: getNodeIdToScrollTo(state, {
      companionWindowId: id,
      windowId: windowId
    }),
    treeStructure: getSequenceTreeStructure(state, {
      windowId: windowId
    }),
    visibleNodeIds: getVisibleNodeIds(state, {
      companionWindowId: id,
      windowId: windowId
    })
  };
};

/**
 * mapStateToProps - used to hook up connect to state
 * @memberof SidebarIndexTableOfContents
 * @private
 */
var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var id = _ref2.id,
    windowId = _ref2.windowId;
  return {
    expandNodes: function expandNodes(nodeIds) {
      return dispatch(actions.expandNodes(windowId, id, nodeIds));
    },
    setCanvas: function setCanvas() {
      return dispatch(actions.setCanvas.apply(actions, arguments));
    },
    toggleNode: function toggleNode(nodeId) {
      return dispatch(actions.toggleNode(windowId, id, nodeId));
    }
  };
};
var enhance = compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps), withPlugins('SidebarIndexTableOfContents'));
export default enhance(SidebarIndexTableOfContents);