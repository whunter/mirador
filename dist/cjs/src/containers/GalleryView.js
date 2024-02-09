"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _withPlugins = require("../extend/withPlugins");
var _GalleryView = require("../components/GalleryView");
var _selectors = require("../state/selectors");
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    canvases: (0, _selectors.getCanvases)(state, {
      windowId: windowId
    }),
    viewingDirection: (0, _selectors.getSequenceViewingDirection)(state, {
      windowId: windowId
    })
  };
};
var enhance = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps), (0, _withPlugins.withPlugins)('GalleryView')
// further HOC go here
);
var _default = exports["default"] = enhance(_GalleryView.GalleryView);