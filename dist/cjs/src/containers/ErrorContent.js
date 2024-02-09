"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _ErrorContent = require("../components/ErrorContent");
var _selectors = require("../state/selectors");
/** mapStateToProps */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var companionWindowId = _ref.companionWindowId,
    windowId = _ref.windowId;
  return {
    metadata: {
      companionWindow: companionWindowId && (0, _selectors.getCompanionWindow)(state, {
        companionWindowId: companionWindowId
      }),
      manifest: (0, _selectors.getManifest)(state, {
        windowId: windowId
      }),
      viewer: (0, _selectors.getViewer)(state, {
        windowId: windowId
      }),
      window: (0, _selectors.getWindow)(state, {
        windowId: windowId
      })
    },
    showJsError: (0, _selectors.getConfig)(state).window.showJsError
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps), (0, _withPlugins.withPlugins)('ErrorContent'));
var _default = exports["default"] = enhance(_ErrorContent.ErrorContent);