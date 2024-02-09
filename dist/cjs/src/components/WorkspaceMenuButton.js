"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceMenuButton = void 0;
var _react = require("react");
var _SettingsSharp = _interopRequireDefault(require("@mui/icons-material/SettingsSharp"));
var _WorkspaceMenu = _interopRequireDefault(require("../containers/WorkspaceMenu"));
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
 */
var WorkspaceMenuButton = exports.WorkspaceMenuButton = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceMenuButton, _Component);
  /**
   * constructor -
   */
  function WorkspaceMenuButton(props) {
    var _this;
    _classCallCheck(this, WorkspaceMenuButton);
    _this = _callSuper(this, WorkspaceMenuButton, [props]);
    _this.state = {
      anchorEl: null,
      open: false
    };
    _this.handleMenuClick = _this.handleMenuClick.bind(_assertThisInitialized(_this));
    _this.handleMenuClose = _this.handleMenuClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * @private
   */
  _createClass(WorkspaceMenuButton, [{
    key: "handleMenuClick",
    value: function handleMenuClick(event) {
      this.setState({
        anchorEl: event.currentTarget,
        open: true
      });
    }

    /**
     * @private
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
     * render
     * @return
     */
  }, {
    key: "render",
    value: function render() {
      var t = this.props.t;
      var _this$state = this.state,
        anchorEl = _this$state.anchorEl,
        open = _this$state.open;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MiradorMenuButton["default"], {
          "aria-haspopup": "true",
          "aria-label": t('workspaceMenu'),
          "aria-owns": open ? 'workspace-menu' : undefined,
          selected: open,
          id: "menuBtn",
          onClick: this.handleMenuClick,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SettingsSharp["default"], {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_WorkspaceMenu["default"], {
          anchorEl: anchorEl,
          id: "workspace-menu",
          handleClose: this.handleMenuClose,
          open: open
        })]
      });
    }
  }]);
  return WorkspaceMenuButton;
}(_react.Component);
WorkspaceMenuButton.defaultProps = {
  t: function t(key) {
    return key;
  }
};