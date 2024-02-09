"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSortedSearchHitsForCompanionWindow = exports.getSortedSearchAnnotationsForCompanionWindow = exports.getSelectedContentSearchAnnotationIds = exports.getSearchQuery = exports.getSearchNumTotal = exports.getSearchIsFetching = exports.getSearchForWindow = exports.getSearchAnnotationsForWindow = exports.getSearchAnnotationsForCompanionWindow = exports.getResourceAnnotationLabel = exports.getResourceAnnotationForSearchHit = exports.getNextSearchId = exports.getCanvasForAnnotation = void 0;
exports.sortSearchAnnotationsByCanvasOrder = sortSearchAnnotationsByCanvasOrder;
var _reselect = require("reselect");
var _manifesto = require("manifesto.js");
var _flatten = _interopRequireDefault(require("lodash/flatten"));
var _AnnotationList = _interopRequireDefault(require("../../lib/AnnotationList"));
var _canvases = require("./canvases");
var _getters = require("./getters");
var _manifests = require("./manifests");
var _utils = require("./utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 *  Get searches from state.
 */
var getSearches = function getSearches(state) {
  return (0, _utils.miradorSlice)(state).searches;
};

/**
 * Returns the search result for a specific window.
 * @param {object} state
 * @param {string} windowId
 * @returns {object}
 */
var getSearchForWindow = exports.getSearchForWindow = (0, _reselect.createSelector)([function (state, _ref) {
  var windowId = _ref.windowId;
  return windowId;
}, getSearches], function (windowId, searches) {
  if (!windowId || !searches) return {};
  return searches[windowId];
});

/**
 * Returns the search result for a specific companion window.
 * @param {object} state
 * @param {string} companionWindowId
 * @returns {object|undefined}
 */
var getSearchForCompanionWindow = (0, _reselect.createSelector)([getSearchForWindow, function (state, _ref2) {
  var companionWindowId = _ref2.companionWindowId;
  return companionWindowId;
}], function (results, companionWindowId) {
  if (!results || !companionWindowId) return undefined;
  return results[companionWindowId];
});

/**
 * Returns an array of search responses for a specific companion window.
 * @param {object} state
 * @returns {Array}
 */
var getSearchResponsesForCompanionWindow = (0, _reselect.createSelector)([getSearchForCompanionWindow], function (results) {
  if (!results) return [];
  return Object.values(results.data);
});

/**
 * Returns the search query for a specific companion window.
 * @param {object} state
 * @param {string} windowId
 * @returns {string|undefined}
 */
var getSearchQuery = exports.getSearchQuery = (0, _reselect.createSelector)([getSearchForCompanionWindow], function (results) {
  return results && results.query;
});

/**
 * Returns if search response for a companion window is fetching.
 * @param {object} state
 * @returns {boolean}
 */
var getSearchIsFetching = exports.getSearchIsFetching = (0, _reselect.createSelector)([getSearchResponsesForCompanionWindow], function (results) {
  return results.some(function (result) {
    return result.isFetching;
  });
});

/**
 * Returns the total number of search results for a companion window.
 * @param {object} state
 * @param {string} windowId
 * @returns {number|undefined}
 */
var getSearchNumTotal = exports.getSearchNumTotal = (0, _reselect.createSelector)([getSearchForCompanionWindow], function (results) {
  var _resultWithWithin$jso;
  if (!results || !results.data) return undefined;
  var resultWithWithin = Object.values(results.data).find(function (result) {
    return !result.isFetching && result.json && result.json.within;
  });
  return resultWithWithin === null || resultWithWithin === void 0 || (_resultWithWithin$jso = resultWithWithin.json) === null || _resultWithWithin$jso === void 0 || (_resultWithWithin$jso = _resultWithWithin$jso.within) === null || _resultWithWithin$jso === void 0 ? void 0 : _resultWithWithin$jso.total;
});

/**
 * Returns the Id of the next search.
 * @param {object} state
 * @param {string} windowId
 * @returns {number|undefined}
 */
var getNextSearchId = exports.getNextSearchId = (0, _reselect.createSelector)([getSearchForCompanionWindow], function (results) {
  if (!results || !results.data) return undefined;
  var resultWithAnUnresolvedNext = Object.values(results.data).find(function (result) {
    return !result.isFetching && result.json && result.json.next && !results.data[result.json.next];
  });
  return resultWithAnUnresolvedNext && resultWithAnUnresolvedNext.json && resultWithAnUnresolvedNext.json.next;
});
var getSearchHitsForCompanionWindow = (0, _reselect.createSelector)([getSearchResponsesForCompanionWindow], function (results) {
  return (0, _flatten["default"])(results.map(function (result) {
    if (!result || !result.json || result.isFetching || !result.json.hits) return [];
    return result.json.hits;
  }));
});

/**
 * Returns sorted search hits based on canvas order.
 * @param {object} state
 * @param {string} manifestId
 * @returns {Array}
 */
var getSortedSearchHitsForCompanionWindow = exports.getSortedSearchHitsForCompanionWindow = (0, _reselect.createSelector)([getSearchHitsForCompanionWindow, _canvases.getCanvases, function (state, _ref3) {
  var companionWindowId = _ref3.companionWindowId,
    windowId = _ref3.windowId;
  return function (annotationUri) {
    return getResourceAnnotationForSearchHit(state, {
      annotationUri: annotationUri,
      companionWindowId: companionWindowId,
      windowId: windowId
    });
  };
}], function (searchHits, canvases, annotationForSearchHit) {
  if (!canvases || canvases.length === 0) return [];
  if (!searchHits || searchHits.length === 0) return [];
  var canvasIds = canvases.map(function (canvas) {
    return canvas.id;
  });
  return [].concat(searchHits).sort(function (a, b) {
    var hitA = annotationForSearchHit(a.annotations[0]);
    var hitB = annotationForSearchHit(b.annotations[0]);
    return canvasIds.indexOf(hitA.targetId) - canvasIds.indexOf(hitB.targetId);
  });
});

/** convert search results to an annotation */
var searchResultsToAnnotation = function searchResultsToAnnotation(results) {
  var annotations = results.map(function (result) {
    if (!result || !result.json || result.isFetching || !result.json.resources) return undefined;
    var anno = new _AnnotationList["default"](result.json);
    return {
      id: anno.id,
      resources: anno.resources
    };
  }).filter(Boolean);
  return {
    id: (annotations.find(function (a) {
      return a.id;
    }) || {}).id,
    resources: (0, _flatten["default"])(annotations.map(function (a) {
      return a.resources;
    }))
  };
};
var getSearchAnnotationsForCompanionWindow = exports.getSearchAnnotationsForCompanionWindow = (0, _reselect.createSelector)([getSearchResponsesForCompanionWindow], function (results) {
  return results && searchResultsToAnnotation(results);
});

/**
 * Sorts search annotations based on canvas order.
 * @returns {Array}
 */
function sortSearchAnnotationsByCanvasOrder(searchAnnotations, canvases) {
  if (!searchAnnotations || !searchAnnotations.resources || searchAnnotations.length === 0) return [];
  if (!canvases || canvases.length === 0) return [];
  var canvasIds = canvases.map(function (canvas) {
    return canvas.id;
  });
  return [].concat(searchAnnotations.resources).sort(function (annoA, annoB) {
    return canvasIds.indexOf(annoA.targetId) - canvasIds.indexOf(annoB.targetId);
  });
}

/**
 * Returns sorted search annotations for companion window.
 * @param {object} state
 * @param {string} companionWindowId
 * @returns {Array}
 */
var getSortedSearchAnnotationsForCompanionWindow = exports.getSortedSearchAnnotationsForCompanionWindow = (0, _reselect.createSelector)([getSearchAnnotationsForCompanionWindow, _canvases.getCanvases], function (searchAnnotations, canvases) {
  return sortSearchAnnotationsByCanvasOrder(searchAnnotations, canvases);
});

/**
 * Returns sorted search annotations for window.
 * @param {object} state
 * @param {string} windowId
 * @returns {Array}
 */
var getSearchAnnotationsForWindow = exports.getSearchAnnotationsForWindow = (0, _reselect.createSelector)([getSearchForWindow], function (results) {
  if (!results) return [];
  var data = Object.values(results).map(function (r) {
    return Object.values(r.data);
  });
  return data.map(function (d) {
    return searchResultsToAnnotation(d);
  }).filter(function (a) {
    return a.resources.length > 0;
  });
});

/**
 * Returns ids of selected content search annotations.
 * @param {object} state
 * @param {string} windowId
 * @returns {Array}
 */
var getSelectedContentSearchAnnotationIds = exports.getSelectedContentSearchAnnotationIds = (0, _reselect.createSelector)([_getters.getWindow, getSearchForCompanionWindow], function (window, search) {
  return search && search.selectedContentSearchAnnotationIds || [];
});

/**
 * Returns resource annotations for search hit.
 * @param {object} state
 * @param {string} windowId
 * @returns {Array}
 */
var getResourceAnnotationForSearchHit = exports.getResourceAnnotationForSearchHit = (0, _reselect.createSelector)([getSearchAnnotationsForCompanionWindow, function (state, _ref4) {
  var annotationUri = _ref4.annotationUri;
  return annotationUri;
}], function (annotation, annotationUri) {
  return annotation.resources.find(function (r) {
    return r.id === annotationUri;
  });
});

/**
 * Returns annotation label.
 * @param {object} state
 * @param {string} windowId
 * @returns {Array}
 */
var getResourceAnnotationLabel = exports.getResourceAnnotationLabel = (0, _reselect.createSelector)([getResourceAnnotationForSearchHit, _manifests.getManifestLocale], function (resourceAnnotation, locale) {
  if (!(resourceAnnotation && resourceAnnotation.resource && resourceAnnotation.resource.label)) return [];
  return _manifesto.PropertyValue.parse(resourceAnnotation.resource.label, locale).getValues();
});
var getAnnotationById = (0, _reselect.createSelector)([getSearchAnnotationsForWindow, function (state, _ref5) {
  var annotationId = _ref5.annotationId;
  return annotationId;
}], function (annotations, annotationId) {
  var resourceAnnotations = (0, _flatten["default"])(annotations.map(function (a) {
    return a.resources;
  }));
  return resourceAnnotations.find(function (r) {
    return r.id === annotationId;
  });
});

/**
 * Returns annotation label.
 * @param {object} state
 * @param {string} windowId
 * @returns {Array}
 */
var getCanvasForAnnotation = exports.getCanvasForAnnotation = (0, _reselect.createSelector)([getAnnotationById, function (state, _ref6) {
  var windowId = _ref6.windowId;
  return function (canvasId) {
    return (0, _canvases.getCanvas)(state, {
      canvasId: canvasId,
      windowId: windowId
    });
  };
}], function (annotation, getCanvasById) {
  var canvasId = annotation && annotation.targetId;
  return canvasId && getCanvasById(canvasId);
});