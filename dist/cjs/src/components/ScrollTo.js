"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollTo = void 0;
var _react = require("react");
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _excluded = ["children", "containerRef", "offsetTop", "scrollTo", "nodeId"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
/**
 * ScrollTo ~
*/
var ScrollTo = exports.ScrollTo = /*#__PURE__*/function (_Component) {
  _inherits(ScrollTo, _Component);
  /** */
  function ScrollTo(props) {
    var _this;
    _classCallCheck(this, ScrollTo);
    _this = _callSuper(this, ScrollTo, [props]);
    _this.scrollToRef = /*#__PURE__*/(0, _react.createRef)();
    return _this;
  }

  /** */
  _createClass(ScrollTo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var scrollTo = this.props.scrollTo;
      if (!scrollTo) return;
      this.scrollToElement();
    }

    /**
     * If the scrollTo prop is true (and has been updated) scroll to the selected element
    */
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var scrollTo = this.props.scrollTo;
      if (scrollTo && prevProps.scrollTo !== scrollTo) {
        this.scrollToElement();
      }
    }

    /**
     * Return the getBoundingClientRect() of the containerRef prop
    */
  }, {
    key: "containerBoundingRect",
    value: function containerBoundingRect() {
      var containerRef = this.props.containerRef;
      if (!containerRef || !containerRef.current) return {};
      return containerRef.current.getBoundingClientRect();
    }

    /**
     * Return the getBoundingClientRect() of the scrollTo ref prop
    */
  }, {
    key: "scrollToBoundingRect",
    value: function scrollToBoundingRect() {
      if (!this.elementToScrollTo()) return {};
      return this.elementToScrollTo().getBoundingClientRect();
    }

    /**
     * Return the current scrollToRef
    */
  }, {
    key: "elementToScrollTo",
    value: function elementToScrollTo() {
      if (!this.scrollToRef || !this.scrollToRef.current) return null;
      return this.scrollToRef.current;
    }

    /**
     * The container provided in the containersRef dom structure in which scrolling
     * should happen.
    */
  }, {
    key: "scrollableContainer",
    value: function scrollableContainer() {
      var containerRef = this.props.containerRef;
      if (!containerRef || !containerRef.current) return null;
      return containerRef.current.getElementsByClassName('mirador-scrollto-scrollable')[0];
    }

    /**
     * Determine if the scrollTo element is visible within the given containerRef prop.
     * Currently only supports vertical elements but could be extended to support horizontal
    */
  }, {
    key: "elementIsVisible",
    value: function elementIsVisible() {
      var offsetTop = this.props.offsetTop;
      if (this.scrollToBoundingRect().top < this.containerBoundingRect().top + offsetTop) {
        return false;
      }
      if (this.scrollToBoundingRect().bottom > this.containerBoundingRect().bottom) {
        return false;
      }
      return true;
    }

    /**
     * Scroll to the element if it is set to be scolled and is not visible
    */
  }, {
    key: "scrollToElement",
    value: function scrollToElement() {
      var _this$props = this.props,
        offsetTop = _this$props.offsetTop,
        scrollTo = _this$props.scrollTo;
      if (!scrollTo) return;
      if (!this.elementToScrollTo()) return;
      if (this.elementIsVisible()) return;
      if (!this.scrollableContainer()) return;
      var scrollBy = this.elementToScrollTo().offsetTop - this.containerBoundingRect().height / 2 + offsetTop;
      this.scrollableContainer().scrollTo(0, scrollBy);
    }

    /**
     * Returns the rendered component
    */
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        children = _this$props2.children,
        containerRef = _this$props2.containerRef,
        offsetTop = _this$props2.offsetTop,
        scrollTo = _this$props2.scrollTo,
        nodeId = _this$props2.nodeId,
        otherProps = _objectWithoutProperties(_this$props2, _excluded);
      if (!scrollTo && (0, _isEmpty["default"])(otherProps)) return children;
      return /*#__PURE__*/(0, _react.cloneElement)(children, _objectSpread({
        ref: this.scrollToRef
      }, otherProps));
    }
  }]);
  return ScrollTo;
}(_react.Component);
ScrollTo.defaultProps = {
  offsetTop: 0
};