"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchesReducer = void 0;
var _omit = _interopRequireDefault(require("lodash/omit"));
var _flatten = _interopRequireDefault(require("lodash/flatten"));
var _actionTypes = _interopRequireDefault(require("../actions/action-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * searchReducer
 */
var searchesReducer = exports.searchesReducer = function searchesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var searchStruct = (state[action.windowId] || {})[action.companionWindowId] || {};
  switch (action.type) {
    case _actionTypes["default"].REQUEST_SEARCH:
      if (searchStruct.query !== action.query) {
        // new query
        return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.windowId, _objectSpread(_objectSpread({}, state[action.windowId]), {}, _defineProperty({}, action.companionWindowId, _objectSpread(_objectSpread({}, searchStruct), {}, {
          data: _defineProperty({}, action.searchId, {
            isFetching: true
          }),
          query: action.query,
          selectedContentSearchAnnotation: []
        })))));
      }

      // paginating through a query
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.windowId, _objectSpread(_objectSpread({}, state[action.windowId]), {}, _defineProperty({}, action.companionWindowId, _objectSpread(_objectSpread({}, searchStruct), {}, {
        data: _objectSpread(_objectSpread({}, searchStruct.data), {}, _defineProperty({}, action.searchId, {
          isFetching: true
        }))
      })))));
    case _actionTypes["default"].RECEIVE_SEARCH:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.windowId, _objectSpread(_objectSpread({}, state[action.windowId]), {}, _defineProperty({}, action.companionWindowId, _objectSpread(_objectSpread({}, searchStruct), {}, {
        data: _objectSpread(_objectSpread({}, searchStruct.data), {}, _defineProperty({}, action.searchId, {
          isFetching: false,
          json: action.searchJson
        }))
      })))));
    case _actionTypes["default"].RECEIVE_SEARCH_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.windowId, _objectSpread(_objectSpread({}, state[action.windowId]), {}, _defineProperty({}, action.companionWindowId, _objectSpread(_objectSpread({}, searchStruct), {}, {
        data: _objectSpread(_objectSpread({}, searchStruct.data), {}, _defineProperty({}, action.searchId, {
          error: action.error,
          isFetching: false
        }))
      })))));
    case _actionTypes["default"].REMOVE_SEARCH:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.windowId, Object.keys(state[action.windowId]).reduce(function (object, key) {
        if (key !== action.companionWindowId) {
          object[key] = state[action.windowId][key]; // eslint-disable-line no-param-reassign
        }
        return object;
      }, {})));
    case _actionTypes["default"].SET_CONTENT_SEARCH_CURRENT_ANNOTATIONS:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.windowId, _objectSpread(_objectSpread({}, state[action.windowId]), {}, _defineProperty({}, action.companionWindowId, _objectSpread(_objectSpread({}, searchStruct), {}, {
        selectedContentSearchAnnotationIds: action.annotationIds
      })))));
    case _actionTypes["default"].SELECT_ANNOTATION:
      if (!state[action.windowId]) return state;
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.windowId, Object.keys(state[action.windowId]).reduce(function (object, key) {
        var search = state[action.windowId][key];
        var searchHasAnnotation = search.data && Object.values(search.data).filter(function (resp) {
          return resp.json && resp.json.resources;
        }).some(function (resp) {
          return (0, _flatten["default"])([resp.json.resources]).some(function (r) {
            return r['@id'] === action.annotationId;
          });
        });
        if (searchHasAnnotation) {
          object[key] = _objectSpread(_objectSpread({}, search), {}, {
            selectedContentSearchAnnotationIds: [action.annotationId]
          });
        } else {
          object[key] = search; // eslint-disable-line no-param-reassign
        }
        return object;
      }, {})));
    case _actionTypes["default"].IMPORT_MIRADOR_STATE:
      return {};
    case _actionTypes["default"].REMOVE_WINDOW:
      return (0, _omit["default"])(state, action.windowId);
    case _actionTypes["default"].REMOVE_COMPANION_WINDOW:
      if (!state[action.windowId]) return state;
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.windowId, _objectSpread({}, (0, _omit["default"])(state[action.windowId], action.id))));
    default:
      return state;
  }
};