"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
var _CollectionDialog = require("../components/CollectionDialog");
var _WorkspaceContext = require("../contexts/WorkspaceContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof CollectionDialog
 * @private
 */
var mapDispatchToProps = {
  addWindow: actions.addWindow,
  hideCollectionDialog: actions.hideCollectionDialog,
  setWorkspaceAddVisibility: actions.setWorkspaceAddVisibility,
  showCollectionDialog: actions.showCollectionDialog,
  updateWindow: actions.updateWindow
};

/**
 * mapStateToProps - to hook up connect
 * @memberof CollectionDialog
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  var _getWindow = (0, _selectors.getWindow)(state, {
      windowId: windowId
    }),
    collectionPath = _getWindow.collectionPath,
    manifestId = _getWindow.collectionManifestId;
  var manifest = (0, _selectors.getManifest)(state, {
    manifestId: manifestId
  });
  var collectionId = collectionPath && collectionPath[collectionPath.length - 1];
  var collection = collectionId && (0, _selectors.getManifest)(state, {
    manifestId: collectionId
  });
  return {
    collection: collection && (0, _selectors.getManifestoInstance)(state, {
      manifestId: collection.id
    }),
    collectionPath: collectionPath,
    error: manifest && manifest.error,
    isMultipart: (0, _selectors.getSequenceBehaviors)(state, {
      manifestId: manifestId
    }).includes('multi-part'),
    manifest: manifest && (0, _selectors.getManifestoInstance)(state, {
      manifestId: manifestId
    }),
    manifestId: manifestId,
    open: state.workspace.collectionDialogOn,
    ready: manifest && !!manifest.json,
    windowId: windowId
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), _WorkspaceContext.withWorkspaceContext, (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('CollectionDialog'));
var _default = exports["default"] = enhance(_CollectionDialog.CollectionDialog);