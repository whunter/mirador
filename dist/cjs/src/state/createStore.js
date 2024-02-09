"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reduxThunk = require("redux-thunk");
var _reduxSaga = _interopRequireDefault(require("redux-saga"));
var _redux = require("redux");
var _extension = require("@redux-devtools/extension");
var _rootReducer = _interopRequireDefault(require("./reducers/rootReducer"));
var _sagas = _interopRequireDefault(require("./sagas"));
var _settings = _interopRequireDefault(require("../config/settings"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // Topics for understanding
// redux modules for nested stores
// state normalisation
// (normalizer library)
/**
 * Configure Store
 */
function configureStore(pluginReducers) {
  var pluginSagas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var miradorReducer = (0, _rootReducer["default"])(pluginReducers);
  var rootReducer = _settings["default"].state.slice ? (0, _redux.combineReducers)(_defineProperty({}, _settings["default"].state.slice, miradorReducer)) : miradorReducer;

  // create the saga middleware
  var sagaMiddleware = (0, _reduxSaga["default"])();
  var store = (0, _redux.createStore)(rootReducer, (0, _extension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk.thunk, sagaMiddleware)));

  // then run the saga
  sagaMiddleware.run((0, _sagas["default"])(pluginSagas));
  return store;
}
var _default = exports["default"] = configureStore;