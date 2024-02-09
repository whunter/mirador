function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var StyledContainer = styled('div')({
  alignItems: 'center',
  display: 'flex',
  width: '100%'
});
var StyledAudio = styled('audio')({
  width: '100%'
});

/** */
export function AudioViewer(props) {
  /* eslint-disable jsx-a11y/media-has-caption */
  /** */
  var captions = props.captions,
    audioOptions = props.audioOptions,
    audioResources = props.audioResources;
  return /*#__PURE__*/_jsx(StyledContainer, {
    children: /*#__PURE__*/_jsxs(StyledAudio, _objectSpread(_objectSpread({}, audioOptions), {}, {
      children: [audioResources.map(function (audio) {
        return /*#__PURE__*/_jsx(Fragment, {
          children: /*#__PURE__*/_jsx("source", {
            src: audio.id,
            type: audio.getFormat()
          })
        }, audio.id);
      }), captions.map(function (caption) {
        return /*#__PURE__*/_jsx(Fragment, {
          children: /*#__PURE__*/_jsx("track", {
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