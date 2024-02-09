var _excluded = ["t", "value"];
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { Component } from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/InfoSharp';
import AnnotationIcon from '@mui/icons-material/CommentSharp';
import AttributionIcon from '@mui/icons-material/CopyrightSharp';
import LayersIcon from '@mui/icons-material/LayersSharp';
import SearchIcon from '@mui/icons-material/SearchSharp';
import CanvasIndexIcon from './icons/CanvasIndexIcon';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Root = styled(Tabs, {
  name: 'WindowSideBarButtons',
  slot: 'root'
})({
  '& .MuiTabs-flexContainer': {
    flexDirection: 'column'
  },
  '&.MuiTabs-indicator': {
    display: 'none'
  }
});
var StyledTabButton = styled(Tab, {
  name: 'WindowSideBarButtons',
  slot: 'button'
})(function (_ref) {
  var theme = _ref.theme;
  return {
    '&.Mui-selected': {
      borderRight: '2px solid',
      borderRightColor: theme.palette.primary.main
    },
    '&.MuiTab-root': {
      '&:active': {
        backgroundColor: theme.palette.action.active
      },
      '&:focus': {
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        backgroundColor: theme.palette.action.hover,
        textDecoration: 'none'
        // Reset on touch devices, it doesn't add specificity
      },
      '&:hover': {
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        backgroundColor: theme.palette.action.hover,
        textDecoration: 'none'
        // Reset on touch devices, it doesn't add specificity
      },
      borderRight: '2px solid transparent',
      minWidth: 'auto'
    },
    fill: 'currentcolor'
  };
});

/** */
function TabButton(_ref2) {
  var t = _ref2.t,
    value = _ref2.value,
    tabProps = _objectWithoutProperties(_ref2, _excluded);
  return /*#__PURE__*/_jsx(Tooltip, {
    title: t('openCompanionWindow', {
      context: value
    }),
    children: /*#__PURE__*/_jsx(StyledTabButton, _objectSpread(_objectSpread({}, tabProps), {}, {
      value: value,
      "aria-label": t('openCompanionWindow', {
        context: value
      }),
      disableRipple: true
    }))
  });
}
/**
 *
 */
export var WindowSideBarButtons = /*#__PURE__*/function (_Component) {
  _inherits(WindowSideBarButtons, _Component);
  /** */
  function WindowSideBarButtons(props) {
    var _this;
    _classCallCheck(this, WindowSideBarButtons);
    _this = _callSuper(this, WindowSideBarButtons, [props]);
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * @param {object} event the change event
   * @param {string} value the tab's value
  */
  _createClass(WindowSideBarButtons, [{
    key: "handleChange",
    value: function handleChange(event, value) {
      var addCompanionWindow = this.props.addCompanionWindow;
      addCompanionWindow(value);
    }

    /**
     * render
     *
     * @return {type}  description
     */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        hasAnnotations = _this$props.hasAnnotations,
        hasAnyAnnotations = _this$props.hasAnyAnnotations,
        hasAnyLayers = _this$props.hasAnyLayers,
        hasCurrentLayers = _this$props.hasCurrentLayers,
        hasSearchResults = _this$props.hasSearchResults,
        hasSearchService = _this$props.hasSearchService,
        panels = _this$props.panels,
        PluginComponents = _this$props.PluginComponents,
        sideBarPanel = _this$props.sideBarPanel,
        t = _this$props.t;
      return /*#__PURE__*/_jsxs(Root, {
        value: sideBarPanel === 'closed' ? false : sideBarPanel,
        onChange: this.handleChange,
        variant: "fullWidth",
        indicatorColor: "primary",
        textColor: "primary",
        orientation: "vertical",
        "aria-orientation": "vertical",
        "aria-label": t('sidebarPanelsNavigation'),
        children: [panels.info && /*#__PURE__*/_jsx(TabButton, {
          value: "info",
          onKeyUp: this.handleKeyUp,
          t: t,
          icon: /*#__PURE__*/_jsx(InfoIcon, {})
        }), panels.attribution && /*#__PURE__*/_jsx(TabButton, {
          value: "attribution",
          onKeyUp: this.handleKeyUp,
          t: t,
          icon: /*#__PURE__*/_jsx(AttributionIcon, {})
        }), panels.canvas && /*#__PURE__*/_jsx(TabButton, {
          value: "canvas",
          onKeyUp: this.handleKeyUp,
          t: t,
          icon: /*#__PURE__*/_jsx(CanvasIndexIcon, {})
        }), panels.annotations && (hasAnnotations || hasAnyAnnotations) && /*#__PURE__*/_jsx(TabButton, {
          value: "annotations",
          onKeyUp: this.handleKeyUp,
          t: t,
          icon: /*#__PURE__*/_jsx(Badge, {
            overlap: "rectangular",
            color: "notification",
            invisible: !hasAnnotations,
            variant: "dot",
            children: /*#__PURE__*/_jsx(AnnotationIcon, {})
          })
        }), panels.search && hasSearchService && /*#__PURE__*/_jsx(TabButton, {
          value: "search",
          onKeyUp: this.handleKeyUp,
          t: t,
          icon: /*#__PURE__*/_jsx(Badge, {
            overlap: "rectangular",
            color: "notification",
            invisible: !hasSearchResults,
            variant: "dot",
            children: /*#__PURE__*/_jsx(SearchIcon, {})
          })
        }), panels.layers && hasAnyLayers && /*#__PURE__*/_jsx(TabButton, {
          value: "layers",
          onKeyUp: this.handleKeyUp,
          t: t,
          icon: /*#__PURE__*/_jsx(Badge, {
            overlap: "rectangular",
            color: "notification",
            invisible: !hasCurrentLayers,
            variant: "dot",
            children: /*#__PURE__*/_jsx(LayersIcon, {})
          })
        }), PluginComponents && PluginComponents.map(function (PluginComponent) {
          return /*#__PURE__*/_jsx(TabButton, {
            onKeyUp: _this2.handleKeyUp,
            t: t,
            value: PluginComponent.value,
            icon: /*#__PURE__*/_jsx(PluginComponent, {})
          }, PluginComponent.value);
        })]
      });
    }
  }]);
  return WindowSideBarButtons;
}(Component);
WindowSideBarButtons.defaultProps = {
  hasAnnotations: false,
  hasAnyAnnotations: false,
  hasAnyLayers: false,
  hasCurrentLayers: false,
  hasSearchResults: false,
  hasSearchService: false,
  panels: [],
  PluginComponents: null,
  sideBarPanel: 'closed',
  t: function t(key) {
    return key;
  }
};