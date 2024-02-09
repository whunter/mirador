"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalePicker = void 0;
var _react = require("react");
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
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
 * Provide a locale picker
 */
var LocalePicker = exports.LocalePicker = /*#__PURE__*/function (_Component) {
  _inherits(LocalePicker, _Component);
  function LocalePicker() {
    _classCallCheck(this, LocalePicker);
    return _callSuper(this, LocalePicker, arguments);
  }
  _createClass(LocalePicker, [{
    key: "render",
    value:
    /**
     * render
     * @return
     */
    function render() {
      var _this$props = this.props,
        availableLocales = _this$props.availableLocales,
        locale = _this$props.locale,
        setLocale = _this$props.setLocale;
      if (!setLocale || availableLocales.length < 2) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControl["default"], {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select["default"], {
          MenuProps: {
            anchorOrigin: {
              horizontal: 'left',
              vertical: 'bottom'
            }
          },
          displayEmpty: true,
          value: locale,
          onChange: function onChange(e) {
            setLocale(e.target.value);
          },
          name: "locale",
          children: availableLocales.map(function (l) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem["default"], {
              value: l,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
                variant: "body2",
                children: l
              })
            }, l);
          })
        })
      });
    }
  }]);
  return LocalePicker;
}(_react.Component);
LocalePicker.defaultProps = {
  availableLocales: [],
  locale: '',
  setLocale: undefined
};