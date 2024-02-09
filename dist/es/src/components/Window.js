var _excluded = ["children"];
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
import { Component, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { MosaicWindowContext } from 'react-mosaic-component/lib/contextTypes';
import ns from '../config/css-ns';
import WindowTopBar from '../containers/WindowTopBar';
import PrimaryWindow from '../containers/PrimaryWindow';
import CompanionArea from '../containers/CompanionArea';
import MinimalWindow from '../containers/MinimalWindow';
import ErrorContent from '../containers/ErrorContent';
import IIIFAuthentication from '../containers/IIIFAuthentication';
import { PluginHook } from './PluginHook';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
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
var Root = styled(Paper, {
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
var ContentRow = styled('div', {
  name: 'Window',
  slot: 'row'
})(function () {
  return _objectSpread({}, rowMixin);
});
var ContentColumn = styled('div', {
  name: 'Window',
  slot: 'column'
})(function () {
  return _objectSpread({}, columnMixin);
});
var StyledPrimaryWindow = styled(PrimaryWindow, {
  name: 'Window',
  slot: 'primary'
})(function () {
  return _objectSpread(_objectSpread({}, rowMixin), {}, {
    height: '300px',
    position: 'relative'
  });
});
var StyledCompanionAreaBottom = styled(CompanionArea, {
  name: 'Window',
  slot: 'bottom'
})(function () {
  return _objectSpread(_objectSpread({}, rowMixin), {}, {
    flex: '0',
    flexBasis: 'auto'
  });
});
var StyledCompanionAreaRight = styled('div', {
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
  var _useContext = useContext(MosaicWindowContext),
    mosaicWindowActions = _useContext.mosaicWindowActions;
  return mosaicWindowActions.connectDragSource( /*#__PURE__*/_jsx("nav", _objectSpread(_objectSpread({}, props), {}, {
    children: children
  })));
};

/**
 * Represents a Window in the mirador workspace
 * @param {object} window
 */
export var Window = /*#__PURE__*/function (_Component) {
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
        return /*#__PURE__*/_jsx(MinimalWindow, {
          windowId: windowId,
          children: /*#__PURE__*/_jsx(ErrorContent, {
            error: error,
            windowId: windowId
          })
        });
      }
      return /*#__PURE__*/_jsxs(Root, {
        onFocus: focusWindow,
        ownerState: this.props,
        component: "section",
        elevation: 1,
        id: windowId,
        className: ns('window'),
        "aria-label": t('window', {
          label: label
        }),
        children: [/*#__PURE__*/_jsx(WindowTopBar, {
          component: workspaceType === 'mosaic' && windowDraggable ? DraggableNavBar : undefined,
          windowId: windowId,
          windowDraggable: windowDraggable
        }), /*#__PURE__*/_jsx(IIIFAuthentication, {
          windowId: windowId
        }), manifestError && /*#__PURE__*/_jsx(ErrorContent, {
          error: {
            stack: manifestError
          },
          windowId: windowId
        }), /*#__PURE__*/_jsxs(ContentRow, {
          children: [/*#__PURE__*/_jsxs(ContentColumn, {
            children: [/*#__PURE__*/_jsx(StyledPrimaryWindow, {
              view: view,
              windowId: windowId,
              isFetching: isFetching,
              sideBarOpen: sideBarOpen
            }), /*#__PURE__*/_jsx(StyledCompanionAreaBottom, {
              windowId: windowId,
              position: "bottom"
            })]
          }), /*#__PURE__*/_jsxs(StyledCompanionAreaRight, {
            children: [/*#__PURE__*/_jsx(CompanionArea, {
              windowId: windowId,
              position: "right"
            }), /*#__PURE__*/_jsx(CompanionArea, {
              windowId: windowId,
              position: "far-right"
            })]
          })]
        }), /*#__PURE__*/_jsx(CompanionArea, {
          windowId: windowId,
          position: "far-bottom"
        }), /*#__PURE__*/_jsx(PluginHook, _objectSpread({}, this.props))]
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
}(Component);
Window.contextType = MosaicWindowContext;
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