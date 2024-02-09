"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accessTokensReducer = accessTokensReducer;
var _omit = _interopRequireDefault(require("lodash/omit"));
var _actionTypes = _interopRequireDefault(require("../actions/action-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/** */
function accessTokensReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actionTypes["default"].RESOLVE_AUTHENTICATION_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.tokenServiceId, {
        authId: action.id,
        id: action.tokenServiceId,
        isFetching: true
      }));
    case _actionTypes["default"].REQUEST_ACCESS_TOKEN:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.serviceId, {
        authId: action.authId,
        id: action.serviceId,
        isFetching: true
      }));
    case _actionTypes["default"].RECEIVE_ACCESS_TOKEN:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.serviceId, _objectSpread(_objectSpread({}, state[action.serviceId]), {}, {
        isFetching: false,
        json: action.json
      })));
    case _actionTypes["default"].RECEIVE_ACCESS_TOKEN_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.serviceId, _objectSpread(_objectSpread({}, state[action.serviceId]), {}, {
        error: action.error,
        isFetching: false
      })));
    case _actionTypes["default"].RESET_AUTHENTICATION_STATE:
      return (0, _omit["default"])(state, action.tokenServiceId);
    case _actionTypes["default"].RECEIVE_INFO_RESPONSE:
      if (!action.tokenServiceId) return state;
      if (state[action.tokenServiceId].success) return state;
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.tokenServiceId, _objectSpread(_objectSpread({}, state[action.tokenServiceId]), {}, {
        success: true
      })));
    default:
      return state;
  }
}