"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IIIFAuthentication = void 0;
var _react = require("react");
var _AccessTokenSender = require("./AccessTokenSender");
var _NewWindow = require("./NewWindow");
var _WindowAuthenticationBar = _interopRequireDefault(require("../containers/WindowAuthenticationBar"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /**
 * Opens a new window for click
 */
var IIIFAuthentication = exports.IIIFAuthentication = /*#__PURE__*/function (_Component) {
  _inherits(IIIFAuthentication, _Component);
  /** */
  function IIIFAuthentication(props) {
    var _this;
    _classCallCheck(this, IIIFAuthentication);
    _this = _callSuper(this, IIIFAuthentication, [props]);
    _this.performLogout = _this.performLogout.bind(_assertThisInitialized(_this));
    _this.onReceiveAccessTokenMessage = _this.onReceiveAccessTokenMessage.bind(_assertThisInitialized(_this));
    return _this;
  }

  /** */
  _createClass(IIIFAuthentication, [{
    key: "onReceiveAccessTokenMessage",
    value: function onReceiveAccessTokenMessage(payload) {
      var _this$props = this.props,
        authServiceId = _this$props.authServiceId,
        accessTokenServiceId = _this$props.accessTokenServiceId,
        resolveAccessTokenRequest = _this$props.resolveAccessTokenRequest;
      resolveAccessTokenRequest(authServiceId, accessTokenServiceId, payload);
    }

    /** */
  }, {
    key: "defaultAuthBarProps",
    value: function defaultAuthBarProps() {
      var _this$props2 = this.props,
        authServiceId = _this$props2.authServiceId,
        windowId = _this$props2.windowId,
        status = _this$props2.status,
        logoutServiceId = _this$props2.logoutServiceId;
      return {
        authServiceId: authServiceId,
        hasLogoutService: !!logoutServiceId,
        status: status,
        windowId: windowId
      };
    }

    /** handle the IIIF logout workflow */
  }, {
    key: "performLogout",
    value: function performLogout() {
      var _this$props3 = this.props,
        accessTokenServiceId = _this$props3.accessTokenServiceId,
        authServiceId = _this$props3.authServiceId,
        features = _this$props3.features,
        logoutServiceId = _this$props3.logoutServiceId,
        resetAuthenticationState = _this$props3.resetAuthenticationState,
        openWindow = _this$props3.openWindow;
      openWindow(logoutServiceId, undefined, features);
      resetAuthenticationState({
        authServiceId: authServiceId,
        tokenServiceId: accessTokenServiceId
      });
    }

    /** Render the auth bar for logged in users */
  }, {
    key: "renderLoggedIn",
    value: function renderLoggedIn() {
      var _this$props4 = this.props,
        isInteractive = _this$props4.isInteractive,
        logoutConfirm = _this$props4.logoutConfirm,
        t = _this$props4.t;
      if (!isInteractive) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_WindowAuthenticationBar["default"], _objectSpread({
        confirmButton: logoutConfirm || t('logout'),
        onConfirm: this.performLogout
      }, this.defaultAuthBarProps()));
    }

    /** Render whatever shows up after the interactive login attempt fails */
  }, {
    key: "renderFailure",
    value: function renderFailure() {
      var _this$props5 = this.props,
        handleAuthInteraction = _this$props5.handleAuthInteraction,
        header = _this$props5.failureHeader,
        description = _this$props5.failureDescription,
        t = _this$props5.t,
        authServiceId = _this$props5.authServiceId,
        windowId = _this$props5.windowId;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_WindowAuthenticationBar["default"], _objectSpread({
        header: header,
        description: description,
        confirmButton: t('retry'),
        onConfirm: function onConfirm() {
          return handleAuthInteraction(windowId, authServiceId);
        }
      }, this.defaultAuthBarProps()));
    }

    /** Render the login bar after we're logging in */
  }, {
    key: "renderLoggingInCookie",
    value: function renderLoggingInCookie() {
      var _this$props6 = this.props,
        accessTokenServiceId = _this$props6.accessTokenServiceId,
        authServiceId = _this$props6.authServiceId,
        resolveAuthenticationRequest = _this$props6.resolveAuthenticationRequest,
        features = _this$props6.features;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [this.renderLogin(), /*#__PURE__*/(0, _jsxRuntime.jsx)(_NewWindow.NewWindow, {
          name: "IiifLoginSender",
          url: "".concat(authServiceId, "?origin=").concat(window.origin),
          features: features,
          onClose: function onClose() {
            return resolveAuthenticationRequest(authServiceId, accessTokenServiceId);
          }
        })]
      });
    }

    /** Render the login bar after we're logging in */
  }, {
    key: "renderLoggingInToken",
    value: function renderLoggingInToken() {
      var accessTokenServiceId = this.props.accessTokenServiceId;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [this.renderLogin(), /*#__PURE__*/(0, _jsxRuntime.jsx)(_AccessTokenSender.AccessTokenSender, {
          handleAccessTokenMessage: this.onReceiveAccessTokenMessage,
          url: accessTokenServiceId
        })]
      });
    }

    /** Render a login bar */
  }, {
    key: "renderLogin",
    value: function renderLogin() {
      var _this$props7 = this.props,
        confirm = _this$props7.confirm,
        description = _this$props7.description,
        handleAuthInteraction = _this$props7.handleAuthInteraction,
        header = _this$props7.header,
        isInteractive = _this$props7.isInteractive,
        label = _this$props7.label,
        authServiceId = _this$props7.authServiceId,
        windowId = _this$props7.windowId;
      if (!isInteractive) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_WindowAuthenticationBar["default"], _objectSpread({
        header: header,
        description: description,
        label: label,
        confirmButton: confirm,
        onConfirm: function onConfirm() {
          return handleAuthInteraction(windowId, authServiceId);
        }
      }, this.defaultAuthBarProps()));
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this$props8 = this.props,
        authServiceId = _this$props8.authServiceId,
        status = _this$props8.status;
      if (!authServiceId) return null;
      if (status === null) return this.renderLogin();
      if (status === 'cookie') return this.renderLoggingInCookie();
      if (status === 'token') return this.renderLoggingInToken();
      if (status === 'failed') return this.renderFailure();
      if (status === 'ok') return this.renderLoggedIn();
      return null;
    }
  }]);
  return IIIFAuthentication;
}(_react.Component);
IIIFAuthentication.defaultProps = {
  confirm: undefined,
  description: undefined,
  failureDescription: undefined,
  failureHeader: undefined,
  features: 'centerscreen',
  header: undefined,
  isInteractive: true,
  label: undefined,
  logoutConfirm: undefined,
  logoutServiceId: undefined,
  openWindow: window.open,
  status: null,
  t: function t(k) {
    return k;
  }
};