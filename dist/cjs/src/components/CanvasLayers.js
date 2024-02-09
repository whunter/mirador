"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanvasLayers = void 0;
var _react = require("react");
var _styles = require("@mui/material/styles");
var _uuid = require("uuid");
var _Input = _interopRequireDefault(require("@mui/material/Input"));
var _InputAdornment = _interopRequireDefault(require("@mui/material/InputAdornment"));
var _List = _interopRequireDefault(require("@mui/material/List"));
var _ListItem = _interopRequireDefault(require("@mui/material/ListItem"));
var _Slider = _interopRequireDefault(require("@mui/material/Slider"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _DragHandleSharp = _interopRequireDefault(require("@mui/icons-material/DragHandleSharp"));
var _VerticalAlignTopSharp = _interopRequireDefault(require("@mui/icons-material/VerticalAlignTopSharp"));
var _VisibilitySharp = _interopRequireDefault(require("@mui/icons-material/VisibilitySharp"));
var _VisibilityOffSharp = _interopRequireDefault(require("@mui/icons-material/VisibilityOffSharp"));
var _OpacitySharp = _interopRequireDefault(require("@mui/icons-material/OpacitySharp"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _dnd = require("@hello-pangea/dnd");
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
var _IIIFThumbnail = _interopRequireDefault(require("../containers/IIIFThumbnail"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var StyledDragHandle = (0, _styles.styled)('div')(function (_ref) {
  var theme = _ref.theme;
  return {
    alignItems: 'center',
    borderRight: "0.5px solid ".concat(theme.palette.divider),
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    marginBottom: theme.spacing(-2),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(-2),
    maxWidth: theme.spacing(3),
    width: theme.spacing(3)
  };
});

/** */
var reorder = function reorder(list, startIndex, endIndex) {
  var result = Array.from(list);
  var _result$splice = result.splice(startIndex, 1),
    _result$splice2 = _slicedToArray(_result$splice, 1),
    removed = _result$splice2[0];
  result.splice(endIndex, 0, removed);
  return result;
};

/** */
var CanvasLayers = exports.CanvasLayers = /*#__PURE__*/function (_Component) {
  _inherits(CanvasLayers, _Component);
  /** */
  function CanvasLayers(props) {
    var _this;
    _classCallCheck(this, CanvasLayers);
    _this = _callSuper(this, CanvasLayers, [props]);
    _this.droppableId = (0, _uuid.v4)();
    _this.onDragEnd = _this.onDragEnd.bind(_assertThisInitialized(_this));
    _this.handleOpacityChange = _this.handleOpacityChange.bind(_assertThisInitialized(_this));
    _this.setLayerVisibility = _this.setLayerVisibility.bind(_assertThisInitialized(_this));
    _this.moveToTop = _this.moveToTop.bind(_assertThisInitialized(_this));
    return _this;
  }

  /** */
  _createClass(CanvasLayers, [{
    key: "handleOpacityChange",
    value: function handleOpacityChange(layerId, value) {
      var _this$props = this.props,
        canvasId = _this$props.canvasId,
        updateLayers = _this$props.updateLayers,
        windowId = _this$props.windowId;
      var payload = _defineProperty({}, layerId, {
        opacity: value / 100.0
      });
      updateLayers(windowId, canvasId, payload);
    }

    /** */
  }, {
    key: "onDragEnd",
    value: function onDragEnd(result) {
      var _this$props2 = this.props,
        canvasId = _this$props2.canvasId,
        layers = _this$props2.layers,
        updateLayers = _this$props2.updateLayers,
        windowId = _this$props2.windowId;
      if (!result.destination) return;
      if (result.destination.droppableId !== this.droppableId) return;
      if (result.source.droppableId !== this.droppableId) return;
      var sortedLayers = reorder(layers.map(function (l) {
        return l.id;
      }), result.source.index, result.destination.index);
      var payload = layers.reduce(function (acc, layer) {
        acc[layer.id] = {
          index: sortedLayers.indexOf(layer.id)
        };
        return acc;
      }, {});
      updateLayers(windowId, canvasId, payload);
    }

    /** */
  }, {
    key: "setLayerVisibility",
    value: function setLayerVisibility(layerId, value) {
      var _this$props3 = this.props,
        canvasId = _this$props3.canvasId,
        updateLayers = _this$props3.updateLayers,
        windowId = _this$props3.windowId;
      var payload = _defineProperty({}, layerId, {
        visibility: value
      });
      updateLayers(windowId, canvasId, payload);
    }

    /** */
  }, {
    key: "moveToTop",
    value: function moveToTop(layerId) {
      var _this$props4 = this.props,
        canvasId = _this$props4.canvasId,
        layers = _this$props4.layers,
        updateLayers = _this$props4.updateLayers,
        windowId = _this$props4.windowId;
      var sortedLayers = reorder(layers.map(function (l) {
        return l.id;
      }), layers.findIndex(function (l) {
        return l.id === layerId;
      }), 0);
      var payload = layers.reduce(function (acc, layer) {
        acc[layer.id] = {
          index: sortedLayers.indexOf(layer.id)
        };
        return acc;
      }, {});
      updateLayers(windowId, canvasId, payload);
    }

    /** @private */
  }, {
    key: "renderLayer",
    value: function renderLayer(resource, index) {
      var _this2 = this;
      var _this$props5 = this.props,
        layerMetadata = _this$props5.layerMetadata,
        t = _this$props5.t;
      var _height$width = {
          height: undefined,
          width: 50
        },
        width = _height$width.width,
        height = _height$width.height;
      var layer = _objectSpread({
        opacity: 1,
        visibility: true
      }, (layerMetadata || {})[resource.id]);
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: {
          flex: 1
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: {
            alignItems: 'flex-start',
            display: 'flex'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_IIIFThumbnail["default"], {
            maxHeight: height,
            maxWidth: width,
            resource: resource,
            border: true
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography["default"], {
            sx: {
              paddingLeft: 1
            },
            component: "div",
            variant: "body1",
            children: [CanvasLayers.getUseableLabel(resource, index), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MiradorMenuButton["default"], {
                "aria-label": t(layer.visibility ? 'layer_hide' : 'layer_show'),
                edge: "start",
                size: "small",
                onClick: function onClick() {
                  _this2.setLayerVisibility(resource.id, !layer.visibility);
                },
                children: layer.visibility ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_VisibilitySharp["default"], {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_VisibilityOffSharp["default"], {})
              }), layer.index !== 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_MiradorMenuButton["default"], {
                "aria-label": t('layer_moveToTop'),
                size: "small",
                onClick: function onClick() {
                  _this2.moveToTop(resource.id);
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VerticalAlignTopSharp["default"], {})
              })]
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: {
            alignItems: 'center',
            display: 'flex'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip["default"], {
            title: t('layer_opacity'),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_OpacitySharp["default"], {
              sx: {
                marginRight: 0.5
              },
              color: layer.visibility ? 'inherit' : 'disabled',
              fontSize: "small"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
            sx: {
              'MuiInput-input': {
                '&::-webkit-outer-spin-button,&::-webkit-inner-spin-button': {
                  margin: 0,
                  WebkitAppearance: 'none'
                },
                MozAppearance: 'textfield',
                textAlign: 'right',
                typography: 'caption',
                width: '3ch'
              }
            },
            disabled: !layer.visibility,
            value: Math.round(layer.opacity * 100),
            type: "number",
            min: 0,
            max: 100,
            onChange: function onChange(e) {
              return _this2.handleOpacityChange(resource.id, e.target.value);
            },
            endAdornment: /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputAdornment["default"], {
              disableTypography: true,
              position: "end",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
                variant: "caption",
                children: "%"
              })
            }),
            inputProps: {
              'aria-label': t('layer_opacity')
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Slider["default"], {
            sx: {
              marginLeft: 2,
              marginRight: 2,
              maxWidth: 150
            },
            disabled: !layer.visibility,
            value: layer.opacity * 100,
            onChange: function onChange(e, value) {
              return _this2.handleOpacityChange(resource.id, value);
            }
          })]
        })]
      });
    }

    /** @private */
  }, {
    key: "renderDraggableLayer",
    value: function renderDraggableLayer(resource, index) {
      var _this3 = this;
      var t = this.props.t;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_dnd.Draggable, {
        draggableId: resource.id,
        index: index,
        children: function children(provided, snapshot) {
          return /*#__PURE__*/(0, _react.createElement)(_ListItem["default"], _objectSpread(_objectSpread({
            ref: provided.innerRef
          }, provided.draggableProps), {}, {
            component: "li",
            divider: true,
            sx: _objectSpread({
              alignItems: 'stretch',
              cursor: 'pointer',
              paddingBottom: 2,
              paddingRight: 2,
              paddingTop: 2
            }, snapshot.isDragging && {
              backgroundColor: 'action.hover'
            }),
            disableGutters: true,
            key: resource.id
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledDragHandle, _objectSpread(_objectSpread({}, provided.dragHandleProps), {}, {
            sx: {
              '&:hover': {
                backgroundColor: snapshot.isDragging ? 'action.selected' : 'action.hover'
              },
              backgroundColor: snapshot.isDragging ? 'action.selected' : 'shades.light'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip["default"], {
              title: t('layer_move'),
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DragHandleSharp["default"], {})
            })
          })), _this3.renderLayer(resource, index));
        }
      }, resource.id);
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$props6 = this.props,
        index = _this$props6.index,
        label = _this$props6.label,
        layers = _this$props6.layers,
        t = _this$props6.t,
        totalSize = _this$props6.totalSize;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [totalSize > 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
          sx: {
            paddingLeft: 1,
            paddingRight: 1,
            paddingTop: 2
          },
          variant: "overline",
          children: t('annotationCanvasLabel', {
            context: "".concat(index + 1, "/").concat(totalSize),
            label: label
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_dnd.DragDropContext, {
          onDragEnd: this.onDragEnd,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_dnd.Droppable, {
            droppableId: this.droppableId,
            children: function children(provided, snapshot) {
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_List["default"], _objectSpread(_objectSpread({
                sx: {
                  paddingTop: 0
                }
              }, provided.droppableProps), {}, {
                ref: provided.innerRef,
                children: [layers && layers.map(function (r, i) {
                  return _this4.renderDraggableLayer(r, i);
                }), provided.placeholder]
              }));
            }
          })
        })]
      });
    }
  }], [{
    key: "getUseableLabel",
    value: /** */
    function getUseableLabel(resource, index) {
      return resource && resource.getLabel && resource.getLabel().length > 0 ? resource.getLabel().getValue() : String(index + 1);
    }
  }]);
  return CanvasLayers;
}(_react.Component);
CanvasLayers.defaultProps = {
  layerMetadata: undefined
};