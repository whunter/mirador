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
import { Component } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircleOutlineSharp';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircleOutlineSharp';
import { styled } from '@mui/material/styles';
import RestoreZoomIcon from './icons/RestoreZoomIcon';
import MiradorMenuButton from '../containers/MiradorMenuButton';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var StyledZoomControlsWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
});

/**
 */
export var ZoomControls = /*#__PURE__*/function (_Component) {
  _inherits(ZoomControls, _Component);
  /**
   * constructor -
   */
  function ZoomControls(props) {
    var _this;
    _classCallCheck(this, ZoomControls);
    _this = _callSuper(this, ZoomControls, [props]);
    _this.handleZoomInClick = _this.handleZoomInClick.bind(_assertThisInitialized(_this));
    _this.handleZoomOutClick = _this.handleZoomOutClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * @private
   */
  _createClass(ZoomControls, [{
    key: "handleZoomInClick",
    value: function handleZoomInClick() {
      var _this$props = this.props,
        windowId = _this$props.windowId,
        updateViewport = _this$props.updateViewport,
        viewer = _this$props.viewer;
      updateViewport(windowId, {
        zoom: viewer.zoom * 2
      });
    }

    /**
     * @private
     */
  }, {
    key: "handleZoomOutClick",
    value: function handleZoomOutClick() {
      var _this$props2 = this.props,
        windowId = _this$props2.windowId,
        updateViewport = _this$props2.updateViewport,
        viewer = _this$props2.viewer;
      updateViewport(windowId, {
        zoom: viewer.zoom / 2
      });
    }

    /**
     * render
     * @return
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        t = _this$props3.t,
        zoomToWorld = _this$props3.zoomToWorld;
      return /*#__PURE__*/_jsxs(StyledZoomControlsWrapper, {
        children: [/*#__PURE__*/_jsx(MiradorMenuButton, {
          "aria-label": t('zoomIn'),
          onClick: this.handleZoomInClick,
          children: /*#__PURE__*/_jsx(AddCircleIcon, {})
        }), /*#__PURE__*/_jsx(MiradorMenuButton, {
          "aria-label": t('zoomOut'),
          onClick: this.handleZoomOutClick,
          children: /*#__PURE__*/_jsx(RemoveCircleIcon, {})
        }), /*#__PURE__*/_jsx(MiradorMenuButton, {
          "aria-label": t('zoomReset'),
          onClick: function onClick() {
            return zoomToWorld(false);
          },
          children: /*#__PURE__*/_jsx(RestoreZoomIcon, {})
        })]
      });
    }
  }]);
  return ZoomControls;
}(Component);
ZoomControls.defaultProps = {
  t: function t(key) {
    return key;
  },
  updateViewport: function updateViewport() {},
  viewer: {},
  windowId: ''
};