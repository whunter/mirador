"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowSideBarCollectionPanel = void 0;
var _react = require("react");
var _List = _interopRequireDefault(require("@mui/material/List"));
var _ListItem = _interopRequireDefault(require("@mui/material/ListItem"));
var _ListItemIcon = _interopRequireDefault(require("@mui/material/ListItemIcon"));
var _ListItemText = _interopRequireDefault(require("@mui/material/ListItemText"));
var _MenuList = _interopRequireDefault(require("@mui/material/MenuList"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Skeleton = _interopRequireDefault(require("@mui/material/Skeleton"));
var _ArrowUpwardSharp = _interopRequireDefault(require("@mui/icons-material/ArrowUpwardSharp"));
var _CompanionWindow = _interopRequireDefault(require("../containers/CompanionWindow"));
var _IIIFThumbnail = _interopRequireDefault(require("../containers/IIIFThumbnail"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["manifest", "canvasNavigation", "variant"];
/** */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Item(_ref) {
  var manifest = _ref.manifest,
    canvasNavigation = _ref.canvasNavigation,
    variant = _ref.variant,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuItem["default"], _objectSpread(_objectSpread({
    alignItems: "flex-start",
    button: true,
    divider: true,
    component: "li",
    variant: "multiline",
    sx: {
      paddingRight: 1
    }
  }, otherProps), {}, {
    children: [variant === 'thumbnail' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItemIcon["default"], {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_IIIFThumbnail["default"], {
        resource: manifest,
        maxHeight: canvasNavigation.height,
        maxWidth: canvasNavigation.width
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItemText["default"], {
      children: WindowSideBarCollectionPanel.getUseableLabel(manifest)
    })]
  }));
}
/** */
var WindowSideBarCollectionPanel = exports.WindowSideBarCollectionPanel = /*#__PURE__*/function (_Component) {
  _inherits(WindowSideBarCollectionPanel, _Component);
  function WindowSideBarCollectionPanel() {
    _classCallCheck(this, WindowSideBarCollectionPanel);
    return _callSuper(this, WindowSideBarCollectionPanel, arguments);
  }
  _createClass(WindowSideBarCollectionPanel, [{
    key: "isMultipart",
    value: /** */
    function isMultipart() {
      var collection = this.props.collection;
      if (!collection) return false;
      var behaviors = collection.getProperty('behavior');
      if (Array.isArray(behaviors)) return behaviors.includes('multi-part');
      return behaviors === 'multi-part';
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        canvasNavigation = _this$props.canvasNavigation,
        collectionPath = _this$props.collectionPath,
        collection = _this$props.collection,
        id = _this$props.id,
        isFetching = _this$props.isFetching,
        manifestId = _this$props.manifestId,
        parentCollection = _this$props.parentCollection,
        updateCompanionWindow = _this$props.updateCompanionWindow,
        updateWindow = _this$props.updateWindow,
        t = _this$props.t,
        variant = _this$props.variant,
        windowId = _this$props.windowId;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CompanionWindow["default"], {
        title: t(this.isMultipart() ? 'multipartCollection' : 'collection'),
        windowId: windowId,
        id: id,
        titleControls: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [parentCollection && /*#__PURE__*/(0, _jsxRuntime.jsx)(_List["default"], {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ListItem["default"], {
              button: true,
              onClick: function onClick() {
                return updateCompanionWindow({
                  collectionPath: collectionPath.slice(0, -1)
                });
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItemIcon["default"], {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ArrowUpwardSharp["default"], {})
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItemText["default"], {
                primaryTypographyProps: {
                  variant: 'body1'
                },
                children: WindowSideBarCollectionPanel.getUseableLabel(parentCollection)
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography["default"], {
            variant: "h6",
            children: [collection && WindowSideBarCollectionPanel.getUseableLabel(collection), isFetching && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Skeleton["default"], {
              variant: "text"
            })]
          })]
        }),
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuList["default"], {
          children: [isFetching && /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem["default"], {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ListItemText["default"], {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Skeleton["default"], {
                variant: "text"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Skeleton["default"], {
                variant: "text"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Skeleton["default"], {
                variant: "text"
              })]
            })
          }), collection && collection.getCollections().map(function (manifest) {
            /** select the new manifest and go back to the normal index */
            var onClick = function onClick() {
              // close collection
              updateCompanionWindow({
                collectionPath: [].concat(_toConsumableArray(collectionPath), [manifest.id])
              });
            };
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(Item, {
              onClick: onClick,
              canvasNavigation: canvasNavigation,
              manifest: manifest,
              variant: variant,
              selected: manifestId === manifest.id
            }, manifest.id);
          }), collection && collection.getManifests().map(function (manifest) {
            /** select the new manifest and go back to the normal index */
            var onClick = function onClick() {
              // select new manifest
              updateWindow({
                canvasId: null,
                collectionPath: collectionPath,
                manifestId: manifest.id
              });
              // close collection
              updateCompanionWindow({
                multipart: false
              });
            };
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(Item, {
              onClick: onClick,
              canvasNavigation: canvasNavigation,
              manifest: manifest,
              variant: variant,
              selected: manifestId === manifest.id
            }, manifest.id);
          })]
        })
      });
    }
  }], [{
    key: "getUseableLabel",
    value: /** */
    function getUseableLabel(resource, index) {
      return resource && resource.getLabel && resource.getLabel().length > 0 ? resource.getLabel().getValue() : resource.id;
    }
  }]);
  return WindowSideBarCollectionPanel;
}(_react.Component);
WindowSideBarCollectionPanel.defaultProps = {
  collection: null,
  collectionPath: [],
  isFetching: false,
  parentCollection: null,
  t: function t(k) {
    return k;
  },
  variant: null
};