"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _flatten = _interopRequireDefault(require("lodash/flatten"));
var actions = _interopRequireWildcard(require("../state/actions"));
var _GalleryViewThumbnail = require("../components/GalleryViewThumbnail");
var _selectors = require("../state/selectors");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/** */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var canvas = _ref.canvas,
    windowId = _ref.windowId;
  var currentCanvas = (0, _selectors.getCurrentCanvas)(state, {
    windowId: windowId
  });
  var searchAnnotations = (0, _selectors.getSearchAnnotationsForWindow)(state, {
    windowId: windowId
  });
  var canvasAnnotations = (0, _flatten["default"])(searchAnnotations.map(function (a) {
    return a.resources;
  })).filter(function (a) {
    return a.targetId === canvas.id;
  });
  var hasOpenAnnotationsWindow = (0, _selectors.getCompanionWindowsForContent)(state, {
    content: 'annotations',
    windowId: windowId
  }).length > 0;
  return {
    annotationsCount: function () {
      if (!hasOpenAnnotationsWindow) return undefined;
      var annotations = (0, _selectors.getPresentAnnotationsOnSelectedCanvases)(state, {
        canvasId: canvas.id
      });
      return annotations.reduce(function (v, a) {
        return v + a.resources.filter(function (r) {
          return r.targetId === canvas.id;
        }).length;
      }, 0);
    }(),
    config: (0, _selectors.getConfig)(state).galleryView,
    searchAnnotationsCount: canvasAnnotations.length,
    selected: currentCanvas && currentCanvas.id === canvas.id
  };
};

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof WindowViewer
 * @private
 */
var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var canvas = _ref2.canvas,
    id = _ref2.id,
    windowId = _ref2.windowId;
  return {
    focusOnCanvas: function focusOnCanvas() {
      return dispatch(actions.setWindowViewType(windowId, 'single'));
    },
    requestCanvasAnnotations: function requestCanvasAnnotations() {
      return dispatch(actions.requestCanvasAnnotations(windowId, canvas.id));
    },
    setCanvas: function setCanvas() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return dispatch(actions.setCanvas.apply(actions, [windowId].concat(args)));
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)
// further HOC go here
);
var _default = exports["default"] = enhance(_GalleryViewThumbnail.GalleryViewThumbnail);