"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarIndexList = void 0;
var _react = require("react");
var _MenuList = _interopRequireDefault(require("@mui/material/MenuList"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _styles = require("@mui/material/styles");
var _ScrollTo = require("./ScrollTo");
var _MiradorCanvas = _interopRequireDefault(require("../lib/MiradorCanvas"));
var _SidebarIndexItem = _interopRequireDefault(require("../containers/SidebarIndexItem"));
var _SidebarIndexThumbnail = _interopRequireDefault(require("../containers/SidebarIndexThumbnail"));
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
var StyledItem = (0, _styles.styled)(_MenuItem["default"], {
  name: 'SidebarIndexList',
  slot: 'item'
})(function (_ref) {
  var theme = _ref.theme;
  return {
    alignItems: 'flex-start',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    position: 'initial',
    whiteSpace: 'normal'
  };
});

/** */
var SidebarIndexList = exports.SidebarIndexList = /*#__PURE__*/function (_Component) {
  _inherits(SidebarIndexList, _Component);
  function SidebarIndexList() {
    _classCallCheck(this, SidebarIndexList);
    return _callSuper(this, SidebarIndexList, arguments);
  }
  _createClass(SidebarIndexList, [{
    key: "getIdAndLabelOfCanvases",
    value: /** @private */
    function getIdAndLabelOfCanvases() {
      var canvases = this.props.canvases;
      return canvases.map(function (canvas, index) {
        return {
          id: canvas.id,
          label: new _MiradorCanvas["default"](canvas).getLabel()
        };
      });
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        canvases = _this$props.canvases,
        containerRef = _this$props.containerRef,
        selectedCanvasIds = _this$props.selectedCanvasIds,
        setCanvas = _this$props.setCanvas,
        variant = _this$props.variant,
        windowId = _this$props.windowId;
      var canvasesIdAndLabel = this.getIdAndLabelOfCanvases(canvases);
      var Item;
      switch (variant) {
        case 'thumbnail':
          Item = _SidebarIndexThumbnail["default"];
          break;
        default:
          Item = _SidebarIndexItem["default"];
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuList["default"], {
        variant: "selectedMenu",
        children: canvasesIdAndLabel.map(function (canvas, canvasIndex) {
          var onClick = function onClick() {
            setCanvas(windowId, canvas.id);
          }; // eslint-disable-line require-jsdoc, max-len

          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ScrollTo.ScrollTo, {
            containerRef: containerRef,
            offsetTop: 96 // offset for the height of the form above
            ,
            selected: selectedCanvasIds.includes(canvas.id),
            scrollTo: selectedCanvasIds.includes(canvas.id),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledItem, {
              divider: true,
              onClick: onClick,
              component: "li",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Item, {
                label: canvas.label,
                canvas: canvases[canvasIndex]
              })
            }, canvas.id)
          }, "".concat(canvas.id, "-").concat(variant));
        })
      });
    }
  }]);
  return SidebarIndexList;
}(_react.Component);
SidebarIndexList.defaultProps = {
  selectedCanvasIds: [],
  variant: 'item'
};