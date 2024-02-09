"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _SearchHit = require("../components/SearchHit");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * mapStateToProps - used to hook up connect to state
 * @memberof SearchHit
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var annotationId = _ref.annotationId,
    _ref$hit = _ref.hit,
    hit = _ref$hit === void 0 ? {
      annotations: []
    } : _ref$hit,
    companionWindowId = _ref.companionWindowId,
    windowId = _ref.windowId;
  var realAnnoId = annotationId || hit.annotations[0];
  var hitAnnotation = (0, _selectors.getResourceAnnotationForSearchHit)(state, {
    annotationUri: realAnnoId,
    companionWindowId: companionWindowId,
    windowId: windowId
  });
  var annotationLabel = (0, _selectors.getResourceAnnotationLabel)(state, {
    annotationUri: realAnnoId,
    companionWindowId: companionWindowId,
    windowId: windowId
  });
  var selectedCanvasIds = (0, _selectors.getVisibleCanvasIds)(state, {
    windowId: windowId
  });
  var selectedContentSearchAnnotationsIds = (0, _selectors.getSelectedContentSearchAnnotationIds)(state, {
    companionWindowId: companionWindowId,
    windowId: windowId
  });
  var windowSelectedAnnotationId = (0, _selectors.getSelectedAnnotationId)(state, {
    windowId: windowId
  });
  var allAnnoIds = [annotationId].concat(_toConsumableArray(hit.annotations));
  return {
    adjacent: selectedCanvasIds.includes(hitAnnotation.targetId),
    annotation: hitAnnotation,
    annotationId: realAnnoId,
    annotationLabel: annotationLabel[0],
    canvasLabel: hitAnnotation && (0, _selectors.getCanvasLabel)(state, {
      canvasId: hitAnnotation.targetId,
      windowId: windowId
    }),
    selected: selectedContentSearchAnnotationsIds[0] && allAnnoIds.includes(selectedContentSearchAnnotationsIds[0]),
    windowSelected: windowSelectedAnnotationId && allAnnoIds.includes(windowSelectedAnnotationId)
  };
};

/**
 * mapDispatchToProps - to hook up connect
 * @memberof SearchPanelNavigation
 * @private
 */
var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var windowId = _ref2.windowId;
  return {
    selectAnnotation: function selectAnnotation() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return dispatch(actions.selectAnnotation.apply(actions, [windowId].concat(args)));
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _reactI18next.withTranslation)(), (0, _withPlugins.withPlugins)('SearchHit'));
var _default = exports["default"] = enhance(_SearchHit.SearchHit);