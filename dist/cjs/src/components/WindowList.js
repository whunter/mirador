"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowList = void 0;
var _react = require("react");
var _Menu = _interopRequireDefault(require("@mui/material/Menu"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _ListItemText = _interopRequireDefault(require("@mui/material/ListItemText"));
var _ListSubheader = _interopRequireDefault(require("@mui/material/ListSubheader"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["container", "handleClose", "windowIds", "focusWindow", "focusedWindowId", "t"];
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
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
/**
 */
var WindowList = exports.WindowList = /*#__PURE__*/function (_Component) {
  _inherits(WindowList, _Component);
  function WindowList() {
    _classCallCheck(this, WindowList);
    return _callSuper(this, WindowList, arguments);
  }
  _createClass(WindowList, [{
    key: "titleContent",
    value:
    /**
     * Get the title for a window from its manifest title
     * @private
     */
    function titleContent(windowId) {
      var _this$props = this.props,
        titles = _this$props.titles,
        t = _this$props.t;
      return titles[windowId] || t('untitled');
    }

    /**
     * render
     * @return
     */
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props2 = this.props,
        container = _this$props2.container,
        handleClose = _this$props2.handleClose,
        windowIds = _this$props2.windowIds,
        focusWindow = _this$props2.focusWindow,
        focusedWindowId = _this$props2.focusedWindowId,
        t = _this$props2.t,
        menuProps = _objectWithoutProperties(_this$props2, _excluded);
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Menu["default"], _objectSpread(_objectSpread({
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'top'
        },
        transformOrigin: {
          horizontal: 'left',
          vertical: 'top'
        },
        id: "window-list-menu",
        container: container === null || container === void 0 ? void 0 : container.current,
        onClose: handleClose
      }, menuProps), {}, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ListSubheader["default"], {
          role: "presentation",
          selected: false,
          disabled: true,
          tabIndex: "-1",
          children: t('openWindows')
        }), windowIds.map(function (windowId, i) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem["default"], {
            selected: windowId === focusedWindowId,
            onClick: function onClick(e) {
              focusWindow(windowId, true);
              handleClose(e);
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItemText["default"], {
              primaryTypographyProps: {
                variant: 'body1'
              },
              children: _this.titleContent(windowId)
            })
          }, windowId);
        })]
      }));
    }
  }]);
  return WindowList;
}(_react.Component);
WindowList.defaultProps = {
  container: null,
  focusedWindowId: null,
  t: function t(key) {
    return key;
  },
  titles: {}
};