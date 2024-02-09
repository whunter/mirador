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
import { Component, lazy, Suspense } from 'react';
import { styled } from '@mui/material/styles';
import classNames from 'classnames';
import WindowSideBar from '../containers/WindowSideBar';
import CompanionArea from '../containers/CompanionArea';
import CollectionDialog from '../containers/CollectionDialog';
import ns from '../config/css-ns';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var AudioViewer = /*#__PURE__*/lazy(function () {
  return import('../containers/AudioViewer');
});
var GalleryView = /*#__PURE__*/lazy(function () {
  return import('../containers/GalleryView');
});
var SelectCollection = /*#__PURE__*/lazy(function () {
  return import('../containers/SelectCollection');
});
var WindowViewer = /*#__PURE__*/lazy(function () {
  return import('../containers/WindowViewer');
});
var VideoViewer = /*#__PURE__*/lazy(function () {
  return import('../containers/VideoViewer');
});
GalleryView.displayName = 'GalleryView';
SelectCollection.displayName = 'SelectCollection';
WindowViewer.displayName = 'WindowViewer';
var Root = styled('div', {
  name: 'PrimaryWindow',
  slot: 'root'
})(function () {
  return {
    display: 'flex',
    flex: 1,
    position: 'relative'
  };
});

/**
 * PrimaryWindow - component that renders the primary content of a Mirador
 * window. Right now this differentiates between a Image, Video, or Audio viewer.
 */
export var PrimaryWindow = /*#__PURE__*/function (_Component) {
  _inherits(PrimaryWindow, _Component);
  function PrimaryWindow() {
    _classCallCheck(this, PrimaryWindow);
    return _callSuper(this, PrimaryWindow, arguments);
  }
  _createClass(PrimaryWindow, [{
    key: "renderViewer",
    value:
    /**
     * renderViewer - logic used to determine what type of view to show
     *
     * @return {(String|null)}
     */
    function renderViewer() {
      var _this$props = this.props,
        audioResources = _this$props.audioResources,
        isCollection = _this$props.isCollection,
        isFetching = _this$props.isFetching,
        videoResources = _this$props.videoResources,
        view = _this$props.view,
        windowId = _this$props.windowId;
      if (isCollection) {
        return /*#__PURE__*/_jsx(SelectCollection, {
          windowId: windowId
        });
      }
      if (isFetching === false) {
        if (view === 'gallery') {
          return /*#__PURE__*/_jsx(GalleryView, {
            windowId: windowId
          });
        }
        if (videoResources.length > 0) {
          return /*#__PURE__*/_jsx(VideoViewer, {
            windowId: windowId
          });
        }
        if (audioResources.length > 0) {
          return /*#__PURE__*/_jsx(AudioViewer, {
            windowId: windowId
          });
        }
        return /*#__PURE__*/_jsx(WindowViewer, {
          windowId: windowId
        });
      }
      return null;
    }

    /**
     * Render the component
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        isCollectionDialogVisible = _this$props2.isCollectionDialogVisible,
        windowId = _this$props2.windowId,
        children = _this$props2.children,
        className = _this$props2.className;
      return /*#__PURE__*/_jsxs(Root, {
        "data-testid": "test-window",
        className: classNames(ns('primary-window'), className),
        children: [/*#__PURE__*/_jsx(WindowSideBar, {
          windowId: windowId
        }), /*#__PURE__*/_jsx(CompanionArea, {
          windowId: windowId,
          position: "left"
        }), isCollectionDialogVisible && /*#__PURE__*/_jsx(CollectionDialog, {
          windowId: windowId
        }), /*#__PURE__*/_jsx(Suspense, {
          fallback: /*#__PURE__*/_jsx("div", {}),
          children: children || this.renderViewer()
        })]
      });
    }
  }]);
  return PrimaryWindow;
}(Component);
PrimaryWindow.defaultProps = {
  audioResources: [],
  children: undefined,
  className: undefined,
  isCollection: false,
  isCollectionDialogVisible: false,
  isFetching: false,
  videoResources: [],
  view: undefined
};