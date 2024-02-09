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
import { styled } from '@mui/material/styles';
import classNames from 'classnames';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { visuallyHidden } from '@mui/utils';
import Window from '../containers/Window';
import WorkspaceMosaic from '../containers/WorkspaceMosaic';
import WorkspaceElastic from '../containers/WorkspaceElastic';
import ns from '../config/css-ns';
import { IIIFDropTarget } from './IIIFDropTarget';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Root = styled('div', {
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
export var Workspace = /*#__PURE__*/function (_Component) {
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
          return /*#__PURE__*/_jsx(WorkspaceElastic, {});
        case 'mosaic':
          return /*#__PURE__*/_jsx(WorkspaceMosaic, {});
        default:
          return windowIds.map(function (windowId) {
            return /*#__PURE__*/_jsx(Window, {
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
      return /*#__PURE__*/_jsx(Root, {
        children: /*#__PURE__*/_jsx(Grid, {
          alignItems: "center",
          container: true,
          style: {
            height: '100%'
          },
          children: /*#__PURE__*/_jsx(Grid, {
            xs: 12,
            item: true,
            children: /*#__PURE__*/_jsx(Typography, {
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
          return /*#__PURE__*/_jsx(Window, {
            windowId: windowId,
            className: classNames(ns('workspace-maximized-window'))
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
      return /*#__PURE__*/_jsx(IIIFDropTarget, {
        onDrop: this.handleDrop,
        children: /*#__PURE__*/_jsxs(Root, {
          ownerState: this.props,
          className: classNames(ns('workspace-viewport')),
          children: [/*#__PURE__*/_jsx(Typography, {
            style: visuallyHidden,
            component: "h1",
            children: t('miradorViewer')
          }), this.workspaceByType()]
        })
      });
    }
  }]);
  return Workspace;
}(Component);
Workspace.defaultProps = {
  addWindow: function addWindow() {},
  allowNewWindows: true,
  maximizedWindowIds: [],
  windowIds: []
};