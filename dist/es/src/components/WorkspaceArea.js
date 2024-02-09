function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { Component } from 'react';
import { styled, lighten, darken } from '@mui/material/styles';
import ErrorDialog from '../containers/ErrorDialog';
import WorkspaceControlPanel from '../containers/WorkspaceControlPanel';
import Workspace from '../containers/Workspace';
import WorkspaceAdd from '../containers/WorkspaceAdd';
import BackgroundPluginArea from '../containers/BackgroundPluginArea';
import ns from '../config/css-ns';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Root = styled('div', {
  name: 'WorkspaceArea',
  slot: 'root'
})(function (_ref) {
  var theme = _ref.theme;
  var getBackgroundColor = theme.palette.mode === 'light' ? darken : lighten;
  return _defineProperty({
    background: getBackgroundColor(theme.palette.shades.light, 0.1),
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  }, theme.breakpoints.up('sm'), {
    flexDirection: 'row'
  });
});
var ViewerArea = styled('main', {
  name: 'WorkspaceArea',
  slot: 'viewer'
})(function () {
  return {
    flexGrow: 1,
    position: 'relative'
  };
});

/**
 * This is the top level Mirador component.
 * @prop {Object} manifests
 */
export var WorkspaceArea = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceArea, _Component);
  function WorkspaceArea() {
    _classCallCheck(this, WorkspaceArea);
    return _callSuper(this, WorkspaceArea, arguments);
  }
  _createClass(WorkspaceArea, [{
    key: "render",
    value:
    /**
     * render
     * @return {String} - HTML markup for the component
     */
    function render() {
      var _this$props = this.props,
        areaRef = _this$props.areaRef,
        controlPanelVariant = _this$props.controlPanelVariant,
        isWorkspaceAddVisible = _this$props.isWorkspaceAddVisible,
        isWorkspaceControlPanelVisible = _this$props.isWorkspaceControlPanelVisible,
        lang = _this$props.lang,
        t = _this$props.t;
      return /*#__PURE__*/_jsxs(Root, {
        ownerState: this.props,
        children: [isWorkspaceControlPanelVisible && /*#__PURE__*/_jsx(WorkspaceControlPanel, {
          variant: controlPanelVariant
        }), /*#__PURE__*/_jsxs(ViewerArea, _objectSpread(_objectSpread({
          className: ns('viewer'),
          lang: lang,
          "aria-label": t('workspace')
        }, areaRef ? {
          ref: areaRef
        } : {}), {}, {
          children: [isWorkspaceAddVisible ? /*#__PURE__*/_jsx(WorkspaceAdd, {}) : /*#__PURE__*/_jsx(Workspace, {}), /*#__PURE__*/_jsx(ErrorDialog, {}), /*#__PURE__*/_jsx(BackgroundPluginArea, {})]
        }))]
      });
    }
  }]);
  return WorkspaceArea;
}(Component);
WorkspaceArea.defaultProps = {
  areaRef: null,
  controlPanelVariant: undefined,
  isWorkspaceAddVisible: false,
  lang: undefined
};