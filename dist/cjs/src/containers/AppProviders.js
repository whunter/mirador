"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _withPlugins = require("../extend/withPlugins");
var _selectors = require("../state/selectors");
var _AppProviders = require("../components/AppProviders");
/**
 * mapStateToProps - to hook up connect
 * @memberof App
 * @private
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    language: (0, _selectors.getConfig)(state).language,
    theme: (0, _selectors.getTheme)(state),
    translations: (0, _selectors.getConfig)(state).translations
  };
};
var enhance = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps), (0, _withPlugins.withPlugins)('AppProviders'));
var _default = exports["default"] = enhance(_AppProviders.AppProviders);