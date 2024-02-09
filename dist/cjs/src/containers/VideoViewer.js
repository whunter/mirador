"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _VideoViewer = require("../components/VideoViewer");
var _selectors = require("../state/selectors");
/** */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    captions: (0, _selectors.getVisibleCanvasCaptions)(state, {
      windowId: windowId
    }) || [],
    videoOptions: (0, _selectors.getConfig)(state).videoOptions,
    videoResources: (0, _selectors.getVisibleCanvasVideoResources)(state, {
      windowId: windowId
    }) || []
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, null), (0, _withPlugins.withPlugins)('VideoViewer'));
var _default = exports["default"] = enhance(_VideoViewer.VideoViewer);