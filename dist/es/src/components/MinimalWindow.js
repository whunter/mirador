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
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
import { Component } from 'react';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/MenuSharp';
import cn from 'classnames';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/CloseSharp';
import MiradorMenuButton from '../containers/MiradorMenuButton';
import ns from '../config/css-ns';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var StyledMiradorMenuButton = styled(MiradorMenuButton)(function () {
  return {
    marginLeft: 'auto'
  };
});
/** */
export var MinimalWindow = /*#__PURE__*/function (_Component) {
  _inherits(MinimalWindow, _Component);
  function MinimalWindow() {
    _classCallCheck(this, MinimalWindow);
    return _callSuper(this, MinimalWindow, arguments);
  }
  _createClass(MinimalWindow, [{
    key: "render",
    value: /** */
    function render() {
      var _this$props = this.props,
        allowClose = _this$props.allowClose,
        allowWindowSideBar = _this$props.allowWindowSideBar,
        ariaLabel = _this$props.ariaLabel,
        children = _this$props.children,
        label = _this$props.label,
        removeWindow = _this$props.removeWindow,
        t = _this$props.t,
        windowId = _this$props.windowId;
      return /*#__PURE__*/_jsxs(Paper, {
        component: "section",
        elevation: 1,
        id: windowId,
        className: cn(ns('placeholder-window')),
        sx: {
          backgroundColor: 'shades.dark',
          borderRadius: 0,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          minHeight: 0,
          overflow: 'hidden',
          width: '100%'
        },
        "aria-label": label && ariaLabel ? t('window', {
          label: label
        }) : null,
        children: [/*#__PURE__*/_jsx(AppBar, {
          position: "relative",
          color: "default",
          enableColorOnDark: true,
          children: /*#__PURE__*/_jsxs(Toolbar, {
            disableGutters: true,
            className: cn(ns('window-top-bar')),
            sx: {
              backgroundColor: 'shades.main',
              borderTop: '2px solid transparent',
              minHeight: 32,
              paddingLeft: 0.5,
              paddingRight: 0.5
            },
            variant: "dense",
            children: [allowWindowSideBar && /*#__PURE__*/_jsx(MiradorMenuButton, {
              "aria-label": t('toggleWindowSideBar'),
              disabled: true,
              children: /*#__PURE__*/_jsx(MenuIcon, {})
            }), /*#__PURE__*/_jsx(Typography, {
              variant: "h2",
              noWrap: true,
              color: "inherit",
              sx: {
                flexGrow: 1,
                paddingLeft: 0.5,
                typography: 'h6'
              },
              children: label
            }), allowClose && removeWindow && /*#__PURE__*/_jsx(StyledMiradorMenuButton, {
              "aria-label": t('closeWindow'),
              className: cn(ns('window-close')),
              onClick: removeWindow,
              TooltipProps: {
                tabIndex: ariaLabel ? 0 : -1
              },
              children: /*#__PURE__*/_jsx(CloseIcon, {})
            })]
          })
        }), children]
      });
    }
  }]);
  return MinimalWindow;
}(Component);
MinimalWindow.defaultProps = {
  allowClose: true,
  allowWindowSideBar: true,
  ariaLabel: true,
  children: null,
  label: '',
  removeWindow: function removeWindow() {},
  t: function t(key) {
    return key;
  }
};