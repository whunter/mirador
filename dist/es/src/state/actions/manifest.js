function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import ActionTypes from './action-types';

/**
 * requestManifest - action creator
 *
 * @param  {String} manifestId
 * @memberof ActionCreators
 */
export function requestManifest(manifestId, properties) {
  return {
    manifestId: manifestId,
    properties: properties,
    type: ActionTypes.REQUEST_MANIFEST
  };
}

/**
 * receiveManifest - action creator
 *
 * @param  {String} manifestId
 * @param  {Object} manifestJson
 * @memberof ActionCreators
 */
export function receiveManifest(manifestId, manifestJson) {
  return {
    manifestId: manifestId,
    manifestJson: manifestJson,
    type: ActionTypes.RECEIVE_MANIFEST
  };
}

/**
 * receiveManifestFailure - action creator
 *
 * @param  {String} windowId
 * @param  {String} error
 * @memberof ActionCreators
 */
export function receiveManifestFailure(manifestId, error) {
  return {
    error: error,
    manifestId: manifestId,
    type: ActionTypes.RECEIVE_MANIFEST_FAILURE
  };
}

/**
 * fetchManifest - action creator
 *
 * @param  {String} manifestId
 * @memberof ActionCreators
 */
export function fetchManifest(manifestId, properties) {
  return requestManifest(manifestId, _objectSpread(_objectSpread({}, properties), {}, {
    isFetching: true
  }));
}

/**
 * removeManifest - action creator
 *
 * @param  {String} manifestId
 * @memberof ActionCreators
 */
export function removeManifest(manifestId) {
  return {
    manifestId: manifestId,
    type: ActionTypes.REMOVE_MANIFEST
  };
}