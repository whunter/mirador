"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowTopBarTitle = void 0;
var _react = require("react");
var _styles = require("@mui/material/styles");
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Skeleton = _interopRequireDefault(require("@mui/material/Skeleton"));
var _ErrorOutlineSharp = _interopRequireDefault(require("@mui/icons-material/ErrorOutlineSharp"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children"];
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
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var StyledTitleTypography = (0, _styles.styled)(TitleTypography)(function (_ref) {
  var theme = _ref.theme;
  return _objectSpread(_objectSpread({}, theme.typography.h6), {}, {
    flexGrow: 1,
    paddingLeft: theme.spacing(0.5)
  });
});
var StyledTitle = (0, _styles.styled)('div')(function (_ref2) {
  var theme = _ref2.theme;
  return _objectSpread(_objectSpread({}, theme.typography.h6), {}, {
    flexGrow: 1,
    paddingLeft: theme.spacing(0.5)
  });
});
/** */
function TitleTypography(_ref3) {
  var children = _ref3.children,
    props = _objectWithoutProperties(_ref3, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], _objectSpread(_objectSpread({
    variant: "h2",
    noWrap: true,
    color: "inherit"
  }, props), {}, {
    children: children
  }));
}
/**
 * WindowTopBarTitle
 */
var WindowTopBarTitle = exports.WindowTopBarTitle = /*#__PURE__*/function (_Component) {
  _inherits(WindowTopBarTitle, _Component);
  function WindowTopBarTitle() {
    _classCallCheck(this, WindowTopBarTitle);
    return _callSuper(this, WindowTopBarTitle, arguments);
  }
  _createClass(WindowTopBarTitle, [{
    key: "render",
    value:
    /**
     * render
     * @return
     */
    function render() {
      var _this$props = this.props,
        error = _this$props.error,
        hideWindowTitle = _this$props.hideWindowTitle,
        isFetching = _this$props.isFetching,
        manifestTitle = _this$props.manifestTitle;
      var title = null;
      if (isFetching) {
        title = /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledTitleTypography, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Skeleton["default"], {
            variant: "text"
          })
        });
      } else if (error) {
        title = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorOutlineSharp["default"], {
            color: "error"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledTitleTypography, {
            color: "textSecondary",
            children: error
          })]
        });
      } else if (hideWindowTitle) {
        title = /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledTitle, {});
      } else {
        title = /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledTitleTypography, {
          children: manifestTitle
        });
      }
      return title;
    }
  }]);
  return WindowTopBarTitle;
}(_react.Component);
WindowTopBarTitle.defaultProps = {
  error: null,
  hideWindowTitle: false,
  isFetching: false,
  manifestTitle: ''
};