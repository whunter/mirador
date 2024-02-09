"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _styles = require("@mui/material/styles");
var _reactRnd = require("react-rnd");
var _reactResizeObserver = _interopRequireDefault(require("react-resize-observer"));
var _WorkspaceElasticWindow = _interopRequireDefault(require("../containers/WorkspaceElasticWindow"));
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
var Root = (0, _styles.styled)('div', {
  name: 'WorkspaceElastic',
  slot: 'root'
})({
  height: '100%',
  position: 'relative',
  width: '100%'
});
var StyledRnd = (0, _styles.styled)(_reactRnd.Rnd)({
  boxSizing: 'border-box',
  margin: 0,
  position: 'absolute',
  transitionDuration: '.7s',
  // order matters
  // eslint-disable-next-line sort-keys
  '&.react-draggable-dragging': {
    transitionDuration: 'unset'
  }
});

/**
 * Represents a work area that contains any number of windows
 * @memberof Workspace
 * @private
 */
var WorkspaceElastic = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceElastic, _Component);
  function WorkspaceElastic() {
    _classCallCheck(this, WorkspaceElastic);
    return _callSuper(this, WorkspaceElastic, arguments);
  }
  _createClass(WorkspaceElastic, [{
    key: "render",
    value:
    /**
     */
    function render() {
      var _this$props = this.props,
        workspace = _this$props.workspace,
        elasticLayout = _this$props.elasticLayout,
        setWorkspaceViewportDimensions = _this$props.setWorkspaceViewportDimensions,
        setWorkspaceViewportPosition = _this$props.setWorkspaceViewportPosition;
      var viewportPosition = workspace.viewportPosition;
      var offsetX = workspace.width / 2;
      var offsetY = workspace.height / 2;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactResizeObserver["default"], {
          onReflow: function onReflow() {},
          onResize: function onResize(rect) {
            setWorkspaceViewportDimensions(rect);
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledRnd, {
          size: {
            height: workspace.height,
            width: workspace.width
          },
          position: {
            x: -1 * viewportPosition.x - offsetX,
            y: -1 * viewportPosition.y - offsetY
          },
          enableResizing: {
            bottom: false,
            bottomLeft: false,
            bottomRight: false,
            left: false,
            right: false,
            top: false,
            topLeft: false,
            topRight: false
          },
          onDragStop: function onDragStop(e, d) {
            setWorkspaceViewportPosition({
              x: -1 * d.x - offsetX,
              y: -1 * d.y - offsetY
            });
          },
          cancel: ".".concat((0, _cssNs["default"])('window')),
          className: (0, _cssNs["default"])('workspace'),
          disableDragging: !workspace.draggingEnabled,
          children: Object.keys(elasticLayout).map(function (windowId) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_WorkspaceElasticWindow["default"], {
              windowId: windowId
            }, windowId);
          })
        })]
      });
    }
  }]);
  return WorkspaceElastic;
}(_react.Component);
var _default = exports["default"] = WorkspaceElastic;