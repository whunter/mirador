function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { Component } from 'react';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import ListSubheader from '@mui/material/ListSubheader';
import MenuItem from '@mui/material/MenuItem';
import ThumbnailsOffIcon from '@mui/icons-material/CropDinSharp';
import ThumbnailNavigationBottomIcon from './icons/ThumbnailNavigationBottomIcon';
import ThumbnailNavigationRightIcon from './icons/ThumbnailNavigationRightIcon';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var ThumbnailOption = styled(MenuItem, {
  name: 'WindowThumbnailSettings',
  slot: 'option'
})(function (_ref) {
  var selected = _ref.selected,
    theme = _ref.theme;
  return {
    '& .MuiFormControlLabel-label': _objectSpread({
      borderBottom: '2px solid transparent'
    }, selected && {
      borderBottomColor: theme.palette.secondary.main
    }),
    backgroundColor: 'transparent !important',
    color: selected ? theme.palette.secondary.main : undefined,
    display: 'inline-block'
  };
});

/**
 *
 */
export var WindowThumbnailSettings = /*#__PURE__*/function (_Component) {
  _inherits(WindowThumbnailSettings, _Component);
  /**
   * constructor -
   */
  function WindowThumbnailSettings(props) {
    var _this;
    _classCallCheck(this, WindowThumbnailSettings);
    _this = _callSuper(this, WindowThumbnailSettings, [props]);
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * @private
   */
  _createClass(WindowThumbnailSettings, [{
    key: "handleChange",
    value: function handleChange(value) {
      var _this$props = this.props,
        windowId = _this$props.windowId,
        setWindowThumbnailPosition = _this$props.setWindowThumbnailPosition;
      setWindowThumbnailPosition(windowId, value);
    }

    /**
     * render
     *
     * @return {type}  description
     */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        handleClose = _this$props2.handleClose,
        t = _this$props2.t,
        thumbnailNavigationPosition = _this$props2.thumbnailNavigationPosition,
        direction = _this$props2.direction;
      return /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx(ListSubheader, {
          role: "presentation",
          disableSticky: true,
          tabIndex: -1,
          children: t('thumbnails')
        }), /*#__PURE__*/_jsx(ThumbnailOption, {
          selected: thumbnailNavigationPosition === 'off',
          onClick: function onClick() {
            _this2.handleChange('off');
            handleClose();
          },
          children: /*#__PURE__*/_jsx(FormControlLabel, {
            value: "off",
            control: /*#__PURE__*/_jsx(ThumbnailsOffIcon, {
              color: thumbnailNavigationPosition === 'off' ? 'secondary' : undefined,
              fill: "currentcolor"
            }),
            label: t('off'),
            labelPlacement: "bottom"
          })
        }), /*#__PURE__*/_jsx(ThumbnailOption, {
          selected: thumbnailNavigationPosition === 'far-bottom',
          onClick: function onClick() {
            _this2.handleChange('far-bottom');
            handleClose();
          },
          children: /*#__PURE__*/_jsx(FormControlLabel, {
            value: "far-bottom",
            control: /*#__PURE__*/_jsx(ThumbnailNavigationBottomIcon, {
              color: thumbnailNavigationPosition === 'far-bottom' ? 'secondary' : undefined,
              fill: "currentcolor"
            }),
            label: t('bottom'),
            labelPlacement: "bottom"
          })
        }), /*#__PURE__*/_jsx(ThumbnailOption, {
          selected: thumbnailNavigationPosition === 'far-right',
          onClick: function onClick() {
            _this2.handleChange('far-right');
            handleClose();
          },
          children: /*#__PURE__*/_jsx(FormControlLabel, {
            value: "far-right",
            control: /*#__PURE__*/_jsx(ThumbnailNavigationRightIcon, {
              color: thumbnailNavigationPosition === 'far-right' ? 'secondary' : undefined,
              fill: "currentcolor",
              style: direction === 'rtl' ? {
                transform: 'rotate(180deg)'
              } : {}
            }),
            label: t('right'),
            labelPlacement: "bottom"
          })
        })]
      });
    }
  }]);
  return WindowThumbnailSettings;
}(Component);
WindowThumbnailSettings.defaultProps = {
  handleClose: function handleClose() {},
  t: function t(key) {
    return key;
  }
};