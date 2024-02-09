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
import Slide from '@mui/material/Slide';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeftSharp';
import ArrowRightIcon from '@mui/icons-material/ArrowRightSharp';
import classNames from 'classnames';
import CompanionWindowFactory from '../containers/CompanionWindowFactory';
import MiradorMenuButton from '../containers/MiradorMenuButton';
import ns from '../config/css-ns';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Root = styled('div', {
  name: 'CompanionArea',
  slot: 'root'
})(function (_ref) {
  var ownerState = _ref.ownerState,
    theme = _ref.theme;
  return _objectSpread({
    display: 'flex',
    minHeight: 0,
    position: 'relative',
    zIndex: theme.zIndex.appBar - 2
  }, (ownerState.position === 'bottom' || ownerState.position === 'far-bottom') && {
    flexDirection: 'column',
    width: '100%'
  });
});
var Container = styled('div', {
  name: 'CompanionArea',
  slot: 'container'
})(function (_ref2) {
  var ownerState = _ref2.ownerState;
  return _objectSpread(_objectSpread({
    display: ownerState !== null && ownerState !== void 0 && ownerState.companionAreaOpen ? 'flex' : 'none'
  }, ((ownerState === null || ownerState === void 0 ? void 0 : ownerState.position) === 'bottom' || (ownerState === null || ownerState === void 0 ? void 0 : ownerState.position) === 'far-bottom') && {
    flexDirection: 'column',
    width: '100%'
  }), (ownerState === null || ownerState === void 0 ? void 0 : ownerState.position) === 'left' && (ownerState === null || ownerState === void 0 ? void 0 : ownerState.companionWindowIds) && ownerState.companionWindowIds.length > 0 && {
    minWidth: '235px'
  });
});
var StyledToggle = styled('div', {
  name: 'CompanionArea',
  slot: 'toggle'
})(function (_ref3) {
  var _theme$palette$shades;
  var theme = _ref3.theme;
  return {
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    border: "1px solid ".concat(theme.palette.mode === 'dark' ? theme.palette.divider : (_theme$palette$shades = theme.palette.shades) === null || _theme$palette$shades === void 0 ? void 0 : _theme$palette$shades.dark),
    borderInlineStart: 0,
    borderRadius: 0,
    display: 'inline-flex',
    height: '48px',
    left: '100%',
    marginTop: '1rem',
    overflow: 'hidden',
    padding: 2,
    position: 'absolute',
    width: '23px',
    zIndex: theme.zIndex.drawer
  };
});

/** */
export var CompanionArea = /*#__PURE__*/function (_Component) {
  _inherits(CompanionArea, _Component);
  function CompanionArea() {
    _classCallCheck(this, CompanionArea);
    return _callSuper(this, CompanionArea, arguments);
  }
  _createClass(CompanionArea, [{
    key: "areaLayoutClass",
    value: /** */
    function areaLayoutClass() {
      var _this$props = this.props,
        classes = _this$props.classes,
        position = _this$props.position;
      return position === 'bottom' || position === 'far-bottom' ? classes.horizontal : null;
    }

    /** */
  }, {
    key: "collapseIcon",
    value: function collapseIcon() {
      var _this$props2 = this.props,
        companionAreaOpen = _this$props2.companionAreaOpen,
        direction = _this$props2.direction;
      if (direction === 'rtl') {
        if (companionAreaOpen) return /*#__PURE__*/_jsx(ArrowRightIcon, {});
        return /*#__PURE__*/_jsx(ArrowLeftIcon, {});
      }
      if (companionAreaOpen) return /*#__PURE__*/_jsx(ArrowLeftIcon, {});
      return /*#__PURE__*/_jsx(ArrowRightIcon, {});
    }

    /** @private */
  }, {
    key: "slideDirection",
    value: function slideDirection() {
      var _this$props3 = this.props,
        direction = _this$props3.direction,
        position = _this$props3.position;
      var defaultPosition = direction === 'rtl' ? 'left' : 'right';
      var oppositePosition = direction === 'rtl' ? 'right' : 'left';
      switch (position) {
        case 'right':
        case 'far-right':
          return oppositePosition;
        case 'bottom':
        case 'far-bottom':
          return 'up';
        default:
          return defaultPosition;
      }
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        className = _this$props4.className,
        companionWindowIds = _this$props4.companionWindowIds,
        companionAreaOpen = _this$props4.companionAreaOpen,
        setCompanionAreaOpen = _this$props4.setCompanionAreaOpen,
        position = _this$props4.position,
        sideBarOpen = _this$props4.sideBarOpen,
        t = _this$props4.t,
        windowId = _this$props4.windowId;
      var classes = classNames(this.areaLayoutClass(), ns("companion-area-".concat(position)), className);
      return /*#__PURE__*/_jsxs(Root, {
        ownerState: this.props,
        className: classes,
        children: [/*#__PURE__*/_jsx(Slide, {
          "in": companionAreaOpen,
          direction: this.slideDirection(),
          children: /*#__PURE__*/_jsx(Container, {
            ownerState: this.props,
            className: "".concat(ns('companion-windows')),
            children: companionWindowIds.map(function (id) {
              return /*#__PURE__*/_jsx(CompanionWindowFactory, {
                id: id,
                windowId: windowId
              }, id);
            })
          })
        }), setCompanionAreaOpen && position === 'left' && sideBarOpen && companionWindowIds.length > 0 && /*#__PURE__*/_jsx(StyledToggle, {
          children: /*#__PURE__*/_jsx(MiradorMenuButton, {
            "aria-expanded": companionAreaOpen,
            "aria-label": companionAreaOpen ? t('collapseSidePanel') : t('expandSidePanel'),
            edge: "start",
            onClick: function onClick() {
              setCompanionAreaOpen(windowId, !companionAreaOpen);
            },
            TooltipProps: {
              placement: 'right'
            },
            children: this.collapseIcon()
          })
        })]
      });
    }
  }]);
  return CompanionArea;
}(Component);
CompanionArea.defaultProps = {
  classes: {},
  className: undefined,
  setCompanionAreaOpen: function setCompanionAreaOpen() {},
  sideBarOpen: false
};