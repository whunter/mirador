"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorsReducer = void 0;
var _without = _interopRequireDefault(require("lodash/without"));
var _actionTypes = _interopRequireDefault(require("../actions/action-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var defaultState = {
  items: []
};

/**
 * errorsReducer
 */
var errorsReducer = exports.errorsReducer = function errorsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var ret;
  switch (action.type) {
    case _actionTypes["default"].ADD_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty(_defineProperty({}, action.id, {
        id: action.id,
        message: action.message
      }), "items", [].concat(_toConsumableArray(state.items), [action.id])));
    // eslint-disable-line max-len
    case _actionTypes["default"].RECEIVE_INFO_RESPONSE_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty(_defineProperty({}, action.infoId, {
        id: action.infoId,
        message: action.error
      }), "items", [].concat(_toConsumableArray(state.items), [action.infoId])));
    case _actionTypes["default"].RECEIVE_SEARCH_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty(_defineProperty({}, action.searchId, {
        id: action.searchId,
        message: action.error
      }), "items", [].concat(_toConsumableArray(state.items), [action.searchId])));
    case _actionTypes["default"].REMOVE_ERROR:
      ret = Object.keys(state).reduce(function (object, key) {
        if (key !== action.id) {
          object[key] = state[key]; // eslint-disable-line no-param-reassign
        }
        return object;
      }, {});
      ret.items = (0, _without["default"])(ret.items, action.id);
      return ret;
    case _actionTypes["default"].IMPORT_MIRADOR_STATE:
      return defaultState;
    default:
      return state;
  }
};