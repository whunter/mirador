"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Window = void 0;
var _react = require("react");
var _styles = require("@mui/material/styles");
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _contextTypes = require("react-mosaic-component/lib/contextTypes");
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
var _WindowTopBar = _interopRequireDefault(require("../containers/WindowTopBar"));
var _PrimaryWindow = _interopRequireDefault(require("../containers/PrimaryWindow"));
var _CompanionArea = _interopRequireDefault(require("../containers/CompanionArea"));
var _MinimalWindow = _interopRequireDefault(require("../containers/MinimalWindow"));
var _ErrorContent = _interopRequireDefault(require("../containers/ErrorContent"));
var _IIIFAuthentication = _interopRequireDefault(require("../containers/IIIFAuthentication"));
var _PluginHook = require("./PluginHook");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var rowMixin = {
  display: 'flex',
  flex: '1',
  flexDirection: 'row',
  minHeight: 0
};
var columnMixin = {
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
  minHeight: 0
};
var Root = (0, _styles.styled)(_Paper["default"], {
  name: 'Window',
  slot: 'root'
})(function (_ref) {
  var _theme$palette$shades;
  var ownerState = _ref.ownerState,
    theme = _ref.theme;
  return _objectSpread(_objectSpread({}, columnMixin), {}, {
    backgroundColor: (_theme$palette$shades = theme.palette.shades) === null || _theme$palette$shades === void 0 ? void 0 : _theme$palette$shades.dark,
    borderRadius: 0,
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  }, (ownerState === null || ownerState === void 0 ? void 0 : ownerState.maximized) && {
    left: 0,
    position: 'absolute',
    top: 0,
    zIndex: theme.zIndex.modal - 1
  });
});
var ContentRow = (0, _styles.styled)('div', {
  name: 'Window',
  slot: 'row'
})(function () {
  return _objectSpread({}, rowMixin);
});
var ContentColumn = (0, _styles.styled)('div', {
  name: 'Window',
  slot: 'column'
})(function () {
  return _objectSpread({}, columnMixin);
});
var StyledPrimaryWindow = (0, _styles.styled)(_PrimaryWindow["default"], {
  name: 'Window',
  slot: 'primary'
})(function () {
  return _objectSpread(_objectSpread({}, rowMixin), {}, {
    height: '300px',
    position: 'relative'
  });
});
var StyledCompanionAreaBottom = (0, _styles.styled)(_CompanionArea["default"], {
  name: 'Window',
  slot: 'bottom'
})(function () {
  return _objectSpread(_objectSpread({}, rowMixin), {}, {
    flex: '0',
    flexBasis: 'auto'
  });
});
var StyledCompanionAreaRight = (0, _styles.styled)('div', {
  name: 'Window',
  slot: 'right'
})(function () {
  return _objectSpread(_objectSpread({}, rowMixin), {}, {
    flex: '0 1 auto'
  });
});

/** Window title bar wrapper for drag controls in the mosaic view */
var DraggableNavBar = function DraggableNavBar(_ref2) {
  var children = _ref2.children,
    props = _objectWithoutProperties(_ref2, _excluded);
  var _useContext = (0, _react.useContext)(_contextTypes.MosaicWindowContext),
    mosaicWindowActions = _useContext.mosaicWindowActions;
  return mosaicWindowActions.connectDragSource( /*#__PURE__*/(0, _jsxRuntime.jsx)("nav", _objectSpread(_objectSpread({}, props), {}, {
    children: children
  })));
};

/**
 * Represents a Window in the mirador workspace
 * @param {object} window
 */
var Window = exports.Window = /*#__PURE__*/function (_Component) {
  _inherits(Window, _Component);
  /** */
  function Window(props) {
    var _this;
    _classCallCheck(this, Window);
    _this = _callSuper(this, Window, [props]);
    _this.state = {};
    return _this;
  }

  /** */
  _createClass(Window, [{
    key: "render",
    value:
    /**
     * Renders things
     */
    function render() {
      var _this$props = this.props,
        focusWindow = _this$props.focusWindow,
        label = _this$props.label,
        isFetching = _this$props.isFetching,
        sideBarOpen = _this$props.sideBarOpen,
        view = _this$props.view,
        windowDraggable = _this$props.windowDraggable,
        windowId = _this$props.windowId,
        workspaceType = _this$props.workspaceType,
        t = _this$props.t,
        manifestError = _this$props.manifestError;
      var _this$state = this.state,
        error = _this$state.error,
        hasError = _this$state.hasError;
      if (hasError) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MinimalWindow["default"], {
          windowId: windowId,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorContent["default"], {
            error: error,
            windowId: windowId
          })
        });
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, {
        onFocus: focusWindow,
        ownerState: this.props,
        component: "section",
        elevation: 1,
        id: windowId,
        className: (0, _cssNs["default"])('window'),
        "aria-label": t('window', {
          label: label
        }),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_WindowTopBar["default"], {
          component: workspaceType === 'mosaic' && windowDraggable ? DraggableNavBar : undefined,
          windowId: windowId,
          windowDraggable: windowDraggable
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IIIFAuthentication["default"], {
          windowId: windowId
        }), manifestError && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorContent["default"], {
          error: {
            stack: manifestError
          },
          windowId: windowId
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(ContentRow, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(ContentColumn, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(StyledPrimaryWindow, {
              view: view,
              windowId: windowId,
              isFetching: isFetching,
              sideBarOpen: sideBarOpen
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledCompanionAreaBottom, {
              windowId: windowId,
              position: "bottom"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(StyledCompanionAreaRight, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CompanionArea["default"], {
              windowId: windowId,
              position: "right"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CompanionArea["default"], {
              windowId: windowId,
              position: "far-right"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CompanionArea["default"], {
          windowId: windowId,
          position: "far-bottom"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PluginHook.PluginHook, _objectSpread({}, this.props))]
      });
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return {
        error: error,
        hasError: true
      };
    }
  }]);
  return Window;
}(_react.Component);
Window.contextType = _contextTypes.MosaicWindowContext;
Window.defaultProps = {
  focusWindow: function focusWindow() {},
  isFetching: false,
  label: null,
  manifestError: null,
  maximized: false,
  sideBarOpen: false,
  view: undefined,
  windowDraggable: null,
  workspaceType: null
};