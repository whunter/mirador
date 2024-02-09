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
var _MosaicRenderPreview = require("../components/MosaicRenderPreview");
/** */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    title: (0, _selectors.getManifestTitle)(state, {
      windowId: windowId
    })
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, null), (0, _withPlugins.withPlugins)('MosaicRenderPreview'));
var _default = exports["default"] = enhance(_MosaicRenderPreview.MosaicRenderPreview);