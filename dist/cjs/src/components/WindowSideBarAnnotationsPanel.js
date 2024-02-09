"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowSideBarAnnotationsPanel = void 0;
var _react = require("react");
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _AnnotationSettings = _interopRequireDefault(require("../containers/AnnotationSettings"));
var _CanvasAnnotations = _interopRequireDefault(require("../containers/CanvasAnnotations"));
var _CompanionWindow = _interopRequireDefault(require("../containers/CompanionWindow"));
var _CompanionWindowSection = require("./CompanionWindowSection");
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /**
 * WindowSideBarAnnotationsPanel ~
*/
var WindowSideBarAnnotationsPanel = exports.WindowSideBarAnnotationsPanel = /*#__PURE__*/function (_Component) {
  _inherits(WindowSideBarAnnotationsPanel, _Component);
  /** */
  function WindowSideBarAnnotationsPanel(props) {
    var _this;
    _classCallCheck(this, WindowSideBarAnnotationsPanel);
    _this = _callSuper(this, WindowSideBarAnnotationsPanel, [props]);
    _this.containerRef = /*#__PURE__*/(0, _react.createRef)();
    return _this;
  }

  /**
   * Returns the rendered component
  */
  _createClass(WindowSideBarAnnotationsPanel, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        annotationCount = _this$props.annotationCount,
        canvasIds = _this$props.canvasIds,
        t = _this$props.t,
        windowId = _this$props.windowId,
        id = _this$props.id;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_CompanionWindow["default"], {
        title: t('annotations'),
        paperClassName: (0, _cssNs["default"])('window-sidebar-annotation-panel'),
        windowId: windowId,
        id: id,
        ref: this.containerRef,
        titleControls: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AnnotationSettings["default"], {
          windowId: windowId
        }),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CompanionWindowSection.CompanionWindowSection, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
            component: "p",
            variant: "subtitle2",
            children: t('showingNumAnnotations', {
              count: annotationCount,
              number: annotationCount
            })
          })
        }), canvasIds.map(function (canvasId, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CanvasAnnotations["default"], {
            canvasId: canvasId,
            containerRef: _this2.containerRef,
            index: index,
            totalSize: canvasIds.length,
            windowId: windowId
          }, canvasId);
        })]
      });
    }
  }]);
  return WindowSideBarAnnotationsPanel;
}(_react.Component);
WindowSideBarAnnotationsPanel.defaultProps = {
  canvasIds: [],
  t: function t(key) {
    return key;
  }
};