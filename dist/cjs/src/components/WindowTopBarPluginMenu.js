"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowTopBarPluginMenu = void 0;
var _react = require("react");
var _MoreVertSharp = _interopRequireDefault(require("@mui/icons-material/MoreVertSharp"));
var _Menu = _interopRequireDefault(require("@mui/material/Menu"));
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
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
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /**
 *
 */
var WindowTopBarPluginMenu = exports.WindowTopBarPluginMenu = /*#__PURE__*/function (_Component) {
  _inherits(WindowTopBarPluginMenu, _Component);
  /**
   * constructor -
   */
  function WindowTopBarPluginMenu(props) {
    var _this;
    _classCallCheck(this, WindowTopBarPluginMenu);
    _this = _callSuper(this, WindowTopBarPluginMenu, [props]);
    _this.state = {
      anchorEl: null,
      open: false
    };
    _this.handleMenuClick = _this.handleMenuClick.bind(_assertThisInitialized(_this));
    _this.handleMenuClose = _this.handleMenuClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * Set the anchorEl state to the click target
   */
  _createClass(WindowTopBarPluginMenu, [{
    key: "handleMenuClick",
    value: function handleMenuClick(event) {
      this.setState({
        anchorEl: event.currentTarget,
        open: true
      });
    }

    /**
     * Set the anchorEl state to null (closing the menu)
     */
  }, {
    key: "handleMenuClose",
    value: function handleMenuClose() {
      this.setState({
        anchorEl: null,
        open: false
      });
    }

    /**
     * render component
     */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        container = _this$props.container,
        PluginComponents = _this$props.PluginComponents,
        t = _this$props.t,
        windowId = _this$props.windowId,
        menuIcon = _this$props.menuIcon;
      var _this$state = this.state,
        anchorEl = _this$state.anchorEl,
        open = _this$state.open;
      var windowPluginMenuId = "window-plugin-menu_".concat(windowId);
      if (!PluginComponents || PluginComponents.length === 0) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MiradorMenuButton["default"], {
          "aria-haspopup": "true",
          "aria-label": t('windowPluginMenu'),
          "aria-owns": open ? windowPluginMenuId : undefined,
          selected: open,
          onClick: this.handleMenuClick,
          children: menuIcon
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Menu["default"], {
          id: windowPluginMenuId,
          container: container === null || container === void 0 ? void 0 : container.current,
          anchorEl: anchorEl,
          anchorOrigin: {
            horizontal: 'right',
            vertical: 'bottom'
          },
          transformOrigin: {
            horizontal: 'right',
            vertical: 'top'
          },
          open: open,
          onClose: function onClose() {
            return _this2.handleMenuClose();
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PluginHook.PluginHook, _objectSpread({
            handleClose: function handleClose() {
              return _this2.handleMenuClose();
            }
          }, this.props))
        })]
      });
    }
  }]);
  return WindowTopBarPluginMenu;
}(_react.Component);
WindowTopBarPluginMenu.defaultProps = {
  anchorEl: null,
  container: null,
  menuIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MoreVertSharp["default"], {}),
  open: false,
  PluginComponents: []
};