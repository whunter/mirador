"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowAuthenticationBar = void 0;
var _react = require("react");
var _styles = require("@mui/material/styles");
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _Collapse = _interopRequireDefault(require("@mui/material/Collapse"));
var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _LockSharp = _interopRequireDefault(require("@mui/icons-material/LockSharp"));
var _SanitizedHtml = _interopRequireDefault(require("../containers/SanitizedHtml"));
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
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var StyledTopBar = (0, _styles.styled)('div')(function (_ref) {
  var theme = _ref.theme;
  return {
    '&:hover': {
      backgroundColor: theme.palette.secondary.main
    },
    alignItems: 'center',
    display: 'flex'
  };
});
var StyledFauxButton = (0, _styles.styled)('span')(function (_ref2) {
  var theme = _ref2.theme;
  return {
    marginLeft: theme.spacing(2.5)
  };
});
/** */
var WindowAuthenticationBar = exports.WindowAuthenticationBar = /*#__PURE__*/function (_Component) {
  _inherits(WindowAuthenticationBar, _Component);
  /** */
  function WindowAuthenticationBar(props) {
    var _this;
    _classCallCheck(this, WindowAuthenticationBar);
    _this = _callSuper(this, WindowAuthenticationBar, [props]);
    _this.state = {
      open: false
    };
    _this.setOpen = _this.setOpen.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  /** */
  _createClass(WindowAuthenticationBar, [{
    key: "onSubmit",
    value: function onSubmit() {
      var onConfirm = this.props.onConfirm;
      this.setOpen(false);
      onConfirm();
    }

    /** Toggle the full description */
  }, {
    key: "setOpen",
    value: function setOpen(open) {
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          open: open
        });
      });
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        confirmButton = _this$props.confirmButton,
        continueLabel = _this$props.continueLabel,
        header = _this$props.header,
        description = _this$props.description,
        icon = _this$props.icon,
        label = _this$props.label,
        t = _this$props.t,
        ruleSet = _this$props.ruleSet,
        hasLogoutService = _this$props.hasLogoutService,
        status = _this$props.status,
        ConfirmProps = _this$props.ConfirmProps;
      if (status === 'ok' && !hasLogoutService) return null;
      var open = this.state.open;
      var button = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], _objectSpread(_objectSpread({
        onClick: this.onSubmit,
        color: "secondary",
        sx: function sx(theme) {
          return {
            '&:hover': {
              backgroundColor: (0, _styles.alpha)(theme.palette.secondary.contrastText, 1 - theme.palette.action.hoverOpacity)
            },
            backgroundColor: theme.palette.secondary.contrastText
          };
        }
      }, ConfirmProps), {}, {
        children: confirmButton || t('login')
      }));
      if (!description && !header) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Paper["default"], {
          square: true,
          elevation: 4,
          color: "secondary",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(StyledTopBar, {
            children: [icon || /*#__PURE__*/(0, _jsxRuntime.jsx)(_LockSharp["default"], {
              sx: {
                marginInlineEnd: 1.5
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
              component: "h3",
              variant: "body1",
              color: "inherit",
              children: ruleSet ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_SanitizedHtml["default"], {
                htmlString: label,
                ruleSet: ruleSet
              }) : label
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PluginHook.PluginHook, _objectSpread({}, this.props)), button]
          })
        });
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Paper["default"], {
        square: true,
        elevation: 4,
        color: "secondary",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Button["default"], {
          fullWidth: true,
          onClick: function onClick() {
            return _this2.setOpen(true);
          },
          component: "div",
          color: "inherit",
          sx: function sx(theme) {
            return {
              '&:hover': {
                backgroundColor: theme.palette.secondary.main
              },
              backgroundColor: theme.palette.secondary.main,
              borderRadius: 0,
              color: theme.palette.secondary.contrastText,
              justifyContent: 'start',
              textTransform: 'none'
            };
          },
          children: [icon || /*#__PURE__*/(0, _jsxRuntime.jsx)(_LockSharp["default"], {
            sx: {
              marginInlineEnd: 1.5
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
            sx: {
              paddingBlockEnd: 1,
              paddingBlockStart: 1
            },
            component: "h3",
            variant: "body1",
            color: "inherit",
            children: ruleSet ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_SanitizedHtml["default"], {
              htmlString: label,
              ruleSet: ruleSet
            }) : label
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PluginHook.PluginHook, _objectSpread({}, this.props)), /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledFauxButton, {
            children: !open && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
              variant: "button",
              color: "inherit",
              children: continueLabel || t('continue')
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Collapse["default"], {
          sx: function sx(theme) {
            return {
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
              paddingInlineEnd: theme.spacing(1),
              paddingInlineStart: theme.spacing(1)
            };
          },
          "in": open,
          onClose: function onClose() {
            return _this2.setOpen(false);
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography["default"], {
            variant: "body1",
            color: "inherit",
            children: [ruleSet ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_SanitizedHtml["default"], {
              htmlString: header,
              ruleSet: ruleSet
            }) : header, header && description ? ': ' : '', ruleSet ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_SanitizedHtml["default"], {
              htmlString: description,
              ruleSet: ruleSet
            }) : description]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_DialogActions["default"], {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
              onClick: function onClick() {
                return _this2.setOpen(false);
              },
              color: "inherit",
              children: t('cancel')
            }), button]
          })]
        })]
      });
    }
  }]);
  return WindowAuthenticationBar;
}(_react.Component);
WindowAuthenticationBar.defaultProps = {
  confirmButton: undefined,
  ConfirmProps: {},
  continueLabel: undefined,
  description: undefined,
  hasLogoutService: true,
  header: undefined,
  icon: undefined,
  ruleSet: 'iiif',
  status: undefined,
  t: function t(k) {
    return k;
  }
};