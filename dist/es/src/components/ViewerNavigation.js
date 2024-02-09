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
import NavigationIcon from '@mui/icons-material/PlayCircleOutlineSharp';
import classNames from 'classnames';
import MiradorMenuButton from '../containers/MiradorMenuButton';
import ns from '../config/css-ns';

/**
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var ViewerNavigation = /*#__PURE__*/function (_Component) {
  _inherits(ViewerNavigation, _Component);
  function ViewerNavigation() {
    _classCallCheck(this, ViewerNavigation);
    return _callSuper(this, ViewerNavigation, arguments);
  }
  _createClass(ViewerNavigation, [{
    key: "render",
    value:
    /**
     * Renders things
     */
    function render() {
      var _this$props = this.props,
        hasNextCanvas = _this$props.hasNextCanvas,
        hasPreviousCanvas = _this$props.hasPreviousCanvas,
        setNextCanvas = _this$props.setNextCanvas,
        setPreviousCanvas = _this$props.setPreviousCanvas,
        t = _this$props.t,
        viewingDirection = _this$props.viewingDirection;
      var htmlDir = 'ltr';
      var previousIconStyle = {};
      var nextIconStyle = {};
      switch (viewingDirection) {
        case 'top-to-bottom':
          previousIconStyle = {
            transform: 'rotate(270deg)'
          };
          nextIconStyle = {
            transform: 'rotate(90deg)'
          };
          break;
        case 'bottom-to-top':
          previousIconStyle = {
            transform: 'rotate(90deg)'
          };
          nextIconStyle = {
            transform: 'rotate(270deg)'
          };
          break;
        case 'right-to-left':
          htmlDir = 'rtl';
          previousIconStyle = {};
          nextIconStyle = {
            transform: 'rotate(180deg)'
          };
          break;
        default:
          previousIconStyle = {
            transform: 'rotate(180deg)'
          };
          nextIconStyle = {};
      }
      return /*#__PURE__*/_jsxs("div", {
        className: classNames(ns('osd-navigation')),
        dir: htmlDir,
        children: [/*#__PURE__*/_jsx(MiradorMenuButton, {
          "aria-label": t('previousCanvas'),
          className: ns('previous-canvas-button'),
          disabled: !hasPreviousCanvas,
          onClick: function onClick() {
            hasPreviousCanvas && setPreviousCanvas();
          },
          children: /*#__PURE__*/_jsx(NavigationIcon, {
            style: previousIconStyle
          })
        }), /*#__PURE__*/_jsx(MiradorMenuButton, {
          "aria-label": t('nextCanvas'),
          className: ns('next-canvas-button'),
          disabled: !hasNextCanvas,
          onClick: function onClick() {
            hasNextCanvas && setNextCanvas();
          },
          children: /*#__PURE__*/_jsx(NavigationIcon, {
            style: nextIconStyle
          })
        })]
      });
    }
  }]);
  return ViewerNavigation;
}(Component);
ViewerNavigation.defaultProps = {
  hasNextCanvas: false,
  hasPreviousCanvas: false,
  setNextCanvas: function setNextCanvas() {},
  setPreviousCanvas: function setPreviousCanvas() {},
  viewingDirection: ''
};