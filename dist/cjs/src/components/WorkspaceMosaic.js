"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceMosaic = void 0;
var _react = require("react");
var _styles = require("@mui/material/styles");
var _GlobalStyles = _interopRequireDefault(require("@mui/material/GlobalStyles"));
var _reactDnd = require("react-dnd");
var _reactMosaicComponent = require("react-mosaic-component");
var _difference = _interopRequireDefault(require("lodash/difference"));
var _isEqual = _interopRequireDefault(require("lodash/isEqual"));
var _classnames = _interopRequireDefault(require("classnames"));
var _MosaicRenderPreview = _interopRequireDefault(require("../containers/MosaicRenderPreview"));
var _Window = _interopRequireDefault(require("../containers/Window"));
var _MosaicLayout = _interopRequireDefault(require("../lib/MosaicLayout"));
var _reactMosaicComponent2 = _interopRequireDefault(require("../styles/react-mosaic-component"));
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
var StyledMosaic = (0, _styles.styled)(_reactMosaicComponent.Mosaic)({
  '& .mosaic-preview': {
    boxShadow: 'none'
  },
  '& .mosaic-tile': {
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .2), 0 2px 1px -1px rgba(0, 0, 0, .2)'
  },
  '& .mosaic-window': {
    boxShadow: 'none'
  },
  '& .mosaic-window-toolbar': {
    display: 'none !important'
  }
});

/**
 * Represents a work area that contains any number of windows
 * @memberof Workspace
 * @private
 */
var WorkspaceMosaic = exports.WorkspaceMosaic = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceMosaic, _Component);
  /**
   */
  function WorkspaceMosaic(props) {
    var _this;
    _classCallCheck(this, WorkspaceMosaic);
    _this = _callSuper(this, WorkspaceMosaic, [props]);
    _this.tileRenderer = _this.tileRenderer.bind(_assertThisInitialized(_this));
    _this.mosaicChange = _this.mosaicChange.bind(_assertThisInitialized(_this));
    _this.determineWorkspaceLayout = _this.determineWorkspaceLayout.bind(_assertThisInitialized(_this));
    _this.zeroStateView = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {});
    _this.windowPaths = {};
    _this.toolbarControls = [];
    _this.additionalControls = [];
    return _this;
  }

  /** */
  _createClass(WorkspaceMosaic, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var updateWorkspaceMosaicLayout = this.props.updateWorkspaceMosaicLayout;
      var newLayout = this.determineWorkspaceLayout();
      if (newLayout) updateWorkspaceMosaicLayout(newLayout);
    }

    /** */
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
        windowIds = _this$props.windowIds,
        layout = _this$props.layout,
        updateWorkspaceMosaicLayout = _this$props.updateWorkspaceMosaicLayout;
      var prevWindows = prevProps.windowIds;
      // Handles when Windows are added (not via Add Resource UI) Could be a workspace import
      if (!windowIds.every(function (e) {
        return prevWindows.includes(e);
      })) {
        var newLayout = this.determineWorkspaceLayout();
        if (!(0, _isEqual["default"])(newLayout, layout)) updateWorkspaceMosaicLayout(newLayout);
        return;
      }

      // Handles when Windows are removed from the state
      if (!prevWindows.every(function (e) {
        return windowIds.includes(e);
      })) {
        // There are no more remaining Windows, just return an empty layout
        if (windowIds.length === 0) {
          updateWorkspaceMosaicLayout(null);
          return;
        }
        var removedWindows = (0, _difference["default"])(prevWindows, windowIds);
        var _newLayout = new _MosaicLayout["default"](layout);
        _newLayout.removeWindows(removedWindows, this.windowPaths);
        updateWorkspaceMosaicLayout(_newLayout.layout);
      }
    }

    /**
     * bookkeepPath - used to book keep Window's path's
     * @param  {String} windowId   [description]
     * @param  {Array} path [description]
     */
  }, {
    key: "bookkeepPath",
    value: function bookkeepPath(windowId, path) {
      this.windowPaths[windowId] = path;
    }

    /**
     * Used to determine whether or not a "new" layout should be autogenerated.
     */
  }, {
    key: "determineWorkspaceLayout",
    value: function determineWorkspaceLayout() {
      var _this$props2 = this.props,
        windowIds = _this$props2.windowIds,
        layout = _this$props2.layout;
      var leaveKeys = (0, _reactMosaicComponent.getLeaves)(layout);
      // Windows were added
      if (!windowIds.every(function (e) {
        return leaveKeys.includes(e);
      })) {
        // No current layout, so just generate a new one
        if (leaveKeys.length < 2) {
          return (0, _reactMosaicComponent.createBalancedTreeFromLeaves)(windowIds);
        }
        // Add new windows to layout
        var addedWindows = (0, _difference["default"])(windowIds, leaveKeys);
        var newLayout = new _MosaicLayout["default"](layout);
        newLayout.addWindows(addedWindows);
        return newLayout.layout;
      }
      // Windows were removed (perhaps in a different Workspace). We don't have a
      // way to reconfigure.. so we have to random generate
      if (!leaveKeys.every(function (e) {
        return windowIds.includes(e);
      })) {
        return (0, _reactMosaicComponent.createBalancedTreeFromLeaves)(windowIds);
      }
      return layout;
    }

    /** */
  }, {
    key: "tileRenderer",
    value:
    /**
     * Render a tile (Window) in the Mosaic.
     */
    function tileRenderer(id, path) {
      var _this$props3 = this.props,
        windowIds = _this$props3.windowIds,
        workspaceId = _this$props3.workspaceId;
      if (!windowIds.includes(id)) return null;
      this.bookkeepPath(id, path);
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMosaicComponent.MosaicWindow, {
        toolbarControls: this.toolbarControls,
        additionalControls: this.additionalControls,
        path: path,
        windowId: id,
        renderPreview: WorkspaceMosaic.renderPreview,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Window["default"], {
          windowId: id
        }, "".concat(id, "-").concat(workspaceId))
      });
    }

    /**
     * Update the redux store when the Mosaic is changed.
     */
  }, {
    key: "mosaicChange",
    value: function mosaicChange(newLayout) {
      var updateWorkspaceMosaicLayout = this.props.updateWorkspaceMosaicLayout;
      updateWorkspaceMosaicLayout(newLayout);
    }

    /**
     */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var layout = this.props.layout;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactDnd.DndContext.Consumer, {
        children: function children(ctx) {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_GlobalStyles["default"], {
              styles: _objectSpread({}, _reactMosaicComponent2["default"])
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledMosaic, {
              dragAndDropManager: ctx.dragDropManager,
              renderTile: _this2.tileRenderer,
              initialValue: layout || _this2.determineWorkspaceLayout(),
              onChange: _this2.mosaicChange,
              className: (0, _classnames["default"])('mirador-mosaic'),
              zeroStateView: _this2.zeroStateView
            })]
          });
        }
      });
    }
  }], [{
    key: "renderPreview",
    value: function renderPreview(mosaicProps) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "mosaic-preview",
        "aria-hidden": true,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MosaicRenderPreview["default"], {
          windowId: mosaicProps.windowId
        })
      });
    }
  }]);
  return WorkspaceMosaic;
}(_react.Component);
WorkspaceMosaic.defaultProps = {
  layout: undefined,
  windowIds: []
};