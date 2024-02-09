"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _WorkspaceArea = require("../components/WorkspaceArea");
var _selectors = require("../state/selectors");
/**
 * mapStateToProps - to hook up connect
 * @memberof App
 * @private
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    controlPanelVariant: (0, _selectors.getWorkspace)(state).isWorkspaceAddVisible || (0, _selectors.getWindowIds)(state).length > 0 ? undefined : 'wide',
    isWorkspaceAddVisible: (0, _selectors.getWorkspace)(state).isWorkspaceAddVisible,
    isWorkspaceControlPanelVisible: (0, _selectors.getConfig)(state).workspaceControlPanel.enabled,
    lang: (0, _selectors.getConfig)(state).language
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps), (0, _withPlugins.withPlugins)('WorkspaceArea'));
var _default = exports["default"] = enhance(_WorkspaceArea.WorkspaceArea);