function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { createSelector } from 'reselect';
import { Utils } from 'manifesto.js';
import flatten from 'lodash/flatten';
import MiradorCanvas from '../../lib/MiradorCanvas';
import { miradorSlice } from './utils';
import { getConfig } from './config';
import { getVisibleCanvases, selectInfoResponses } from './canvases';

/**
 * Returns the authentification profile from the configuration
 * @param {object} state
 * @returns {Array}
 */
export var getAuthProfiles = createSelector([getConfig], function (_ref) {
  var _ref$auth = _ref.auth,
    _ref$auth2 = _ref$auth === void 0 ? {} : _ref$auth,
    _ref$auth2$servicePro = _ref$auth2.serviceProfiles,
    serviceProfiles = _ref$auth2$servicePro === void 0 ? [] : _ref$auth2$servicePro;
  return serviceProfiles;
});

/**
 * Returns access tokens from the state
 * @param {object} state
 * @returns {object}
 */
export var getAccessTokens = function getAccessTokens(state) {
  return miradorSlice(state).accessTokens || {};
};

/**
 * Return the authentification data from the state
 * @param {object} state
 * @returns {object}
 */
export var getAuth = function getAuth(state) {
  return miradorSlice(state).auth || {};
};

/**
 * Returns current authentification services based on state and windowId
 * @param {object} state
 * @param {string} windowId
 * @returns {Array}
 */
export var selectCurrentAuthServices = createSelector([getVisibleCanvases, selectInfoResponses, getAuthProfiles, getAuth, function (state, _ref2) {
  var iiifResources = _ref2.iiifResources;
  return iiifResources;
}], function (canvases) {
  var infoResponses = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var serviceProfiles = arguments.length > 2 ? arguments[2] : undefined;
  var auth = arguments.length > 3 ? arguments[3] : undefined;
  var iiifResources = arguments.length > 4 ? arguments[4] : undefined;
  var currentAuthResources = iiifResources;
  if (!currentAuthResources && canvases) {
    currentAuthResources = flatten(canvases.map(function (c) {
      var miradorCanvas = new MiradorCanvas(c);
      var images = miradorCanvas.iiifImageResources;
      return images.map(function (i) {
        var iiifImageService = i.getServices()[0];
        var infoResponse = infoResponses[iiifImageService.id];
        if (infoResponse && infoResponse.json) {
          return _objectSpread(_objectSpread({}, infoResponse.json), {}, {
            options: {}
          });
        }
        return iiifImageService;
      });
    }));
  }
  if (!currentAuthResources) return [];
  if (currentAuthResources.length === 0) return [];
  var currentAuthServices = currentAuthResources.map(function (resource) {
    var lastAttemptedService;
    var services = Utils.getServices(resource);
    var _iterator = _createForOfIteratorHelper(serviceProfiles),
      _step;
    try {
      var _loop = function _loop() {
          var authProfile = _step.value;
          var profiledAuthServices = services.filter(function (p) {
            return authProfile.profile === p.getProfile();
          });
          var _iterator2 = _createForOfIteratorHelper(profiledAuthServices),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var service = _step2.value;
              lastAttemptedService = service;
              if (!auth[service.id] || auth[service.id].isFetching || auth[service.id].ok) {
                return {
                  v: service
                };
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        },
        _ret;
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _ret = _loop();
        if (_ret) return _ret.v;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return lastAttemptedService;
  });
  return Object.values(currentAuthServices.reduce(function (h, service) {
    if (service && !h[service.id]) {
      h[service.id] = service; // eslint-disable-line no-param-reassign
    }
    return h;
  }, {}));
});