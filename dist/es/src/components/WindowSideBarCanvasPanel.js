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
import { createRef, Component } from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import ItemListIcon from '@mui/icons-material/ReorderSharp';
import TocIcon from '@mui/icons-material/SortSharp';
import ThumbnailListIcon from '@mui/icons-material/ViewListSharp';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardSharp';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CompanionWindow from '../containers/CompanionWindow';
import SidebarIndexList from '../containers/SidebarIndexList';
import SidebarIndexTableOfContents from '../containers/SidebarIndexTableOfContents';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
var StyledBreak = styled('div')(function () {
  return {
    flexBasis: '100%',
    height: 0
  };
});
/**
 * a panel showing the canvases for a given manifest
 */
export var WindowSideBarCanvasPanel = /*#__PURE__*/function (_Component) {
  _inherits(WindowSideBarCanvasPanel, _Component);
  /** */
  function WindowSideBarCanvasPanel(props) {
    var _this;
    _classCallCheck(this, WindowSideBarCanvasPanel);
    _this = _callSuper(this, WindowSideBarCanvasPanel, [props]);
    _this.handleSequenceChange = _this.handleSequenceChange.bind(_assertThisInitialized(_this));
    _this.handleVariantChange = _this.handleVariantChange.bind(_assertThisInitialized(_this));
    _this.containerRef = /*#__PURE__*/createRef();
    return _this;
  }

  /** */
  _createClass(WindowSideBarCanvasPanel, [{
    key: "handleSequenceChange",
    value: /** @private */
    function handleSequenceChange(event) {
      var updateSequence = this.props.updateSequence;
      updateSequence(event.target.value);
    }

    /** @private */
  }, {
    key: "handleVariantChange",
    value: function handleVariantChange(event, value) {
      var updateVariant = this.props.updateVariant;
      updateVariant(value);
    }

    /**
     * render
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        collection = _this$props.collection,
        id = _this$props.id,
        showMultipart = _this$props.showMultipart,
        sequenceId = _this$props.sequenceId,
        sequences = _this$props.sequences,
        t = _this$props.t,
        variant = _this$props.variant,
        showToc = _this$props.showToc,
        windowId = _this$props.windowId;
      var listComponent;
      if (variant === 'tableOfContents') {
        listComponent = /*#__PURE__*/_jsx(SidebarIndexTableOfContents, {
          id: id,
          containerRef: this.containerRef,
          windowId: windowId
        });
      } else {
        listComponent = /*#__PURE__*/_jsx(SidebarIndexList, {
          id: id,
          containerRef: this.containerRef,
          windowId: windowId
        });
      }
      return /*#__PURE__*/_jsx(CompanionWindow, {
        title: t('canvasIndex'),
        id: id,
        windowId: windowId,
        ref: this.containerRef,
        titleControls: /*#__PURE__*/_jsxs(_Fragment, {
          children: [sequences && sequences.length > 1 && /*#__PURE__*/_jsx(FormControl, {
            children: /*#__PURE__*/_jsx(Select, {
              MenuProps: {
                anchorOrigin: {
                  horizontal: 'left',
                  vertical: 'bottom'
                }
              },
              displayEmpty: true,
              value: sequenceId,
              onChange: this.handleSequenceChange,
              name: "sequenceId",
              sx: {
                '&.MuiSelect-select': {
                  '&:focus': {
                    backgroundColor: 'background.paper'
                  }
                },
                backgroundColor: 'background.paper'
              },
              "data-testid": "sequence-select",
              children: sequences.map(function (s, i) {
                return /*#__PURE__*/_jsx(MenuItem, {
                  value: s.id,
                  children: /*#__PURE__*/_jsx(Typography, {
                    variant: "body2",
                    children: WindowSideBarCanvasPanel.getUseableLabel(s, i)
                  })
                }, s.id);
              })
            })
          }), /*#__PURE__*/_jsx(StyledBreak, {}), /*#__PURE__*/_jsxs(Tabs, {
            value: variant,
            onChange: this.handleVariantChange,
            variant: "fullWidth",
            indicatorColor: "primary",
            textColor: "primary",
            children: [showToc && /*#__PURE__*/_jsx(Tooltip, {
              title: t('tableOfContentsList'),
              value: "tableOfContents",
              children: /*#__PURE__*/_jsx(Tab, {
                sx: {
                  minWidth: 'auto'
                },
                value: "tableOfContents",
                "aria-label": t('tableOfContentsList'),
                "aria-controls": "tab-panel-".concat(id),
                icon: /*#__PURE__*/_jsx(TocIcon, {
                  style: {
                    transform: 'scale(-1, 1)'
                  }
                })
              })
            }), /*#__PURE__*/_jsx(Tooltip, {
              title: t('itemList'),
              value: "item",
              children: /*#__PURE__*/_jsx(Tab, {
                sx: {
                  minWidth: 'auto'
                },
                value: "item",
                "aria-label": t('itemList'),
                "aria-controls": "tab-panel-".concat(id),
                icon: /*#__PURE__*/_jsx(ItemListIcon, {})
              })
            }), /*#__PURE__*/_jsx(Tooltip, {
              title: t('thumbnailList'),
              value: "thumbnail",
              children: /*#__PURE__*/_jsx(Tab, {
                sx: {
                  minWidth: 'auto'
                },
                value: "thumbnail",
                "aria-label": t('thumbnailList'),
                "aria-controls": "tab-panel-".concat(id),
                icon: /*#__PURE__*/_jsx(ThumbnailListIcon, {})
              })
            })]
          })]
        }),
        children: /*#__PURE__*/_jsxs("div", {
          id: "tab-panel-".concat(id),
          children: [collection && /*#__PURE__*/_jsx(Button, {
            fullWidth: true,
            onClick: showMultipart,
            endIcon: /*#__PURE__*/_jsx(ArrowForwardIcon, {}),
            children: /*#__PURE__*/_jsx(Typography, {
              sx: {
                textTransform: 'none'
              },
              children: WindowSideBarCanvasPanel.getUseableLabel(collection)
            })
          }), listComponent]
        })
      });
    }
  }], [{
    key: "getUseableLabel",
    value: function getUseableLabel(resource, index) {
      return resource && resource.getLabel && resource.getLabel().length > 0 ? resource.getLabel().getValue() : resource.id;
    }
  }]);
  return WindowSideBarCanvasPanel;
}(Component);
WindowSideBarCanvasPanel.defaultProps = {
  collection: null,
  sequenceId: null,
  sequences: [],
  showToc: false
};