"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _SidebarIndexTableOfContents = require("../components/SidebarIndexTableOfContents");
var _selectors = require("../state/selectors");
var actions = _interopRequireWildcard(require("../state/actions"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**
 * mapStateToProps - to hook up connect
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id,
    windowId = _ref.windowId;
  return {
    expandedNodeIds: (0, _selectors.getExpandedNodeIds)(state, {
      companionWindowId: id,
      windowId: windowId
    }),
    nodeIdToScrollTo: (0, _selectors.getNodeIdToScrollTo)(state, {
      companionWindowId: id,
      windowId: windowId
    }),
    treeStructure: (0, _selectors.getSequenceTreeStructure)(state, {
      windowId: windowId
    }),
    visibleNodeIds: (0, _selectors.getVisibleNodeIds)(state, {
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
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('SidebarIndexTableOfContents'));
var _default = exports["default"] = enhance(_SidebarIndexTableOfContents.SidebarIndexTableOfContents);