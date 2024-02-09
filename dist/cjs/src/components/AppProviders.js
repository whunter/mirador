"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppProviders = void 0;
var _react = require("react");
var _reactFullScreen = require("react-full-screen");
var _reactI18next = require("react-i18next");
var _styles = require("@mui/material/styles");
var _reactDnd = require("react-dnd");
var _reactDndMultiBackend = require("react-dnd-multi-backend");
var _rdndmbHtml5ToTouch = require("rdndmb-html5-to-touch");
var _stylisPluginRtl = _interopRequireDefault(require("stylis-plugin-rtl"));
var _stylis = require("stylis");
var _react2 = require("@emotion/react");
var _cache = _interopRequireDefault(require("@emotion/cache"));
var _i18n = _interopRequireDefault(require("../i18n"));
var _FullScreenContext = _interopRequireDefault(require("../contexts/FullScreenContext"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /**
 * Allow applications to opt-out of (or provide their own) drag and drop context
 */
var MaybeDndProvider = function MaybeDndProvider(props) {
  var dndManager = props.dndManager,
    children = props.children;
  if (dndManager === false) {
    return children;
  }
  if (dndManager === undefined) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactDnd.DndProvider, {
      backend: _reactDndMultiBackend.MultiBackend,
      options: _rdndmbHtml5ToTouch.HTML5toTouch,
      children: children
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactDnd.DndContext.Provider, {
    value: dndManager,
    children: children
  });
};
/**
 * Shim to inject the full screen handle into a context
 */
var FullScreenShim = function FullScreenShim(_ref) {
  var children = _ref.children;
  var handle = (0, _reactFullScreen.useFullScreenHandle)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFullScreen.FullScreen, {
    handle: handle,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FullScreenContext["default"].Provider, {
      value: handle,
      children: children
    })
  });
};
/**
 * This component adds viewer-specific providers.
 * @prop {Object} manifests
 */
var AppProviders = exports.AppProviders = /*#__PURE__*/function (_Component) {
  _inherits(AppProviders, _Component);
  /** */
  function AppProviders(props) {
    var _this;
    _classCallCheck(this, AppProviders);
    _this = _callSuper(this, AppProviders, [props]);
    _this.i18n = (0, _i18n["default"])();
    // Set i18n language
    _this.i18n.changeLanguage(props.language);
    return _this;
  }

  /**
   * Update the i18n language if it is changed
   */
  _createClass(AppProviders, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var language = this.props.language;
      if (prevProps.language !== language) {
        this.i18n.changeLanguage(language);
      }
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        children = _this$props.children,
        theme = _this$props.theme,
        translations = _this$props.translations,
        dndManager = _this$props.dndManager;

      /**
       * Create rtl emotion cache
       */
      var cacheRtl = (0, _cache["default"])({
        key: 'muirtl',
        stylisPlugins: [_stylis.prefixer, _stylisPluginRtl["default"]]
      });

      /**
       * Create default emotion cache
       */
      var cacheDefault = (0, _cache["default"])({
        key: 'mui'
      });
      Object.keys(translations).forEach(function (lng) {
        _this2.i18n.addResourceBundle(lng, 'translation', translations[lng], true, true);
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(FullScreenShim, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactI18next.I18nextProvider, {
          i18n: this.i18n,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.StyledEngineProvider, {
            injectFirst: true,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.CacheProvider, {
              value: theme.direction === 'rtl' ? cacheRtl : cacheDefault,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.ThemeProvider, {
                theme: (0, _styles.createTheme)(theme),
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(MaybeDndProvider, {
                  dndManager: dndManager,
                  children: children
                })
              })
            })
          })
        })
      });
    }
  }]);
  return AppProviders;
}(_react.Component);
AppProviders.defaultProps = {
  children: null,
  dndManager: undefined
};