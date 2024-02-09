"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ManifestRelatedLinks = void 0;
var _react = require("react");
var _styles = require("@mui/material/styles");
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Link = _interopRequireDefault(require("@mui/material/Link"));
var _classnames = _interopRequireDefault(require("classnames"));
var _CollapsibleSection = _interopRequireDefault(require("../containers/CollapsibleSection"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
var _PluginHook = require("./PluginHook");
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
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var StyledDl = (0, _styles.styled)('dl')(function (_ref) {
  var theme = _ref.theme;
  return {
    '& dd': {
      marginBottom: '.5em',
      marginLeft: '0'
    }
  };
});
/**
 * ManifestRelatedLinks
 */
var ManifestRelatedLinks = exports.ManifestRelatedLinks = /*#__PURE__*/function (_Component) {
  _inherits(ManifestRelatedLinks, _Component);
  function ManifestRelatedLinks() {
    _classCallCheck(this, ManifestRelatedLinks);
    return _callSuper(this, ManifestRelatedLinks, arguments);
  }
  _createClass(ManifestRelatedLinks, [{
    key: "render",
    value:
    /**
     * render
     * @return
     */
    function render() {
      var _this$props = this.props,
        homepage = _this$props.homepage,
        manifestUrl = _this$props.manifestUrl,
        related = _this$props.related,
        renderings = _this$props.renderings,
        seeAlso = _this$props.seeAlso,
        id = _this$props.id,
        t = _this$props.t;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_CollapsibleSection["default"], {
        id: "".concat(id, "-related"),
        label: t('related'),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
          "aria-labelledby": "".concat(id, "-related ").concat(id, "-related-heading"),
          id: "".concat(id, "-related-heading"),
          variant: "h4",
          component: "h5",
          children: t('links')
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(StyledDl, {
          className: (0, _classnames["default"])((0, _cssNs["default"])('label-value-metadata')),
          children: [homepage && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
              variant: "subtitle2",
              component: "dt",
              children: t('iiif_homepage')
            }), homepage.map(function (page) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
                variant: "body1",
                component: "dd",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link["default"], {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: page.value,
                  children: page.label || page.value
                })
              }, page.value);
            })]
          }), renderings && renderings.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
              variant: "subtitle2",
              component: "dt",
              children: t('iiif_renderings')
            }), renderings.map(function (rendering) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
                variant: "body1",
                component: "dd",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link["default"], {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: rendering.value,
                  children: rendering.label || rendering.value
                })
              }, rendering.value);
            })]
          }), related && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
              variant: "subtitle2",
              component: "dt",
              children: t('iiif_related')
            }), related.map(function (relatedItem) {
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography["default"], {
                variant: "body1",
                component: "dd",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Link["default"], {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: relatedItem.value,
                  children: relatedItem.label || relatedItem.value
                }), relatedItem.format && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
                  component: "span",
                  children: " (".concat(relatedItem.format, ")")
                })]
              }, relatedItem.value);
            })]
          }), seeAlso && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
              variant: "subtitle2",
              component: "dt",
              children: t('iiif_seeAlso')
            }), seeAlso.map(function (seeAlsoItem) {
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography["default"], {
                variant: "body1",
                component: "dd",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Link["default"], {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: seeAlsoItem.value,
                  children: seeAlsoItem.label || seeAlsoItem.value
                }), seeAlsoItem.format && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
                  component: "span",
                  children: " (".concat(seeAlsoItem.format, ")")
                })]
              }, seeAlsoItem.value);
            })]
          }), manifestUrl && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
              variant: "subtitle2",
              component: "dt",
              children: t('iiif_manifest')
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
              variant: "body1",
              component: "dd",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link["default"], {
                target: "_blank",
                rel: "noopener noreferrer",
                href: manifestUrl,
                children: manifestUrl
              })
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PluginHook.PluginHook, _objectSpread({}, this.props))]
      });
    }
  }]);
  return ManifestRelatedLinks;
}(_react.Component);
ManifestRelatedLinks.defaultProps = {
  homepage: null,
  manifestUrl: null,
  related: null,
  renderings: null,
  seeAlso: null,
  t: function t(key) {
    return key;
  }
};