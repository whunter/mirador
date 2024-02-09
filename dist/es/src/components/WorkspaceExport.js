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
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
import { Component } from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { WorkspaceDialog } from './WorkspaceDialog';

/**
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var WorkspaceExport = /*#__PURE__*/function (_Component) {
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
        return /*#__PURE__*/_jsx(Snackbar, {
          anchorOrigin: {
            horizontal: 'center',
            vertical: 'top'
          },
          open: true,
          autoHideDuration: 6000,
          onClose: this.handleClose,
          message: t('exportCopied'),
          action: /*#__PURE__*/_jsx(IconButton, {
            size: "small",
            "aria-label": t('dismiss'),
            color: "inherit",
            onClick: this.handleClose,
            children: /*#__PURE__*/_jsx(CloseIcon, {
              fontSize: "small"
            })
          })
        });
      }
      return /*#__PURE__*/_jsxs(WorkspaceDialog, {
        id: "workspace-export",
        container: container,
        open: open,
        onClose: this.handleClose,
        scroll: "paper",
        fullWidth: true,
        maxWidth: "sm",
        children: [/*#__PURE__*/_jsx(DialogTitle, {
          id: "form-dialog-title",
          children: t('downloadExport')
        }), /*#__PURE__*/_jsx(DialogContent, {
          children: /*#__PURE__*/_jsxs(Accordion, {
            elevation: 2,
            children: [/*#__PURE__*/_jsx(AccordionSummary, {
              expandIcon: /*#__PURE__*/_jsx(ExpandMoreIcon, {}),
              children: /*#__PURE__*/_jsx(Typography, {
                variant: "h4",
                children: t('viewWorkspaceConfiguration')
              })
            }), /*#__PURE__*/_jsxs(AccordionDetails, {
              sx: {
                overflow: 'scroll'
              },
              children: [children, /*#__PURE__*/_jsx("pre", {
                children: this.exportedState()
              })]
            })]
          })
        }), /*#__PURE__*/_jsxs(DialogActions, {
          children: [/*#__PURE__*/_jsx(Button, {
            onClick: this.handleClose,
            children: t('cancel')
          }), /*#__PURE__*/_jsx(CopyToClipboard, {
            onCopy: this.onCopy,
            text: this.exportedState(),
            children: /*#__PURE__*/_jsx(Button, {
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
}(Component);
WorkspaceExport.defaultProps = {
  children: null,
  container: null,
  open: false,
  t: function t(key) {
    return key;
  }
};