import { compose } from 'redux';
import { connect } from 'react-redux';
import flatten from 'lodash/flatten';
import * as actions from '../state/actions';
import { GalleryViewThumbnail } from '../components/GalleryViewThumbnail';
import { getSearchAnnotationsForWindow, getCurrentCanvas, getConfig, getPresentAnnotationsOnSelectedCanvases, getCompanionWindowsForContent } from '../state/selectors';

/** */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var canvas = _ref.canvas,
    windowId = _ref.windowId;
  var currentCanvas = getCurrentCanvas(state, {
    windowId: windowId
  });
  var searchAnnotations = getSearchAnnotationsForWindow(state, {
    windowId: windowId
  });
  var canvasAnnotations = flatten(searchAnnotations.map(function (a) {
    return a.resources;
  })).filter(function (a) {
    return a.targetId === canvas.id;
  });
  var hasOpenAnnotationsWindow = getCompanionWindowsForContent(state, {
    content: 'annotations',
    windowId: windowId
  }).length > 0;
  return {
    annotationsCount: function () {
      if (!hasOpenAnnotationsWindow) return undefined;
      var annotations = getPresentAnnotationsOnSelectedCanvases(state, {
        canvasId: canvas.id
      });
      return annotations.reduce(function (v, a) {
        return v + a.resources.filter(function (r) {
          return r.targetId === canvas.id;
        }).length;
      }, 0);
    }(),
    config: getConfig(state).galleryView,
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
var enhance = compose(connect(mapStateToProps, mapDispatchToProps)
// further HOC go here
);
export default enhance(GalleryViewThumbnail);