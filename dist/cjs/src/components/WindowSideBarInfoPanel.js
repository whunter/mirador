"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowSideBarInfoPanel = void 0;
var _react = require("react");
var _CompanionWindow = _interopRequireDefault(require("../containers/CompanionWindow"));
var _CompanionWindowSection = require("./CompanionWindowSection");
var _CanvasInfo = _interopRequireDefault(require("../containers/CanvasInfo"));
var _LocalePicker = _interopRequireDefault(require("../containers/LocalePicker"));
var _ManifestInfo = _interopRequireDefault(require("../containers/ManifestInfo"));
var _CollectionInfo = _interopRequireDefault(require("../containers/CollectionInfo"));
var _ManifestRelatedLinks = _interopRequireDefault(require("../containers/ManifestRelatedLinks"));
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
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /**
 * WindowSideBarInfoPanel
 */
var WindowSideBarInfoPanel = exports.WindowSideBarInfoPanel = /*#__PURE__*/function (_Component) {
  _inherits(WindowSideBarInfoPanel, _Component);
  function WindowSideBarInfoPanel() {
    _classCallCheck(this, WindowSideBarInfoPanel);
    return _callSuper(this, WindowSideBarInfoPanel, arguments);
  }
  _createClass(WindowSideBarInfoPanel, [{
    key: "render",
    value:
    /**
     * render
     * @return
     */
    function render() {
      var _this$props = this.props,
        windowId = _this$props.windowId,
        id = _this$props.id,
        canvasIds = _this$props.canvasIds,
        collectionPath = _this$props.collectionPath,
        t = _this$props.t,
        locale = _this$props.locale,
        setLocale = _this$props.setLocale,
        availableLocales = _this$props.availableLocales,
        showLocalePicker = _this$props.showLocalePicker;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_CompanionWindow["default"], {
        title: t('aboutThisItem'),
        paperClassName: (0, _cssNs["default"])('window-sidebar-info-panel'),
        windowId: windowId,
        id: id,
        titleControls: showLocalePicker && /*#__PURE__*/(0, _jsxRuntime.jsx)(_LocalePicker["default"], {
          locale: locale,
          setLocale: setLocale,
          availableLocales: availableLocales
        }),
        children: [canvasIds.map(function (canvasId, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CompanionWindowSection.CompanionWindowSection, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CanvasInfo["default"], {
              id: id,
              canvasId: canvasId,
              index: index,
              totalSize: canvasIds.length,
              windowId: windowId
            })
          }, canvasId);
        }), collectionPath.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_CompanionWindowSection.CompanionWindowSection, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CollectionInfo["default"], {
            id: id,
            windowId: windowId
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CompanionWindowSection.CompanionWindowSection, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ManifestInfo["default"], {
            id: id,
            windowId: windowId
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CompanionWindowSection.CompanionWindowSection, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ManifestRelatedLinks["default"], {
            id: id,
            windowId: windowId
          })
        })]
      });
    }
  }]);
  return WindowSideBarInfoPanel;
}(_react.Component);
WindowSideBarInfoPanel.defaultProps = {
  availableLocales: [],
  canvasIds: [],
  collectionPath: [],
  locale: '',
  setLocale: undefined,
  showLocalePicker: false,
  t: function t(key) {
    return key;
  }
};