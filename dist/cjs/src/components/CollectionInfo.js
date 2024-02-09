"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionInfo = void 0;
var _react = require("react");
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _ViewListSharp = _interopRequireDefault(require("@mui/icons-material/ViewListSharp"));
var _CollapsibleSection = _interopRequireDefault(require("../containers/CollapsibleSection"));
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
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /**
 * ManifestInfo
 */
var CollectionInfo = exports.CollectionInfo = /*#__PURE__*/function (_Component) {
  _inherits(CollectionInfo, _Component);
  /** */
  function CollectionInfo(props) {
    var _this;
    _classCallCheck(this, CollectionInfo);
    _this = _callSuper(this, CollectionInfo, [props]);
    _this.openCollectionDialog = _this.openCollectionDialog.bind(_assertThisInitialized(_this));
    return _this;
  }

  /** */
  _createClass(CollectionInfo, [{
    key: "openCollectionDialog",
    value: function openCollectionDialog() {
      var _this$props = this.props,
        collectionPath = _this$props.collectionPath,
        showCollectionDialog = _this$props.showCollectionDialog,
        windowId = _this$props.windowId;
      var manifestId = collectionPath[collectionPath.length - 1];
      showCollectionDialog(manifestId, collectionPath.slice(0, -1), windowId);
    }

    /**
     * render
     * @return
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        collectionLabel = _this$props2.collectionLabel,
        collectionPath = _this$props2.collectionPath,
        id = _this$props2.id,
        t = _this$props2.t;
      if (collectionPath.length === 0) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_CollapsibleSection["default"], {
        id: "".concat(id, "-collection"),
        label: t('collection'),
        children: [collectionLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
          "aria-labelledby": "".concat(id, "-resource ").concat(id, "-resource-heading"),
          id: "".concat(id, "-resource-heading"),
          variant: "h4",
          children: collectionLabel
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
          color: "primary",
          onClick: this.openCollectionDialog,
          startIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ViewListSharp["default"], {}),
          children: t('showCollection')
        })]
      });
    }
  }]);
  return CollectionInfo;
}(_react.Component);
CollectionInfo.defaultProps = {
  collectionLabel: null,
  collectionPath: [],
  t: function t(key) {
    return key;
  },
  windowId: null
};