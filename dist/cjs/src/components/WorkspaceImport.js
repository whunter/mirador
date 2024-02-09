"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceImport = void 0;
var _react = require("react");
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
var _material = require("@mui/material");
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _WorkspaceDialog = require("./WorkspaceDialog");
var _ScrollIndicatedDialogContent = _interopRequireDefault(require("../containers/ScrollIndicatedDialogContent"));
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
 */
var WorkspaceImport = exports.WorkspaceImport = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceImport, _Component);
  /**
   *
   * constructor
   */
  function WorkspaceImport(props) {
    var _this;
    _classCallCheck(this, WorkspaceImport);
    _this = _callSuper(this, WorkspaceImport, [props]);
    _this.state = {
      configImportValue: ''
    };
    _this.handleImportConfig = _this.handleImportConfig.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * @private
   */
  _createClass(WorkspaceImport, [{
    key: "handleChange",
    value: function handleChange(event) {
      event.preventDefault();
      this.setState({
        configImportValue: event.target.value
      });
    }

    /**
     * @private
     */
  }, {
    key: "handleImportConfig",
    value: function handleImportConfig(event) {
      var _this$props = this.props,
        handleClose = _this$props.handleClose,
        importConfig = _this$props.importConfig;
      var configImportValue = this.state.configImportValue;
      try {
        var configJSON = JSON.parse(configImportValue);
        importConfig(configJSON);
        handleClose();
      } catch (ex) {
        var addError = this.props.addError;
        addError(ex.toString());
      }
    }

    /**
     * render
     * @return
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        classes = _this$props2.classes,
        handleClose = _this$props2.handleClose,
        open = _this$props2.open,
        t = _this$props2.t;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_WorkspaceDialog.WorkspaceDialog, {
        "aria-labelledby": "workspace-import-title",
        id: "workspace-import",
        onClose: handleClose,
        open: open,
        fullWidth: true,
        maxWidth: "sm",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogTitle["default"], {
          id: "workspace-import-title",
          children: t('importWorkspace')
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ScrollIndicatedDialogContent["default"], {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
            className: classes.textField,
            id: "workspace-import-input",
            multiline: true,
            onChange: this.handleChange,
            minRows: 15,
            variant: "filled",
            sx: {
              '& .MuiInputBase-input': {
                fontFamily: 'monospace'
              },
              width: '100%'
            },
            inputProps: {
              autoFocus: 'autofocus'
            },
            helperText: t('importWorkspaceHint')
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.DialogActions, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
            onClick: handleClose,
            children: t('cancel')
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
            color: "primary",
            onClick: this.handleImportConfig,
            variant: "contained",
            children: t('import')
          })]
        })]
      });
    }
  }]);
  return WorkspaceImport;
}(_react.Component);
WorkspaceImport.defaultProps = {
  classes: {},
  open: false,
  t: function t(key) {
    return key;
  }
};