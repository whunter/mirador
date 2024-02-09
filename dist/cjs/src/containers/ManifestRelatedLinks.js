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
var _ManifestRelatedLinks = require("../components/ManifestRelatedLinks");
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowSideBarInfoPanel
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id,
    windowId = _ref.windowId;
  return {
    homepage: (0, _selectors.getManifestHomepage)(state, {
      windowId: windowId
    }),
    manifestUrl: (0, _selectors.getManifestUrl)(state, {
      windowId: windowId
    }),
    related: (0, _selectors.getManifestRelated)(state, {
      windowId: windowId
    }),
    renderings: (0, _selectors.getManifestRenderings)(state, {
      windowId: windowId
    }),
    seeAlso: (0, _selectors.getManifestSeeAlso)(state, {
      windowId: windowId
    })
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps), (0, _withPlugins.withPlugins)('ManifestRelatedLinks'));
var _default = exports["default"] = enhance(_ManifestRelatedLinks.ManifestRelatedLinks);