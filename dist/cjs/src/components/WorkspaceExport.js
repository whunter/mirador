"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceExport = void 0;
var _react = require("react");
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Snackbar = _interopRequireDefault(require("@mui/material/Snackbar"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _ExpandMore = _interopRequireDefault(require("@mui/icons-material/ExpandMore"));
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
var _Accordion = _interopRequireDefault(require("@mui/material/Accordion"));
var _AccordionSummary = _interopRequireDefault(require("@mui/material/AccordionSummary"));
var _AccordionDetails = _interopRequireDefault(require("@mui/material/AccordionDetails"));
var _reactCopyToClipboard = require("react-copy-to-clipboard");
var _WorkspaceDialog = require("./WorkspaceDialog");
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
var WorkspaceExport = exports.WorkspaceExport = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceExport, _Component);
  /** */
  function WorkspaceExport(props) {
    var _this;
    _classCallCheck(this, WorkspaceExport);
    _this = _callSuper(this, WorkspaceExport, [props]);
    _this.state = {
      copied: false
    };
    _this.onCopy = _this.onCopy.bind(_assertThisInitialized(_this));
    _this.handleClose = _this.handleClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  /** Handle closing after the content is copied and the snackbar is done */
  _createClass(WorkspaceExport, [{
    key: "handleClose",
    value: function handleClose() {
      var handleClose = this.props.handleClose;
      handleClose();
    }

    /** Show the snackbar */
  }, {
    key: "onCopy",
    value: function onCopy() {
      this.setState({
        copied: true
      });
    }

    /**
     * @private
     */
  }, {
    key: "exportedState",
    value: function exportedState() {
      var exportableState = this.props.exportableState;
      return JSON.stringify(exportableState, null, 2);
    }

    /**
     * render
     * @return
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        container = _this$props.container,
        open = _this$props.open,
        t = _this$props.t;
      var copied = this.state.copied;
      if (copied) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Snackbar["default"], {
          anchorOrigin: {
            horizontal: 'center',
            vertical: 'top'
          },
          open: true,
          autoHideDuration: 6000,
          onClose: this.handleClose,
          message: t('exportCopied'),
          action: /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton["default"], {
            size: "small",
            "aria-label": t('dismiss'),
            color: "inherit",
            onClick: this.handleClose,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Close["default"], {
              fontSize: "small"
            })
          })
        });
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_WorkspaceDialog.WorkspaceDialog, {
        id: "workspace-export",
        container: container,
        open: open,
        onClose: this.handleClose,
        scroll: "paper",
        fullWidth: true,
        maxWidth: "sm",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogTitle["default"], {
          id: "form-dialog-title",
          children: t('downloadExport')
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogContent["default"], {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Accordion["default"], {
            elevation: 2,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_AccordionSummary["default"], {
              expandIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExpandMore["default"], {}),
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
                variant: "h4",
                children: t('viewWorkspaceConfiguration')
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_AccordionDetails["default"], {
              sx: {
                overflow: 'scroll'
              },
              children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)("pre", {
                children: this.exportedState()
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_DialogActions["default"], {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
            onClick: this.handleClose,
            children: t('cancel')
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactCopyToClipboard.CopyToClipboard, {
            onCopy: this.onCopy,
            text: this.exportedState(),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
              variant: "contained",
              color: "primary",
              children: t('copy')
            })
          })]
        })]
      });
    }
  }]);
  return WorkspaceExport;
}(_react.Component);
WorkspaceExport.defaultProps = {
  children: null,
  container: null,
  open: false,
  t: function t(key) {
    return key;
  }
};