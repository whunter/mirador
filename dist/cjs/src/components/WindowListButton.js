"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowListButton = void 0;
var _react = require("react");
var _BookmarksSharp = _interopRequireDefault(require("@mui/icons-material/BookmarksSharp"));
var _WindowList = _interopRequireDefault(require("../containers/WindowList"));
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
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
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /**
 * WindowListButton ~
*/
var WindowListButton = exports.WindowListButton = /*#__PURE__*/function (_Component) {
  _inherits(WindowListButton, _Component);
  /** */
  function WindowListButton(props) {
    var _this;
    _classCallCheck(this, WindowListButton);
    _this = _callSuper(this, WindowListButton, [props]);
    _this.state = {
      windowListAnchor: null
    };
    _this.handleClose = _this.handleClose.bind(_assertThisInitialized(_this));
    _this.handleOpen = _this.handleOpen.bind(_assertThisInitialized(_this));
    return _this;
  }

  /** Set the windowListAnchor to null on window close */
  _createClass(WindowListButton, [{
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        windowListAnchor: null
      });
    }

    /** Set the windowListAnchor to the event's current target  */
  }, {
    key: "handleOpen",
    value: function handleOpen(event) {
      this.setState({
        windowListAnchor: event.currentTarget
      });
    }

    /**
     * Returns the rendered component
    */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        disabled = _this$props.disabled,
        t = _this$props.t,
        windowCount = _this$props.windowCount;
      var windowListAnchor = this.state.windowListAnchor;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MiradorMenuButton["default"], {
          "aria-haspopup": "true",
          "aria-label": t('listAllOpenWindows'),
          "aria-owns": windowListAnchor ? 'window-list' : null,
          selected: Boolean(windowListAnchor),
          disabled: disabled,
          badge: true,
          BadgeProps: {
            badgeContent: windowCount,
            sx: {
              '.MuiBadge-badge': {
                paddingLeft: 1.5
              }
            }
          },
          onClick: function onClick(e) {
            return _this2.handleOpen(e);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BookmarksSharp["default"], {})
        }), Boolean(windowListAnchor) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_WindowList["default"], {
          anchorEl: windowListAnchor,
          id: "window-list",
          open: Boolean(windowListAnchor),
          handleClose: this.handleClose
        })]
      });
    }
  }]);
  return WindowListButton;
}(_react.Component);
WindowListButton.defaultProps = {
  disabled: false
};