function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Topics for understanding
// redux modules for nested stores
// state normalisation
// (normalizer library)

import { thunk } from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import createRootReducer from './reducers/rootReducer';
import getRootSaga from './sagas';
import settings from '../config/settings';

/**
 * Configure Store
 */
function configureStore(pluginReducers) {
  var pluginSagas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var miradorReducer = createRootReducer(pluginReducers);
  var rootReducer = settings.state.slice ? combineReducers(_defineProperty({}, settings.state.slice, miradorReducer)) : miradorReducer;

  // create the saga middleware
  var sagaMiddleware = createSagaMiddleware();
  var store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)));

  // then run the saga
  sagaMiddleware.run(getRootSaga(pluginSagas));
  return store;
}
export default configureStore;