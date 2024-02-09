"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThumbnailCanvasGrouping = void 0;
var _react = require("react");
var _styles = require("@mui/material/styles");
var _classnames = _interopRequireDefault(require("classnames"));
var _IIIFThumbnail = _interopRequireDefault(require("../containers/IIIFThumbnail"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
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
var StyledCanvas = (0, _styles.styled)('div')(function (_ref) {
  var theme = _ref.theme;
  return {
    boxSizing: 'border-box',
    color: theme.palette.common.white,
    cursor: 'pointer',
    display: 'inline-block',
    whiteSpace: 'nowrap'
  };
});
/** */
var ThumbnailCanvasGrouping = exports.ThumbnailCanvasGrouping = /*#__PURE__*/function (_PureComponent) {
  _inherits(ThumbnailCanvasGrouping, _PureComponent);
  /** */
  function ThumbnailCanvasGrouping(props) {
    var _this;
    _classCallCheck(this, ThumbnailCanvasGrouping);
    _this = _callSuper(this, ThumbnailCanvasGrouping, [props]);
    _this.setCanvas = _this.setCanvas.bind(_assertThisInitialized(_this));
    return _this;
  }

  /** */
  _createClass(ThumbnailCanvasGrouping, [{
    key: "setCanvas",
    value: function setCanvas(e) {
      var setCanvas = this.props.setCanvas;
      setCanvas(e.currentTarget.dataset.canvasId);
    }

    /**
     * Determines whether the current index is the rendered canvas, providing
     * a useful class.
     */
  }, {
    key: "currentCanvasClass",
    value: function currentCanvasClass(canvasIndices) {
      var index = this.props.index;
      if (canvasIndices.includes(index)) return 'current-canvas-grouping';
      return '';
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        index = _this$props.index,
        style = _this$props.style,
        data = _this$props.data,
        currentCanvasId = _this$props.currentCanvasId;
      var canvasGroupings = data.canvasGroupings,
        position = data.position,
        height = data.height;
      var currentGroupings = canvasGroupings[index];
      var SPACING = 8;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: _objectSpread(_objectSpread({}, style), {}, {
          boxSizing: 'content-box',
          height: Number.isInteger(style.height) ? style.height - SPACING : null,
          left: Number.isInteger(style.left) ? style.left + SPACING : null,
          top: style.top + SPACING,
          width: Number.isInteger(style.width) ? style.width - SPACING : null
        }),
        className: (0, _cssNs["default"])('thumbnail-nav-container'),
        role: "gridcell",
        "aria-colindex": index + 1,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledCanvas, {
          role: "button",
          "data-canvas-id": currentGroupings[0].id,
          "data-canvas-index": currentGroupings[0].index,
          onKeyUp: this.setCanvas,
          onClick: this.setCanvas,
          tabIndex: -1,
          sx: function sx(theme) {
            return _objectSpread(_objectSpread({
              '&:hover': {
                outline: "9px solid ".concat(theme.palette.action.hover),
                outlineOffset: '-2px'
              },
              height: position === 'far-right' ? 'auto' : "".concat(height - SPACING, "px"),
              outline: currentGroupings.map(function (canvas) {
                return canvas.id;
              }).includes(currentCanvasId) ? "2px solid ".concat(theme.palette.primary.main) : 0
            }, currentGroupings.map(function (canvas) {
              return canvas.id;
            }).includes(currentCanvasId) && {
              outlineOffset: '3px'
            }), {}, {
              width: position === 'far-bottom' ? 'auto' : "".concat(style.width, "px")
            });
          },
          className: (0, _classnames["default"])((0, _cssNs["default"])(['thumbnail-nav-canvas', "thumbnail-nav-canvas-".concat(index), this.currentCanvasClass(currentGroupings.map(function (canvas) {
            return canvas.index;
          }))])),
          children: currentGroupings.map(function (canvas, i) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_IIIFThumbnail["default"], {
              resource: canvas,
              labelled: true,
              maxHeight: position === 'far-right' ? style.height - 1.5 * SPACING : height - 1.5 * SPACING,
              variant: "inside"
            }, canvas.id);
          })
        })
      });
    }
  }]);
  return ThumbnailCanvasGrouping;
}(_react.PureComponent);