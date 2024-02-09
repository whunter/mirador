"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IIIFThumbnail = void 0;
var _react = require("react");
var _styles = require("@mui/material/styles");
var _reactIntersectionObserver = require("react-intersection-observer");
var _ThumbnailFactory = _interopRequireDefault(require("../lib/ThumbnailFactory"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["border", "placeholder", "style", "thumbnail", "resource", "maxHeight", "maxWidth", "thumbnailsConfig"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Root = (0, _styles.styled)('div', {
  name: 'IIIFThumbnail',
  slot: 'root'
})({});
var Label = (0, _styles.styled)('span', {
  name: 'IIIFThumbnail',
  slot: 'label'
})(function (_ref) {
  var theme = _ref.theme;
  return _objectSpread({}, theme.typography.caption);
});
var Image = (0, _styles.styled)('img', {
  name: 'IIIFThumbnail',
  slot: 'image'
})(function () {
  return {
    height: 'auto',
    width: 'auto'
  };
});

/**
 * A lazy-loaded image that uses IntersectionObserver to determine when to
 * try to load the image (or even calculate that the image url/height/width are)
 */
var LazyLoadedImage = function LazyLoadedImage(_ref2) {
  var border = _ref2.border,
    placeholder = _ref2.placeholder,
    _ref2$style = _ref2.style,
    style = _ref2$style === void 0 ? {} : _ref2$style,
    thumbnail = _ref2.thumbnail,
    resource = _ref2.resource,
    maxHeight = _ref2.maxHeight,
    maxWidth = _ref2.maxWidth,
    thumbnailsConfig = _ref2.thumbnailsConfig,
    props = _objectWithoutProperties(_ref2, _excluded);
  var _useInView = (0, _reactIntersectionObserver.useInView)(),
    ref = _useInView.ref,
    inView = _useInView.inView;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loaded = _useState2[0],
    setLoaded = _useState2[1];

  /**
   * Handles the intersection (visibility) of a given thumbnail, by requesting
   * the image and then updating the state.
   */
  (0, _react.useEffect)(function () {
    if (loaded || !inView) return;
    setLoaded(true);
  }, [inView, loaded]);
  var image = (0, _react.useMemo)(function () {
    if (thumbnail) return thumbnail;
    var i = (0, _ThumbnailFactory["default"])(resource, _objectSpread(_objectSpread({}, thumbnailsConfig), {}, {
      maxHeight: maxHeight,
      maxWidth: maxWidth
    }));
    if (i && i.url) return i;
    return undefined;
  }, [resource, thumbnail, maxWidth, maxHeight, thumbnailsConfig]);
  var imageStyles = (0, _react.useMemo)(function () {
    var styleProps = {
      height: undefined,
      maxHeight: undefined,
      maxWidth: undefined,
      width: undefined
    };
    if (!image) return _objectSpread(_objectSpread({}, style), {}, {
      height: maxHeight,
      width: maxWidth
    });
    var thumbHeight = image.height,
      thumbWidth = image.width;
    if (thumbHeight && thumbWidth) {
      if (maxHeight && thumbHeight > maxHeight || maxWidth && thumbWidth > maxWidth) {
        var aspectRatio = thumbWidth / thumbHeight;
        if (maxHeight && maxWidth) {
          if (maxWidth / maxHeight < aspectRatio) {
            styleProps.height = Math.round(maxWidth / aspectRatio);
            styleProps.width = maxWidth;
          } else {
            styleProps.height = maxHeight;
            styleProps.width = Math.round(maxHeight * aspectRatio);
          }
        } else if (maxHeight) {
          styleProps.height = maxHeight;
          styleProps.maxWidth = Math.round(maxHeight * aspectRatio);
        } else if (maxWidth) {
          styleProps.width = maxWidth;
          styleProps.maxHeight = Math.round(maxWidth / aspectRatio);
        }
      } else {
        styleProps.width = thumbWidth;
        styleProps.height = thumbHeight;
      }
    } else if (thumbHeight && !thumbWidth) {
      styleProps.height = maxHeight;
    } else if (!thumbHeight && thumbWidth) {
      styleProps.width = maxWidth;
    } else {
      // The thumbnail wasn't retrieved via an Image API service,
      // and its dimensions are not specified in the JSON-LD
      // (note that this may result in a blurry image)
      styleProps.width = maxWidth;
      styleProps.height = maxHeight;
    }
    return _objectSpread(_objectSpread({}, styleProps), style);
  }, [image, maxWidth, maxHeight, style]);
  var _ref3 = loaded && (thumbnail || image) || {},
    _ref3$url = _ref3.url,
    src = _ref3$url === void 0 ? placeholder : _ref3$url;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Image, _objectSpread({
    ownerState: {
      border: border
    },
    ref: ref,
    alt: "",
    role: "presentation",
    src: src,
    style: imageStyles
  }, props));
};
LazyLoadedImage.defaultProps = {
  border: false,
  style: {},
  thumbnail: null,
  thumbnailsConfig: {}
};

/**
 * Uses InteractionObserver to "lazy" load canvas thumbnails that are in view.
 */
var IIIFThumbnail = exports.IIIFThumbnail = /*#__PURE__*/function (_Component) {
  _inherits(IIIFThumbnail, _Component);
  function IIIFThumbnail() {
    _classCallCheck(this, IIIFThumbnail);
    return _callSuper(this, IIIFThumbnail, arguments);
  }
  _createClass(IIIFThumbnail, [{
    key: "label",
    value: /** */
    function label() {
      var _this$props = this.props,
        label = _this$props.label,
        resource = _this$props.resource;
      return label || IIIFThumbnail.getUseableLabel(resource);
    }

    /**
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        border = _this$props2.border,
        children = _this$props2.children,
        imagePlaceholder = _this$props2.imagePlaceholder,
        labelled = _this$props2.labelled,
        maxHeight = _this$props2.maxHeight,
        maxWidth = _this$props2.maxWidth,
        resource = _this$props2.resource,
        style = _this$props2.style,
        thumbnail = _this$props2.thumbnail,
        thumbnailsConfig = _this$props2.thumbnailsConfig;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, {
        ownerState: this.props,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(LazyLoadedImage, {
          placeholder: imagePlaceholder,
          thumbnail: thumbnail,
          resource: resource,
          maxHeight: maxHeight,
          maxWidth: maxWidth,
          thumbnailsConfig: thumbnailsConfig,
          style: style,
          border: border
        }), labelled && /*#__PURE__*/(0, _jsxRuntime.jsx)(Label, {
          ownerState: this.props,
          children: this.label()
        }), children]
      });
    }
  }], [{
    key: "getUseableLabel",
    value: /** */
    function getUseableLabel(resource, index) {
      return resource && resource.getLabel && resource.getLabel().length > 0 ? resource.getLabel().getValue() : String(index + 1);
    }
  }]);
  return IIIFThumbnail;
}(_react.Component);
IIIFThumbnail.defaultProps = {
  border: false,
  children: null,
  // Transparent "gray"
  imagePlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMDQmtBwADgwF/Op8FmAAAAABJRU5ErkJggg==',
  label: undefined,
  labelled: false,
  maxHeight: null,
  maxWidth: null,
  style: {},
  thumbnail: null,
  thumbnailsConfig: {},
  variant: null
};