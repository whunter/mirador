"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowCanvasNavigationControls = void 0;
var _react = require("react");
var _styles = require("@mui/material/styles");
var _classnames = _interopRequireDefault(require("classnames"));
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _Divider = _interopRequireDefault(require("@mui/material/Divider"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _utils = require("@mui/utils");
var _ZoomControls = _interopRequireDefault(require("../containers/ZoomControls"));
var _ViewerInfo = _interopRequireDefault(require("../containers/ViewerInfo"));
var _ViewerNavigation = _interopRequireDefault(require("../containers/ViewerNavigation"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
var _PluginHook = require("./PluginHook");
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
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Root = (0, _styles.styled)(_Paper["default"], {
  name: 'WindowCanvasNavigationControls',
  slot: 'root'
})(function (_ref) {
  var theme = _ref.theme;
  return {
    alignItems: 'center',
    backgroundColor: (0, _styles.alpha)(theme.palette.background.paper, 0.5),
    bottom: 0,
    cursor: 'default',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    zIndex: 50
  };
});

/**
 * Represents the viewer controls in the mirador workspace.
 */
var WindowCanvasNavigationControls = exports.WindowCanvasNavigationControls = /*#__PURE__*/function (_Component) {
  _inherits(WindowCanvasNavigationControls, _Component);
  function WindowCanvasNavigationControls() {
    _classCallCheck(this, WindowCanvasNavigationControls);
    return _callSuper(this, WindowCanvasNavigationControls, arguments);
  }
  _createClass(WindowCanvasNavigationControls, [{
    key: "canvasNavControlsAreStacked",
    value:
    /**
     * Determine if canvasNavControls are stacked (based on a hard-coded width)
    */
    function canvasNavControlsAreStacked() {
      var size = this.props.size;
      return size && size.width && size.width <= 253;
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        showZoomControls = _this$props.showZoomControls,
        visible = _this$props.visible,
        windowId = _this$props.windowId,
        zoomToWorld = _this$props.zoomToWorld;
      if (!visible) return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
        style: _utils.visuallyHidden,
        component: "div",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ViewerInfo["default"], {
          windowId: windowId
        })
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, {
        square: true,
        className: (0, _classnames["default"])((0, _cssNs["default"])('canvas-nav'), this.canvasNavControlsAreStacked() ? (0, _cssNs["default"])('canvas-nav-stacked') : null),
        elevation: 0,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Stack["default"], {
          direction: this.canvasNavControlsAreStacked() ? 'column' : 'row',
          divider: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider["default"], {
            orientation: this.canvasNavControlsAreStacked() ? 'horizontal' : 'vertical',
            variant: "middle",
            flexItem: true
          }),
          spacing: 0,
          children: [showZoomControls && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ZoomControls["default"], {
            windowId: windowId,
            zoomToWorld: zoomToWorld
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ViewerNavigation["default"], {
            windowId: windowId
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ViewerInfo["default"], {
          windowId: windowId
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PluginHook.PluginHook, _objectSpread({}, this.props))]
      });
    }
  }]);
  return WindowCanvasNavigationControls;
}(_react.Component);
WindowCanvasNavigationControls.defaultProps = {
  showZoomControls: false,
  visible: true
};