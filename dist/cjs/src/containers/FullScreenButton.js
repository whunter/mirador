"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _FullScreenButton = require("../components/FullScreenButton");
/**
 * mapStateToProps - to hook up connect
 * @memberof FullScreenButton
 * @private
 */
var mapStateToProps = function mapStateToProps(_state) {
  return {};
};

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */
var mapDispatchToProps = {};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('FullScreenButton'));
var _default = exports["default"] = enhance(_FullScreenButton.FullScreenButton);