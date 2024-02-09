"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WindowOptionsIcon;
var _SvgIcon = _interopRequireDefault(require("@mui/material/SvgIcon"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * WindowMinIcon ~
*/
function WindowOptionsIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgIcon["default"], _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M0,0H24V24H0Z",
        fill: "none"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M24.852,17.981,3,18V15.945l21.852-.019Z",
        transform: "translate(-2 5)"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M1,4V21H22.853V4.1ZM3,19V6h8V19Zm18,0H13V6h8Z",
        transform: "translate(0 -2)"
      })]
    })
  }));
}