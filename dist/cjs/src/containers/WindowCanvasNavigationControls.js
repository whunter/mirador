"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _reactSizeme = require("react-sizeme");
var _withPlugins = require("../extend/withPlugins");
var _selectors = require("../state/selectors");
var _WindowCanvasNavigationControls = require("../components/WindowCanvasNavigationControls");
/** */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    showZoomControls: (0, _selectors.getShowZoomControlsConfig)(state),
    visible: (0, _selectors.getWorkspace)(state).focusedWindowId === windowId
  };
};
var enhance = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps), (0, _reactSizeme.withSize)(), (0, _withPlugins.withPlugins)('WindowCanvasNavigationControls'));
var _default = exports["default"] = enhance(_WindowCanvasNavigationControls.WindowCanvasNavigationControls);