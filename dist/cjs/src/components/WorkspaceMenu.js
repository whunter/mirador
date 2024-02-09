"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceMenu = void 0;
var _react = require("react");
var _Menu = _interopRequireDefault(require("@mui/material/Menu"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _LanguageSettings = _interopRequireDefault(require("../containers/LanguageSettings"));
var _NestedMenu = require("./NestedMenu");
var _WorkspaceSelectionDialog = _interopRequireDefault(require("../containers/WorkspaceSelectionDialog"));
var _ChangeThemeDialog = _interopRequireDefault(require("../containers/ChangeThemeDialog"));
var _PluginHook = require("./PluginHook");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["container", "handleClose", "showThemePicker", "isWorkspaceAddVisible", "t", "showZoomControls", "toggleZoomControls"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
var WorkspaceMenu = exports.WorkspaceMenu = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceMenu, _Component);
  /**
   * constructor -
   */
  function WorkspaceMenu(props) {
    var _this;
    _classCallCheck(this, WorkspaceMenu);
    _this = _callSuper(this, WorkspaceMenu, [props]);
    _this.state = {
      changeTheme: {},
      toggleZoom: {},
      workspaceSelection: {}
    };
    _this.handleMenuItemClick = _this.handleMenuItemClick.bind(_assertThisInitialized(_this));
    _this.handleMenuItemClose = _this.handleMenuItemClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * @private
   */
  _createClass(WorkspaceMenu, [{
    key: "handleMenuItemClick",
    value: function handleMenuItemClick(item, event) {
      var obj = {};
      obj[item] = {};
      obj[item].open = true;
      obj[item].anchorEl = event.currentTarget;
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
        obj[item].anchorEl = null;
        _this2.setState(obj);
      };
    }

    /**
     * @private
     */
  }, {
    key: "handleZoomToggleClick",
    value: function handleZoomToggleClick() {
      var _this$props = this.props,
        toggleZoomControls = _this$props.toggleZoomControls,
        showZoomControls = _this$props.showZoomControls;
      toggleZoomControls(!showZoomControls);
    }

    /**
     * render
     * @return
     */
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props2 = this.props,
        container = _this$props2.container,
        handleClose = _this$props2.handleClose,
        showThemePicker = _this$props2.showThemePicker,
        isWorkspaceAddVisible = _this$props2.isWorkspaceAddVisible,
        t = _this$props2.t,
        showZoomControls = _this$props2.showZoomControls,
        toggleZoomControls = _this$props2.toggleZoomControls,
        rest = _objectWithoutProperties(_this$props2, _excluded);
      var menuProps = _objectSpread({}, rest);
      delete menuProps.tReady;
      var _this$state = this.state,
        changeTheme = _this$state.changeTheme,
        toggleZoom = _this$state.toggleZoom,
        workspaceSelection = _this$state.workspaceSelection;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Menu["default"], _objectSpread(_objectSpread({
          container: container === null || container === void 0 ? void 0 : container.current,
          anchorOrigin: {
            horizontal: 'right',
            vertical: 'top'
          },
          transformOrigin: {
            horizontal: 'left',
            vertical: 'top'
          },
          onClose: handleClose
        }, menuProps), {}, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem["default"], {
            "aria-haspopup": "true",
            disabled: isWorkspaceAddVisible,
            onClick: function onClick(e) {
              _this3.handleZoomToggleClick(e);
              handleClose(e);
            },
            "aria-owns": toggleZoom.anchorEl ? 'toggle-zoom-menu' : undefined,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
              variant: "body1",
              children: showZoomControls ? t('hideZoomControls') : t('showZoomControls')
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem["default"], {
            "aria-haspopup": "true",
            onClick: function onClick(e) {
              _this3.handleMenuItemClick('workspaceSelection', e);
              handleClose(e);
            },
            "aria-owns": workspaceSelection.anchorEl ? 'workspace-selection' : undefined,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
              variant: "body1",
              children: t('selectWorkspaceMenu')
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_NestedMenu.NestedMenu, {
            label: t('language'),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LanguageSettings["default"], {
              afterSelect: handleClose
            })
          }), showThemePicker && /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem["default"], {
            "aria-haspopup": "true",
            onClick: function onClick(e) {
              _this3.handleMenuItemClick('changeTheme', e);
              handleClose(e);
            },
            "aria-owns": changeTheme.anchorEl ? 'change-theme' : undefined,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
              variant: "body1",
              children: t('changeTheme')
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PluginHook.PluginHook, _objectSpread({}, this.props))]
        })), Boolean(changeTheme.open) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ChangeThemeDialog["default"], {
          container: container === null || container === void 0 ? void 0 : container.current,
          handleClose: this.handleMenuItemClose('changeTheme'),
          open: Boolean(changeTheme.open)
        }), Boolean(workspaceSelection.open) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_WorkspaceSelectionDialog["default"], {
          open: Boolean(workspaceSelection.open),
          container: container === null || container === void 0 ? void 0 : container.current,
          handleClose: this.handleMenuItemClose('workspaceSelection')
        })]
      });
    }
  }]);
  return WorkspaceMenu;
}(_react.Component);
WorkspaceMenu.defaultProps = {
  container: null,
  isWorkspaceAddVisible: false,
  showThemePicker: false,
  showZoomControls: false,
  t: function t(key) {
    return key;
  },
  toggleZoomControls: function toggleZoomControls() {}
};