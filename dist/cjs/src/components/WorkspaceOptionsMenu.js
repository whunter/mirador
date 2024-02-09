"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceOptionsMenu = void 0;
var _react = require("react");
var _Input = _interopRequireDefault(require("@mui/icons-material/Input"));
var _SaveAltSharp = _interopRequireDefault(require("@mui/icons-material/SaveAltSharp"));
var _ListItemIcon = _interopRequireDefault(require("@mui/material/ListItemIcon"));
var _Menu = _interopRequireDefault(require("@mui/material/Menu"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _WorkspaceExport = _interopRequireDefault(require("../containers/WorkspaceExport"));
var _WorkspaceImport = _interopRequireDefault(require("../containers/WorkspaceImport"));
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
 * WorkspaceOptionsMenu ~ the menu for workspace options such as import/export
*/
var WorkspaceOptionsMenu = exports.WorkspaceOptionsMenu = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceOptionsMenu, _Component);
  /**
   * constructor -
   */
  function WorkspaceOptionsMenu(props) {
    var _this;
    _classCallCheck(this, WorkspaceOptionsMenu);
    _this = _callSuper(this, WorkspaceOptionsMenu, [props]);
    _this.state = {
      exportWorkspace: {},
      importWorkspace: {}
    };
    _this.handleMenuItemClick = _this.handleMenuItemClick.bind(_assertThisInitialized(_this));
    _this.handleMenuItemClose = _this.handleMenuItemClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * @private
   */
  _createClass(WorkspaceOptionsMenu, [{
    key: "handleMenuItemClick",
    value: function handleMenuItemClick(item) {
      var obj = {};
      obj[item] = {};
      obj[item].open = true;
      this.setState(obj);
    }

    /**
     * @private
     */
  }, {
    key: "handleMenuItemClose",
    value: function handleMenuItemClose(item) {
      var _this2 = this;
      return function (event) {
        var obj = {};
        obj[item] = {};
        obj[item].open = false;
        _this2.setState(obj);
      };
    }

    /**
     * Returns the rendered component
    */
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props = this.props,
        anchorEl = _this$props.anchorEl,
        container = _this$props.container,
        handleClose = _this$props.handleClose,
        t = _this$props.t,
        open = _this$props.open;
      var _this$state = this.state,
        exportWorkspace = _this$state.exportWorkspace,
        importWorkspace = _this$state.importWorkspace;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Menu["default"], {
          id: "workspace-options-menu",
          container: container === null || container === void 0 ? void 0 : container.current,
          anchorEl: anchorEl,
          anchorOrigin: {
            horizontal: 'right',
            vertical: 'top'
          },
          transformOrigin: {
            horizontal: 'left',
            vertical: 'top'
          },
          open: open,
          onClose: handleClose,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuItem["default"], {
            "aria-haspopup": "true",
            onClick: function onClick() {
              _this3.handleMenuItemClick('exportWorkspace');
              handleClose();
            },
            "aria-owns": exportWorkspace.open ? 'workspace-export' : undefined,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItemIcon["default"], {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SaveAltSharp["default"], {})
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
              variant: "body1",
              children: t('downloadExportWorkspace')
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuItem["default"], {
            "aria-haspopup": "true",
            id: "workspace-menu-import",
            onClick: function onClick() {
              _this3.handleMenuItemClick('importWorkspace');
              handleClose();
            },
            "aria-owns": exportWorkspace.open ? 'workspace-import' : undefined,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItemIcon["default"], {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {})
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
              variant: "body1",
              children: t('importWorkspace')
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PluginHook.PluginHook, _objectSpread({}, this.props))]
        }), Boolean(exportWorkspace.open) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_WorkspaceExport["default"], {
          open: Boolean(exportWorkspace.open),
          container: container === null || container === void 0 ? void 0 : container.current,
          handleClose: this.handleMenuItemClose('exportWorkspace')
        }), Boolean(importWorkspace.open) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_WorkspaceImport["default"], {
          open: Boolean(importWorkspace.open),
          container: container === null || container === void 0 ? void 0 : container.current,
          handleClose: this.handleMenuItemClose('importWorkspace')
        })]
      });
    }
  }]);
  return WorkspaceOptionsMenu;
}(_react.Component);
WorkspaceOptionsMenu.defaultProps = {
  anchorEl: null,
  container: null,
  open: false
};