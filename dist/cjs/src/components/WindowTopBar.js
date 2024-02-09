"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowTopBar = void 0;
var _react = require("react");
var _styles = require("@mui/material/styles");
var _MenuSharp = _interopRequireDefault(require("@mui/icons-material/MenuSharp"));
var _CloseSharp = _interopRequireDefault(require("@mui/icons-material/CloseSharp"));
var _Toolbar = _interopRequireDefault(require("@mui/material/Toolbar"));
var _AppBar = _interopRequireDefault(require("@mui/material/AppBar"));
var _classnames = _interopRequireDefault(require("classnames"));
var _WindowTopMenuButton = _interopRequireDefault(require("../containers/WindowTopMenuButton"));
var _WindowTopBarPluginArea = _interopRequireDefault(require("../containers/WindowTopBarPluginArea"));
var _WindowTopBarPluginMenu = _interopRequireDefault(require("../containers/WindowTopBarPluginMenu"));
var _WindowTopBarTitle = _interopRequireDefault(require("../containers/WindowTopBarTitle"));
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
var _FullScreenButton = _interopRequireDefault(require("../containers/FullScreenButton"));
var _WindowMaxIcon = _interopRequireDefault(require("./icons/WindowMaxIcon"));
var _WindowMinIcon = _interopRequireDefault(require("./icons/WindowMinIcon"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Root = (0, _styles.styled)(_AppBar["default"], {
  name: 'WindowTopBar',
  slot: 'root'
})(function () {
  return {
    zIndex: 1100
  };
});
var StyledToolbar = (0, _styles.styled)(_Toolbar["default"], {
  name: 'WindowTopBar',
  slot: 'toolbar'
})(function (_ref) {
  var _theme$palette$shades;
  var ownerState = _ref.ownerState,
    theme = _ref.theme;
  return _objectSpread({
    backgroundColor: (_theme$palette$shades = theme.palette.shades) === null || _theme$palette$shades === void 0 ? void 0 : _theme$palette$shades.main,
    borderTop: '2px solid',
    borderTopColor: ownerState !== null && ownerState !== void 0 && ownerState.focused ? theme.palette.primary.main : 'transparent',
    minHeight: 32,
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5)
  }, (ownerState === null || ownerState === void 0 ? void 0 : ownerState.windowDraggable) && {
    cursor: 'move'
  });
});

/**
 * WindowTopBar
 */
var WindowTopBar = exports.WindowTopBar = /*#__PURE__*/function (_Component) {
  _inherits(WindowTopBar, _Component);
  function WindowTopBar() {
    _classCallCheck(this, WindowTopBar);
    return _callSuper(this, WindowTopBar, arguments);
  }
  _createClass(WindowTopBar, [{
    key: "render",
    value:
    /**
     * render
     * @return
     */
    function render() {
      var _this$props = this.props,
        removeWindow = _this$props.removeWindow,
        windowId = _this$props.windowId,
        toggleWindowSideBar = _this$props.toggleWindowSideBar,
        t = _this$props.t,
        maximizeWindow = _this$props.maximizeWindow,
        maximized = _this$props.maximized,
        minimizeWindow = _this$props.minimizeWindow,
        allowClose = _this$props.allowClose,
        allowMaximize = _this$props.allowMaximize,
        focusWindow = _this$props.focusWindow,
        allowFullscreen = _this$props.allowFullscreen,
        allowTopMenuButton = _this$props.allowTopMenuButton,
        allowWindowSideBar = _this$props.allowWindowSideBar,
        component = _this$props.component;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, {
        component: component,
        "aria-label": t('windowNavigation'),
        position: "relative",
        color: "default",
        enableColorOnDark: true,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(StyledToolbar, {
          disableGutters: true,
          onMouseDown: focusWindow,
          ownerState: this.props,
          className: (0, _classnames["default"])((0, _cssNs["default"])('window-top-bar')),
          variant: "dense",
          children: [allowWindowSideBar && /*#__PURE__*/(0, _jsxRuntime.jsx)(_MiradorMenuButton["default"], {
            "aria-label": t('toggleWindowSideBar'),
            onClick: toggleWindowSideBar,
            className: (0, _cssNs["default"])('window-menu-btn'),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuSharp["default"], {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_WindowTopBarTitle["default"], {
            windowId: windowId
          }), allowTopMenuButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_WindowTopMenuButton["default"], {
            windowId: windowId,
            className: (0, _cssNs["default"])('window-menu-btn')
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_WindowTopBarPluginArea["default"], {
            windowId: windowId
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_WindowTopBarPluginMenu["default"], {
            windowId: windowId
          }), allowMaximize && /*#__PURE__*/(0, _jsxRuntime.jsx)(_MiradorMenuButton["default"], {
            "aria-label": maximized ? t('minimizeWindow') : t('maximizeWindow'),
            className: (0, _classnames["default"])((0, _cssNs["default"])('window-maximize'), (0, _cssNs["default"])('window-menu-btn')),
            onClick: maximized ? minimizeWindow : maximizeWindow,
            children: maximized ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_WindowMinIcon["default"], {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_WindowMaxIcon["default"], {})
          }), allowFullscreen && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FullScreenButton["default"], {
            className: (0, _cssNs["default"])('window-menu-btn')
          }), allowClose && /*#__PURE__*/(0, _jsxRuntime.jsx)(_MiradorMenuButton["default"], {
            "aria-label": t('closeWindow'),
            className: (0, _classnames["default"])((0, _cssNs["default"])('window-close'), (0, _cssNs["default"])('window-menu-btn')),
            onClick: removeWindow,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CloseSharp["default"], {})
          })]
        })
      });
    }
  }]);
  return WindowTopBar;
}(_react.Component);
WindowTopBar.defaultProps = {
  allowClose: true,
  allowFullscreen: false,
  allowMaximize: true,
  allowTopMenuButton: true,
  allowWindowSideBar: true,
  component: 'nav',
  focused: false,
  focusWindow: function focusWindow() {},
  maximized: false,
  maximizeWindow: function maximizeWindow() {},
  minimizeWindow: function minimizeWindow() {},
  t: function t(key) {
    return key;
  },
  windowDraggable: true
};