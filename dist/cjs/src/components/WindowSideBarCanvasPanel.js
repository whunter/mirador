"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowSideBarCanvasPanel = void 0;
var _react = require("react");
var _styles = require("@mui/material/styles");
var _Tabs = _interopRequireDefault(require("@mui/material/Tabs"));
var _Tab = _interopRequireDefault(require("@mui/material/Tab"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _ReorderSharp = _interopRequireDefault(require("@mui/icons-material/ReorderSharp"));
var _SortSharp = _interopRequireDefault(require("@mui/icons-material/SortSharp"));
var _ViewListSharp = _interopRequireDefault(require("@mui/icons-material/ViewListSharp"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _ArrowForwardSharp = _interopRequireDefault(require("@mui/icons-material/ArrowForwardSharp"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _CompanionWindow = _interopRequireDefault(require("../containers/CompanionWindow"));
var _SidebarIndexList = _interopRequireDefault(require("../containers/SidebarIndexList"));
var _SidebarIndexTableOfContents = _interopRequireDefault(require("../containers/SidebarIndexTableOfContents"));
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
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var StyledBreak = (0, _styles.styled)('div')(function () {
  return {
    flexBasis: '100%',
    height: 0
  };
});
/**
 * a panel showing the canvases for a given manifest
 */
var WindowSideBarCanvasPanel = exports.WindowSideBarCanvasPanel = /*#__PURE__*/function (_Component) {
  _inherits(WindowSideBarCanvasPanel, _Component);
  /** */
  function WindowSideBarCanvasPanel(props) {
    var _this;
    _classCallCheck(this, WindowSideBarCanvasPanel);
    _this = _callSuper(this, WindowSideBarCanvasPanel, [props]);
    _this.handleSequenceChange = _this.handleSequenceChange.bind(_assertThisInitialized(_this));
    _this.handleVariantChange = _this.handleVariantChange.bind(_assertThisInitialized(_this));
    _this.containerRef = /*#__PURE__*/(0, _react.createRef)();
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
        listComponent = /*#__PURE__*/(0, _jsxRuntime.jsx)(_SidebarIndexTableOfContents["default"], {
          id: id,
          containerRef: this.containerRef,
          windowId: windowId
        });
      } else {
        listComponent = /*#__PURE__*/(0, _jsxRuntime.jsx)(_SidebarIndexList["default"], {
          id: id,
          containerRef: this.containerRef,
          windowId: windowId
        });
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CompanionWindow["default"], {
        title: t('canvasIndex'),
        id: id,
        windowId: windowId,
        ref: this.containerRef,
        titleControls: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [sequences && sequences.length > 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControl["default"], {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select["default"], {
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
                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem["default"], {
                  value: s.id,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
                    variant: "body2",
                    children: WindowSideBarCanvasPanel.getUseableLabel(s, i)
                  })
                }, s.id);
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledBreak, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Tabs["default"], {
            value: variant,
            onChange: this.handleVariantChange,
            variant: "fullWidth",
            indicatorColor: "primary",
            textColor: "primary",
            children: [showToc && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip["default"], {
              title: t('tableOfContentsList'),
              value: "tableOfContents",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab["default"], {
                sx: {
                  minWidth: 'auto'
                },
                value: "tableOfContents",
                "aria-label": t('tableOfContentsList'),
                "aria-controls": "tab-panel-".concat(id),
                icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SortSharp["default"], {
                  style: {
                    transform: 'scale(-1, 1)'
                  }
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip["default"], {
              title: t('itemList'),
              value: "item",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab["default"], {
                sx: {
                  minWidth: 'auto'
                },
                value: "item",
                "aria-label": t('itemList'),
                "aria-controls": "tab-panel-".concat(id),
                icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ReorderSharp["default"], {})
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip["default"], {
              title: t('thumbnailList'),
              value: "thumbnail",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab["default"], {
                sx: {
                  minWidth: 'auto'
                },
                value: "thumbnail",
                "aria-label": t('thumbnailList'),
                "aria-controls": "tab-panel-".concat(id),
                icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ViewListSharp["default"], {})
              })
            })]
          })]
        }),
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          id: "tab-panel-".concat(id),
          children: [collection && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
            fullWidth: true,
            onClick: showMultipart,
            endIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ArrowForwardSharp["default"], {}),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
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
}(_react.Component);
WindowSideBarCanvasPanel.defaultProps = {
  collection: null,
  sequenceId: null,
  sequences: [],
  showToc: false
};