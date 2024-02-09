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
var actions = _interopRequireWildcard(require("../state/actions"));
var _ManifestListItem = require("../components/ManifestListItem");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/** */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var manifestId = _ref.manifestId,
    provider = _ref.provider;
  var manifest = (0, _selectors.getManifest)(state, {
    manifestId: manifestId
  }) || {};
  var manifesto = (0, _selectors.getManifestoInstance)(state, {
    manifestId: manifestId
  });
  var isCollection = (manifesto || {
    isCollection: function isCollection() {
      return false;
    }
  }).isCollection();
  var size = isCollection ? manifesto.getTotalItems() : (0, _selectors.getCanvases)(state, {
    manifestId: manifestId
  }).length;
  return {
    active: (0, _selectors.getWindowManifests)(state).includes(manifestId),
    error: manifest.error,
    isCollection: isCollection,
    isFetching: manifest.isFetching,
    isMultipart: isCollection && (0, _selectors.getSequenceBehaviors)(state, {
      manifestId: manifestId
    }).includes('multi-part'),
    manifestLogo: (0, _selectors.getManifestLogo)(state, {
      manifestId: manifestId
    }),
    provider: provider || (0, _selectors.getManifestProviderName)(state, {
      manifestId: manifestId
    }),
    ready: !!manifest.json,
    size: size,
    thumbnail: (0, _selectors.getManifestThumbnail)(state, {
      manifestId: manifestId
    }),
    title: (0, _selectors.getManifestTitle)(state, {
      manifestId: manifestId
    })
  };
};

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */
var mapDispatchToProps = {
  addWindow: actions.addWindow,
  fetchManifest: actions.fetchManifest
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('ManifestListItem'));
var _default = exports["default"] = enhance(_ManifestListItem.ManifestListItem);