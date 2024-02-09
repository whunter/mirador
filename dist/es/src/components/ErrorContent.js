function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PluginHook } from './PluginHook';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var ErrorStackTrace = styled('pre', {
  name: 'ErrorContent',
  slot: 'stacktrace'
})({
  overflowY: 'scroll'
});
var ErrorMetadata = styled('pre', {
  name: 'ErrorContent',
  slot: 'metadata'
})({
  height: '100px',
  overflowY: 'scroll'
});
var InlineAccordion = styled(Accordion, {
  name: 'ErrorContent',
  slot: 'accordion'
})({
  backgroundColor: 'inherit',
  color: 'inherit',
  margin: 0
});

/** */
export var ErrorContent = /*#__PURE__*/function (_Component) {
  _inherits(ErrorContent, _Component);
  function ErrorContent() {
    _classCallCheck(this, ErrorContent);
    return _callSuper(this, ErrorContent, arguments);
  }
  _createClass(ErrorContent, [{
    key: "render",
    value: /** */
    function render() {
      var _this$props = this.props,
        error = _this$props.error,
        metadata = _this$props.metadata,
        showJsError = _this$props.showJsError,
        t = _this$props.t;
      if (!showJsError) return null;
      return /*#__PURE__*/_jsxs(Alert, {
        elevation: 6,
        variant: "filled",
        severity: "error",
        children: [t('errorDialogTitle'), showJsError && /*#__PURE__*/_jsxs(InlineAccordion, {
          elevation: 2,
          square: true,
          children: [/*#__PURE__*/_jsx(AccordionSummary, {
            sx: {
              marginInlineStart: '-1rem'
            },
            expandIcon: /*#__PURE__*/_jsx(ExpandMoreIcon, {
              sx: {
                color: '#fff'
              }
            }),
            children: t('jsError', {
              message: error.message,
              name: error.name
            })
          }), /*#__PURE__*/_jsx(AccordionDetails, {
            children: /*#__PURE__*/_jsxs(Stack, {
              children: [/*#__PURE__*/_jsx(ErrorStackTrace, {
                children: t('jsStack', {
                  stack: error.stack
                })
              }), metadata && /*#__PURE__*/_jsx(ErrorMetadata, {
                children: JSON.stringify(metadata, null, 2)
              })]
            })
          })]
        }), /*#__PURE__*/_jsx(PluginHook, _objectSpread({}, this.props))]
      });
    }
  }]);
  return ErrorContent;
}(Component);
ErrorContent.defaultProps = {
  metadata: null,
  showJsError: true,
  t: function t(key) {
    return key;
  }
};