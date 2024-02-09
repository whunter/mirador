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
import { Component } from 'react';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/MenuSharp';
import CloseIcon from '@mui/icons-material/CloseSharp';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import classNames from 'classnames';
import WindowTopMenuButton from '../containers/WindowTopMenuButton';
import WindowTopBarPluginArea from '../containers/WindowTopBarPluginArea';
import WindowTopBarPluginMenu from '../containers/WindowTopBarPluginMenu';
import WindowTopBarTitle from '../containers/WindowTopBarTitle';
import MiradorMenuButton from '../containers/MiradorMenuButton';
import FullScreenButton from '../containers/FullScreenButton';
import WindowMaxIcon from './icons/WindowMaxIcon';
import WindowMinIcon from './icons/WindowMinIcon';
import ns from '../config/css-ns';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Root = styled(AppBar, {
  name: 'WindowTopBar',
  slot: 'root'
})(function () {
  return {
    zIndex: 1100
  };
});
var StyledToolbar = styled(Toolbar, {
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
export var WindowTopBar = /*#__PURE__*/function (_Component) {
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
      return /*#__PURE__*/_jsx(Root, {
        component: component,
        "aria-label": t('windowNavigation'),
        position: "relative",
        color: "default",
        enableColorOnDark: true,
        children: /*#__PURE__*/_jsxs(StyledToolbar, {
          disableGutters: true,
          onMouseDown: focusWindow,
          ownerState: this.props,
          className: classNames(ns('window-top-bar')),
          variant: "dense",
          children: [allowWindowSideBar && /*#__PURE__*/_jsx(MiradorMenuButton, {
            "aria-label": t('toggleWindowSideBar'),
            onClick: toggleWindowSideBar,
            className: ns('window-menu-btn'),
            children: /*#__PURE__*/_jsx(MenuIcon, {})
          }), /*#__PURE__*/_jsx(WindowTopBarTitle, {
            windowId: windowId
          }), allowTopMenuButton && /*#__PURE__*/_jsx(WindowTopMenuButton, {
            windowId: windowId,
            className: ns('window-menu-btn')
          }), /*#__PURE__*/_jsx(WindowTopBarPluginArea, {
            windowId: windowId
          }), /*#__PURE__*/_jsx(WindowTopBarPluginMenu, {
            windowId: windowId
          }), allowMaximize && /*#__PURE__*/_jsx(MiradorMenuButton, {
            "aria-label": maximized ? t('minimizeWindow') : t('maximizeWindow'),
            className: classNames(ns('window-maximize'), ns('window-menu-btn')),
            onClick: maximized ? minimizeWindow : maximizeWindow,
            children: maximized ? /*#__PURE__*/_jsx(WindowMinIcon, {}) : /*#__PURE__*/_jsx(WindowMaxIcon, {})
          }), allowFullscreen && /*#__PURE__*/_jsx(FullScreenButton, {
            className: ns('window-menu-btn')
          }), allowClose && /*#__PURE__*/_jsx(MiradorMenuButton, {
            "aria-label": t('closeWindow'),
            className: classNames(ns('window-close'), ns('window-menu-btn')),
            onClick: removeWindow,
            children: /*#__PURE__*/_jsx(CloseIcon, {})
          })]
        })
      });
    }
  }]);
  return WindowTopBar;
}(Component);
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