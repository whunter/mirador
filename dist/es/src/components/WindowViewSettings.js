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
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import SingleIcon from '@mui/icons-material/CropOriginalSharp';
import ScrollViewIcon from '@mui/icons-material/ViewColumn';
import BookViewIcon from './icons/BookViewIcon';
import GalleryViewIcon from './icons/GalleryViewIcon';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var ViewOption = styled(MenuItem, {
  name: 'WindowViewSettings',
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
export var WindowViewSettings = /*#__PURE__*/function (_Component) {
  _inherits(WindowViewSettings, _Component);
  /**
   * constructor -
   */
  function WindowViewSettings(props) {
    var _this;
    _classCallCheck(this, WindowViewSettings);
    _this = _callSuper(this, WindowViewSettings, [props]);
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * @private
   */
  _createClass(WindowViewSettings, [{
    key: "handleChange",
    value: function handleChange(value) {
      var _this$props = this.props,
        windowId = _this$props.windowId,
        setWindowViewType = _this$props.setWindowViewType;
      setWindowViewType(windowId, value);
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
        windowViewType = _this$props2.windowViewType,
        viewTypes = _this$props2.viewTypes;
      var iconMap = {
        book: BookViewIcon,
        gallery: GalleryViewIcon,
        scroll: ScrollViewIcon,
        single: SingleIcon
      };

      /** Suspiciously similar to a component, yet if it is invoked through JSX
          none of the click handlers work? */
      var menuItem = function menuItem(_ref2) {
        var value = _ref2.value,
          Icon = _ref2.Icon;
        return /*#__PURE__*/_jsx(ViewOption, {
          selected: windowViewType === value,
          autoFocus: windowViewType === value,
          onClick: function onClick() {
            _this2.handleChange(value);
            handleClose();
          },
          children: /*#__PURE__*/_jsx(FormControlLabel, {
            value: value,
            control: /*#__PURE__*/_jsx(Icon, {
              fill: "currentcolor",
              color: windowViewType === value ? 'secondary' : undefined
            }),
            label: t(value),
            labelPlacement: "bottom"
          })
        }, value);
      };
      if (viewTypes.length === 0) return null;
      return /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx(ListSubheader, {
          role: "presentation",
          disableSticky: true,
          tabIndex: -1,
          children: t('view')
        }), viewTypes.map(function (value) {
          return menuItem({
            Icon: iconMap[value],
            value: value
          });
        })]
      });
    }
  }]);
  return WindowViewSettings;
}(Component);
WindowViewSettings.defaultProps = {
  handleClose: function handleClose() {},
  t: function t(key) {
    return key;
  },
  viewTypes: []
};