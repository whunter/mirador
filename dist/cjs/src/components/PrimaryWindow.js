"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrimaryWindow = void 0;
var _react = require("react");
var _styles = require("@mui/material/styles");
var _classnames = _interopRequireDefault(require("classnames"));
var _WindowSideBar = _interopRequireDefault(require("../containers/WindowSideBar"));
var _CompanionArea = _interopRequireDefault(require("../containers/CompanionArea"));
var _CollectionDialog = _interopRequireDefault(require("../containers/CollectionDialog"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var AudioViewer = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../containers/AudioViewer'));
  });
});
var GalleryView = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../containers/GalleryView'));
  });
});
var SelectCollection = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../containers/SelectCollection'));
  });
});
var WindowViewer = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../containers/WindowViewer'));
  });
});
var VideoViewer = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../containers/VideoViewer'));
  });
});
GalleryView.displayName = 'GalleryView';
SelectCollection.displayName = 'SelectCollection';
WindowViewer.displayName = 'WindowViewer';
var Root = (0, _styles.styled)('div', {
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
var PrimaryWindow = exports.PrimaryWindow = /*#__PURE__*/function (_Component) {
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
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(SelectCollection, {
          windowId: windowId
        });
      }
      if (isFetching === false) {
        if (view === 'gallery') {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(GalleryView, {
            windowId: windowId
          });
        }
        if (videoResources.length > 0) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(VideoViewer, {
            windowId: windowId
          });
        }
        if (audioResources.length > 0) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(AudioViewer, {
            windowId: windowId
          });
        }
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(WindowViewer, {
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
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, {
        "data-testid": "test-window",
        className: (0, _classnames["default"])((0, _cssNs["default"])('primary-window'), className),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_WindowSideBar["default"], {
          windowId: windowId
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CompanionArea["default"], {
          windowId: windowId,
          position: "left"
        }), isCollectionDialogVisible && /*#__PURE__*/(0, _jsxRuntime.jsx)(_CollectionDialog["default"], {
          windowId: windowId
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Suspense, {
          fallback: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {}),
          children: children || this.renderViewer()
        })]
      });
    }
  }]);
  return PrimaryWindow;
}(_react.Component);
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