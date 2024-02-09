"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GalleryView = void 0;
var _react = require("react");
var _styles = require("@mui/material/styles");
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _GalleryViewThumbnail = _interopRequireDefault(require("../containers/GalleryViewThumbnail"));
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
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Root = (0, _styles.styled)(_Paper["default"], {
  name: 'GalleryView',
  slot: 'root'
})(function (_ref) {
  var theme = _ref.theme;
  return {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflowX: 'hidden',
    overflowY: 'scroll',
    padding: '50px 0 50px 20px',
    width: '100%'
  };
});

/**
 * Renders a GalleryView overview of the manifest.
 */
var GalleryView = exports.GalleryView = /*#__PURE__*/function (_Component) {
  _inherits(GalleryView, _Component);
  function GalleryView() {
    _classCallCheck(this, GalleryView);
    return _callSuper(this, GalleryView, arguments);
  }
  _createClass(GalleryView, [{
    key: "render",
    value:
    /**
     * Renders things
     */
    function render() {
      var _this$props = this.props,
        canvases = _this$props.canvases,
        viewingDirection = _this$props.viewingDirection,
        windowId = _this$props.windowId;
      var htmlDir = viewingDirection === 'right-to-left' ? 'rtl' : 'ltr';
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, {
        component: "section",
        "aria-label": "gallery section",
        dir: htmlDir,
        square: true,
        elevation: 0,
        id: "".concat(windowId, "-gallery"),
        children: canvases.map(function (canvas) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_GalleryViewThumbnail["default"], {
            windowId: windowId,
            canvas: canvas
          }, canvas.id);
        })
      });
    }
  }]);
  return GalleryView;
}(_react.Component);
GalleryView.defaultProps = {
  viewingDirection: ''
};