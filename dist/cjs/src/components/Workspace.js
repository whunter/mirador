"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Workspace = void 0;
var _react = require("react");
var _styles = require("@mui/material/styles");
var _classnames = _interopRequireDefault(require("classnames"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _utils = require("@mui/utils");
var _Window = _interopRequireDefault(require("../containers/Window"));
var _WorkspaceMosaic = _interopRequireDefault(require("../containers/WorkspaceMosaic"));
var _WorkspaceElastic = _interopRequireDefault(require("../containers/WorkspaceElastic"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
var _IIIFDropTarget = require("./IIIFDropTarget");
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
var Root = (0, _styles.styled)('div', {
  name: 'Workspace',
  slot: 'root'
})(function () {
  return {
    height: '100%',
    position: 'relative',
    width: '100%'
  };
});

/**
 * Represents a work area that contains any number of windows
 * @memberof Workspace
 * @private
 */
var Workspace = exports.Workspace = /*#__PURE__*/function (_Component) {
  _inherits(Workspace, _Component);
  /** */
  function Workspace(props) {
    var _this;
    _classCallCheck(this, Workspace);
    _this = _callSuper(this, Workspace, [props]);
    _this.handleDrop = _this.handleDrop.bind(_assertThisInitialized(_this));
    return _this;
  }

  /** */
  _createClass(Workspace, [{
    key: "handleDrop",
    value: function handleDrop(_ref, props, monitor) {
      var canvasId = _ref.canvasId,
        manifestId = _ref.manifestId,
        manifestJson = _ref.manifestJson;
      var _this$props = this.props,
        addWindow = _this$props.addWindow,
        allowNewWindows = _this$props.allowNewWindows;
      if (!allowNewWindows) return;
      addWindow({
        canvasId: canvasId,
        manifest: manifestJson,
        manifestId: manifestId
      });
    }

    /**
     * Determine which workspace to render by configured type
     */
  }, {
    key: "workspaceByType",
    value: function workspaceByType() {
      var _this$props2 = this.props,
        workspaceId = _this$props2.workspaceId,
        workspaceType = _this$props2.workspaceType,
        windowIds = _this$props2.windowIds;
      if (this.maximizedWindows()) {
        return this.maximizedWindows();
      }
      if (windowIds.length === 0) return this.zeroWindows();
      switch (workspaceType) {
        case 'elastic':
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_WorkspaceElastic["default"], {});
        case 'mosaic':
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_WorkspaceMosaic["default"], {});
        default:
          return windowIds.map(function (windowId) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Window["default"], {
              windowId: windowId
            }, "".concat(windowId, "-").concat(workspaceId));
          });
      }
    }

    /** */
  }, {
    key: "zeroWindows",
    value: function zeroWindows() {
      var t = this.props.t;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid["default"], {
          alignItems: "center",
          container: true,
          style: {
            height: '100%'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid["default"], {
            xs: 12,
            item: true,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
              variant: "h1",
              component: "div",
              align: "center",
              children: t('welcome')
            })
          })
        })
      });
    }

    /**
     * Determine whether or not there are maximized windows
     */
  }, {
    key: "maximizedWindows",
    value: function maximizedWindows() {
      var _this$props3 = this.props,
        maximizedWindowIds = _this$props3.maximizedWindowIds,
        workspaceId = _this$props3.workspaceId;
      if (maximizedWindowIds.length > 0) {
        return maximizedWindowIds.map(function (windowId) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Window["default"], {
            windowId: windowId,
            className: (0, _classnames["default"])((0, _cssNs["default"])('workspace-maximized-window'))
          }, "".concat(windowId, "-").concat(workspaceId));
        });
      }
      return false;
    }

    /**
     * render
     */
  }, {
    key: "render",
    value: function render() {
      var t = this.props.t;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_IIIFDropTarget.IIIFDropTarget, {
        onDrop: this.handleDrop,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, {
          ownerState: this.props,
          className: (0, _classnames["default"])((0, _cssNs["default"])('workspace-viewport')),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
            style: _utils.visuallyHidden,
            component: "h1",
            children: t('miradorViewer')
          }), this.workspaceByType()]
        })
      });
    }
  }]);
  return Workspace;
}(_react.Component);
Workspace.defaultProps = {
  addWindow: function addWindow() {},
  allowNewWindows: true,
  maximizedWindowIds: [],
  windowIds: []
};