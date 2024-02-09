"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorDialog = void 0;
var _isUndefined2 = _interopRequireDefault(require("lodash/isUndefined"));
var _react = require("react");
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
var _material = require("@mui/material");
var _Button = _interopRequireDefault(require("@mui/material/Button"));
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
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
/**
 */
var ErrorDialog = exports.ErrorDialog = /*#__PURE__*/function (_Component) {
  _inherits(ErrorDialog, _Component);
  function ErrorDialog() {
    _classCallCheck(this, ErrorDialog);
    return _callSuper(this, ErrorDialog, arguments);
  }
  _createClass(ErrorDialog, [{
    key: "render",
    value:
    /**
     * render
     * @return
     */
    function render() {
      var _this$props = this.props,
        error = _this$props.error,
        removeError = _this$props.removeError,
        t = _this$props.t;
      var hasError = !(0, _isUndefined2["default"])(error);
      return error ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Dialog["default"], {
        "aria-labelledby": "error-dialog-title",
        id: "error-dialog",
        onClose: function onClose() {
          return removeError(error.id);
        },
        open: hasError,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogTitle["default"], {
          id: "error-dialog-title",
          children: t('errorDialogTitle')
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_DialogContent["default"], {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.DialogContentText, {
            variant: "body2",
            noWrap: true,
            color: "inherit",
            children: "".concat(error.message)
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.DialogActions, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
              onClick: function onClick() {
                return removeError(error.id);
              },
              variant: "contained",
              children: t('errorDialogConfirm')
            })
          })]
        })]
      }) : null;
    }
  }]);
  return ErrorDialog;
}(_react.Component);
ErrorDialog.defaultProps = {
  error: null,
  removeError: function removeError() {},
  t: function t(key) {
    return key;
  }
};