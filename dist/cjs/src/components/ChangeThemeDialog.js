"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangeThemeDialog = void 0;
var _react = require("react");
var _material = require("@mui/material");
var _PaletteSharp = _interopRequireDefault(require("@mui/icons-material/PaletteSharp"));
var _styles = require("@mui/material/styles");
var _WorkspaceDialog = require("./WorkspaceDialog");
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
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var ThemeIcon = (0, _styles.styled)(_PaletteSharp["default"], {
  name: 'ThemeIcon',
  slot: 'icon'
})(function (_ref) {
  var theme = _ref.theme;
  return {
    color: '#BDBDBD'
  };
});

/**
 * a simple dialog providing the possibility to switch the theme
 */
var ChangeThemeDialog = exports.ChangeThemeDialog = /*#__PURE__*/function (_Component) {
  _inherits(ChangeThemeDialog, _Component);
  /**
  */
  function ChangeThemeDialog(props) {
    var _this;
    _classCallCheck(this, ChangeThemeDialog);
    _this = _callSuper(this, ChangeThemeDialog, [props]);
    _this.handleThemeChange = _this.handleThemeChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * Propagate theme palette type selection into the global state
   */
  _createClass(ChangeThemeDialog, [{
    key: "handleThemeChange",
    value: function handleThemeChange(theme) {
      var _this$props = this.props,
        setSelectedTheme = _this$props.setSelectedTheme,
        handleClose = _this$props.handleClose;
      setSelectedTheme(theme);
      handleClose();
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        handleClose = _this$props2.handleClose,
        open = _this$props2.open,
        selectedTheme = _this$props2.selectedTheme,
        t = _this$props2.t,
        themeIds = _this$props2.themeIds;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_WorkspaceDialog.WorkspaceDialog, {
        onClose: handleClose,
        open: open,
        variant: "menu",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.DialogTitle, {
          children: t('changeTheme')
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.DialogContent, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuList, {
            autoFocusItem: true,
            children: themeIds.map(function (value) {
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.MenuItem, {
                className: "listitem",
                onClick: function onClick() {
                  return _this2.handleThemeChange(value);
                },
                selected: value === selectedTheme,
                value: value,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemIcon, {
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ThemeIcon, {
                    ownerState: {
                      value: value
                    }
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemText, {
                  children: t(value)
                })]
              }, value);
            })
          })
        })]
      });
    }
  }]);
  return ChangeThemeDialog;
}(_react.Component);
ChangeThemeDialog.defaultProps = {
  open: false,
  themeIds: []
};