"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _selectors = require("../state/selectors");
var _WindowListButton = require("../components/WindowListButton");
/** */
var mapStateToProps = function mapStateToProps(state) {
  return {
    disabled: (0, _selectors.getWorkspace)(state).isWorkspaceAddVisible,
    windowCount: (0, _selectors.getWindowIds)(state).length
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, null), (0, _withPlugins.withPlugins)('WindowListButton'));
var _default = exports["default"] = enhance(_WindowListButton.WindowListButton);