"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _WindowSideBar = require("../components/WindowSideBar");
var _selectors = require("../state/selectors");
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowSideBar
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    direction: (0, _selectors.getThemeDirection)(state),
    sideBarOpen: ((0, _selectors.getWindow)(state, {
      windowId: windowId
    }) || {}).sideBarOpen,
    sideBarPanel: ((0, _selectors.getWindow)(state, {
      windowId: windowId
    }) || {}).sideBarPanel
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, null), (0, _withPlugins.withPlugins)('WindowSideBar'));
var _default = exports["default"] = enhance(_WindowSideBar.WindowSideBar);