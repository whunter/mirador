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
var _IIIFThumbnail = require("../components/IIIFThumbnail");
/**
 * mapStateToProps - to hook up connect
 * @private
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    thumbnailsConfig: (0, _selectors.getConfig)(state).thumbnails
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps), (0, _withPlugins.withPlugins)('IIIFThumbnail'));
var _default = exports["default"] = enhance(_IIIFThumbnail.IIIFThumbnail);