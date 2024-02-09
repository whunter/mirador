"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _selectors = require("../state/selectors");
var _withPlugins = require("../extend/withPlugins");
var _AttributionPanel = require("../components/AttributionPanel");
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowSideBarInfoPanel
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id,
    windowId = _ref.windowId;
  return {
    manifestLogo: (0, _selectors.getManifestLogo)(state, {
      windowId: windowId
    }),
    requiredStatement: (0, _selectors.getRequiredStatement)(state, {
      windowId: windowId
    }),
    rights: (0, _selectors.getRights)(state, {
      windowId: windowId
    })
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps), (0, _withPlugins.withPlugins)('AttributionPanel'));
var _default = exports["default"] = enhance(_AttributionPanel.AttributionPanel);