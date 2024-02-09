"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ManifestForm = void 0;
var _react = require("react");
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /**
 * Provides a form for user input of a manifest url
 * @prop {Function} fetchManifest
 */
var ManifestForm = exports.ManifestForm = /*#__PURE__*/function (_Component) {
  _inherits(ManifestForm, _Component);
  /**
   * constructor -
   */
  function ManifestForm(props) {
    var _this;
    _classCallCheck(this, ManifestForm);
    _this = _callSuper(this, ManifestForm, [props]);
    _this.state = {
      formValue: ''
    };
    _this.formSubmit = _this.formSubmit.bind(_assertThisInitialized(_this));
    _this.handleCancel = _this.handleCancel.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * Reset the form state
   */
  _createClass(ManifestForm, [{
    key: "handleCancel",
    value: function handleCancel() {
      var onCancel = this.props.onCancel;
      onCancel();
      this.setState({
        formValue: ''
      });
    }

    /**
     * handleInputChange - sets state based on input change.
     * @param  {Event} event
     * @private
     */
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var that = this;
      event.preventDefault();
      that.setState({
        formValue: event.target.value
      });
    }

    /**
     * formSubmit - triggers manifest update and sets lastRequested
     * @param  {Event} event
     * @private
     */
  }, {
    key: "formSubmit",
    value: function formSubmit(event) {
      var _this$props = this.props,
        addResource = _this$props.addResource,
        onSubmit = _this$props.onSubmit;
      var formValue = this.state.formValue;
      event.preventDefault();
      onSubmit();
      addResource(formValue);
      this.setState({
        formValue: ''
      });
    }

    /**
     * render
     * @return {String} - HTML markup for the component
     */
  }, {
    key: "render",
    value: function render() {
      var formValue = this.state.formValue;
      var _this$props2 = this.props,
        addResourcesOpen = _this$props2.addResourcesOpen,
        onCancel = _this$props2.onCancel,
        t = _this$props2.t;
      if (!addResourcesOpen) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("form", {
        onSubmit: this.formSubmit,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid["default"], {
          container: true,
          spacing: 2,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid["default"], {
            item: true,
            xs: 12,
            sm: 8,
            md: 9,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField["default"], {
              autoFocus: true,
              fullWidth: true,
              value: formValue,
              id: "manifestURL",
              type: "text",
              onChange: this.handleInputChange,
              variant: "filled",
              label: t('addManifestUrl'),
              helperText: t('addManifestUrlHelp'),
              InputLabelProps: {
                shrink: true
              },
              InputProps: {
                style: {
                  typography: 'body1'
                }
              }
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid["default"], {
            item: true,
            xs: 12,
            sm: 4,
            md: 3,
            sx: {
              textAlign: {
                sm: 'inherit',
                xs: 'right'
              }
            },
            children: [onCancel && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
              onClick: this.handleCancel,
              children: t('cancel')
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
              id: "fetchBtn",
              type: "submit",
              variant: "contained",
              color: "primary",
              children: t('fetchManifest')
            })]
          })]
        })
      });
    }
  }]);
  return ManifestForm;
}(_react.Component);
ManifestForm.defaultProps = {
  onCancel: null,
  onSubmit: function onSubmit() {},
  t: function t(key) {
    return key;
  }
};