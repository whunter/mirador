function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import SvgIcon from '@mui/material/SvgIcon';

/**
 * GalleryViewIcon ~
 */
import { jsx as _jsx } from "react/jsx-runtime";
export default function GalleryViewIcon(props) {
  return /*#__PURE__*/_jsx(SvgIcon, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/_jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      children: /*#__PURE__*/_jsx("path", {
        d: "M19.974,2H2V19.974H19.974V2ZM7.392,18.177H3.8V14.582H7.392Zm0-5.392H3.8V9.19H7.392Zm0-5.392H3.8V3.8H7.392Zm5.392,10.785H9.19V14.582h3.595Zm0-5.392H9.19V9.19h3.595Zm0-5.392H9.19V3.8h3.595Zm5.392,10.785H14.582V14.582h3.595Zm0-5.392H14.582V9.19h3.595Zm0-5.392H14.582V3.8h3.595Z",
        transform: "translate(1 1)"
      })
    })
  }));
}