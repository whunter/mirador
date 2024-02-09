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
import DialogTitle from '@mui/material/DialogTitle';
import { Card, CardContent, MenuList, MenuItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { WorkspaceDialog } from './WorkspaceDialog';
import WorkspaceTypeElasticIcon from './icons/WorkspaceTypeElasticIcon';
import WorkspaceTypeMosaicIcon from './icons/WorkspaceTypeMosaicIcon';
import ScrollIndicatedDialogContent from '../containers/ScrollIndicatedDialogContent';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var StyledDetails = styled('div')(function () {
  return {
    display: 'flex',
    flexDirection: 'column'
  };
});
/**
 */
export var WorkspaceSelectionDialog = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceSelectionDialog, _Component);
  /**
   * constructor
   */
  function WorkspaceSelectionDialog(props) {
    var _this;
    _classCallCheck(this, WorkspaceSelectionDialog);
    _this = _callSuper(this, WorkspaceSelectionDialog, [props]);
    _this.handleWorkspaceTypeChange = _this.handleWorkspaceTypeChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * Propagate workspace type selection into the global state
   */
  _createClass(WorkspaceSelectionDialog, [{
    key: "handleWorkspaceTypeChange",
    value: function handleWorkspaceTypeChange(workspaceType) {
      var _this$props = this.props,
        handleClose = _this$props.handleClose,
        updateWorkspace = _this$props.updateWorkspace;
      updateWorkspace({
        type: workspaceType
      });
      handleClose();
    }

    /**
     * render
     * @return
     */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        container = _this$props2.container,
        handleClose = _this$props2.handleClose,
        open = _this$props2.open,
        children = _this$props2.children,
        t = _this$props2.t,
        workspaceType = _this$props2.workspaceType;
      return /*#__PURE__*/_jsxs(WorkspaceDialog, {
        "aria-labelledby": "workspace-selection-dialog-title",
        container: container,
        id: "workspace-selection-dialog",
        onClose: handleClose,
        open: open,
        children: [/*#__PURE__*/_jsx(DialogTitle, {
          id: "workspace-selection-dialog-title",
          children: t('workspaceSelectionTitle')
        }), /*#__PURE__*/_jsxs(ScrollIndicatedDialogContent, {
          children: [children, /*#__PURE__*/_jsxs(MenuList, {
            sx: {
              '&active': {
                outline: 'none'
              },
              '&focus': {
                outline: 'none'
              },
              outline: 'none'
            },
            selected: workspaceType,
            autoFocusItem: true,
            children: [/*#__PURE__*/_jsx(MenuItem, {
              sx: {
                height: 'auto',
                overflow: 'auto',
                whiteSpace: 'inherit'
              },
              onClick: function onClick() {
                return _this2.handleWorkspaceTypeChange('elastic');
              },
              selected: workspaceType === 'elastic',
              value: "elastic",
              children: /*#__PURE__*/_jsxs(Card, {
                sx: {
                  backgroundColor: 'transparent',
                  borderRadius: '0',
                  boxShadow: '0 0 transparent',
                  display: 'flex'
                },
                children: [/*#__PURE__*/_jsx(WorkspaceTypeElasticIcon, {
                  sx: {
                    flexShrink: 0,
                    height: '90px',
                    width: '120px'
                  },
                  viewBox: "0 0 120 90"
                }), /*#__PURE__*/_jsx(StyledDetails, {
                  children: /*#__PURE__*/_jsxs(CardContent, {
                    sx: {
                      '&.MuiCardContent-root': {
                        '&:last-child': {
                          paddingBottom: '12px'
                        },
                        paddingBottom: 0,
                        paddingTop: 0,
                        textAlign: 'left'
                      },
                      flex: '1 0 auto'
                    },
                    children: [/*#__PURE__*/_jsx(Typography, {
                      sx: {
                        paddingBottom: '6px'
                      },
                      component: "p",
                      variant: "h3",
                      children: t('elastic')
                    }), /*#__PURE__*/_jsx(Typography, {
                      variant: "body1",
                      children: t('elasticDescription')
                    })]
                  })
                })]
              })
            }), /*#__PURE__*/_jsx(MenuItem, {
              sx: {
                height: 'auto',
                overflow: 'auto',
                whiteSpace: 'inherit'
              },
              onClick: function onClick() {
                return _this2.handleWorkspaceTypeChange('mosaic');
              },
              selected: workspaceType === 'mosaic',
              value: "mosaic",
              children: /*#__PURE__*/_jsxs(Card, {
                sx: {
                  backgroundColor: 'transparent',
                  borderRadius: '0',
                  boxShadow: '0 0 transparent',
                  display: 'flex'
                },
                children: [/*#__PURE__*/_jsx(WorkspaceTypeMosaicIcon, {
                  sx: {
                    flexShrink: 0,
                    height: '90px',
                    width: '120px'
                  },
                  viewBox: "0 0 120 90"
                }), /*#__PURE__*/_jsx(StyledDetails, {
                  children: /*#__PURE__*/_jsxs(CardContent, {
                    sx: {
                      '&.MuiCardContent-root': {
                        '&:last-child': {
                          paddingBottom: '12px'
                        },
                        paddingBottom: 0,
                        paddingTop: 0,
                        textAlign: 'left'
                      },
                      flex: '1 0 auto'
                    },
                    children: [/*#__PURE__*/_jsx(Typography, {
                      sx: {
                        paddingBottom: '6px'
                      },
                      component: "p",
                      variant: "h3",
                      children: t('mosaic')
                    }), /*#__PURE__*/_jsx(Typography, {
                      variant: "body1",
                      children: t('mosaicDescription')
                    })]
                  })
                })]
              })
            })]
          })]
        })]
      });
    }
  }]);
  return WorkspaceSelectionDialog;
}(Component);
WorkspaceSelectionDialog.defaultProps = {
  children: null,
  container: null,
  open: false,
  t: function t(key) {
    return key;
  }
};