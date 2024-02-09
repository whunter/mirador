"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioViewer = AudioViewer;
var _react = require("react");
var _styles = require("@mui/material/styles");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var StyledContainer = (0, _styles.styled)('div')({
  alignItems: 'center',
  display: 'flex',
  width: '100%'
});
var StyledAudio = (0, _styles.styled)('audio')({
  width: '100%'
});

/** */
function AudioViewer(props) {
  /* eslint-disable jsx-a11y/media-has-caption */
  /** */
  var captions = props.captions,
    audioOptions = props.audioOptions,
    audioResources = props.audioResources;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledContainer, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(StyledAudio, _objectSpread(_objectSpread({}, audioOptions), {}, {
      children: [audioResources.map(function (audio) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("source", {
            src: audio.id,
            type: audio.getFormat()
          })
        }, audio.id);
      }), captions.map(function (caption) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("track", {
            src: caption.id,
            label: caption.getDefaultLabel(),
            srcLang: caption.getProperty('language')
          })
        }, caption.id);
      })]
    }))
  });
}
/* eslint-enable jsx-a11y/media-has-caption */

AudioViewer.defaultProps = {
  audioOptions: {},
  audioResources: [],
  captions: []
};