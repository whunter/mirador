"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanvasAnnotations = void 0;
var _react = require("react");
var _Chip = _interopRequireDefault(require("@mui/material/Chip"));
var _MenuList = _interopRequireDefault(require("@mui/material/MenuList"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _ListItemText = _interopRequireDefault(require("@mui/material/ListItemText"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _SanitizedHtml = _interopRequireDefault(require("../containers/SanitizedHtml"));
var _ScrollTo = require("./ScrollTo");
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
 * CanvasAnnotations ~
*/
var CanvasAnnotations = exports.CanvasAnnotations = /*#__PURE__*/function (_Component) {
  _inherits(CanvasAnnotations, _Component);
  /**
   * constructor -
   */
  function CanvasAnnotations(props) {
    var _this;
    _classCallCheck(this, CanvasAnnotations);
    _this = _callSuper(this, CanvasAnnotations, [props]);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleAnnotationHover = _this.handleAnnotationHover.bind(_assertThisInitialized(_this));
    _this.handleAnnotationBlur = _this.handleAnnotationBlur.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * Handle click event of an annotation.
  */
  _createClass(CanvasAnnotations, [{
    key: "handleClick",
    value: function handleClick(event, annotation) {
      var _this$props = this.props,
        deselectAnnotation = _this$props.deselectAnnotation,
        selectAnnotation = _this$props.selectAnnotation,
        selectedAnnotationId = _this$props.selectedAnnotationId,
        windowId = _this$props.windowId;
      if (selectedAnnotationId === annotation.id) {
        deselectAnnotation(windowId, annotation.id);
      } else {
        selectAnnotation(windowId, annotation.id);
      }
    }

    /** */
  }, {
    key: "handleAnnotationHover",
    value: function handleAnnotationHover(annotation) {
      var _this$props2 = this.props,
        hoverAnnotation = _this$props2.hoverAnnotation,
        windowId = _this$props2.windowId;
      hoverAnnotation(windowId, [annotation.id]);
    }

    /** */
  }, {
    key: "handleAnnotationBlur",
    value: function handleAnnotationBlur() {
      var _this$props3 = this.props,
        hoverAnnotation = _this$props3.hoverAnnotation,
        windowId = _this$props3.windowId;
      hoverAnnotation(windowId, []);
    }

    /**
     * Returns the rendered component
    */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props4 = this.props,
        annotations = _this$props4.annotations,
        index = _this$props4.index,
        label = _this$props4.label,
        selectedAnnotationId = _this$props4.selectedAnnotationId,
        t = _this$props4.t,
        totalSize = _this$props4.totalSize,
        listContainerComponent = _this$props4.listContainerComponent,
        htmlSanitizationRuleSet = _this$props4.htmlSanitizationRuleSet,
        hoveredAnnotationIds = _this$props4.hoveredAnnotationIds,
        containerRef = _this$props4.containerRef;
      if (annotations.length === 0) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
          sx: {
            paddingLeft: 2,
            paddingRight: 1,
            paddingTop: 2
          },
          variant: "overline",
          children: t('annotationCanvasLabel', {
            context: "".concat(index + 1, "/").concat(totalSize),
            label: label
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuList["default"], {
          autoFocusItem: true,
          variant: "selectedMenu",
          children: annotations.map(function (annotation) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ScrollTo.ScrollTo, {
              containerRef: containerRef,
              offsetTop: 96 // offset for the height of the form above
              ,
              scrollTo: selectedAnnotationId === annotation.id,
              selected: selectedAnnotationId === annotation.id,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem["default"], {
                component: listContainerComponent,
                variant: "multiline",
                divider: true,
                sx: {
                  '&:hover,&:focus': {
                    backgroundColor: 'action.hover'
                  },
                  backgroundColor: hoveredAnnotationIds.includes(annotation.id) ? 'action.hover' : ''
                },
                annotationid: annotation.id,
                onClick: function onClick(e) {
                  return _this2.handleClick(e, annotation);
                },
                onFocus: function onFocus() {
                  return _this2.handleAnnotationHover(annotation);
                },
                onBlur: _this2.handleAnnotationBlur,
                onMouseEnter: function onMouseEnter() {
                  return _this2.handleAnnotationHover(annotation);
                },
                onMouseLeave: _this2.handleAnnotationBlur,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItemText["default"], {
                  primaryTypographyProps: {
                    variant: 'body2'
                  },
                  primary: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SanitizedHtml["default"], {
                    ruleSet: htmlSanitizationRuleSet,
                    htmlString: annotation.content
                  }),
                  secondary: annotation.tags.map(function (tag) {
                    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip["default"], {
                      component: "span",
                      size: "small",
                      variant: "outlined",
                      label: tag,
                      id: tag
                    }, tag.toString());
                  })
                })
              }, annotation.id)
            }, "".concat(annotation.id, "-scroll"));
          })
        })]
      });
    }
  }]);
  return CanvasAnnotations;
}(_react.Component);
CanvasAnnotations.defaultProps = {
  annotations: [],
  containerRef: undefined,
  hoveredAnnotationIds: [],
  htmlSanitizationRuleSet: 'iiif',
  listContainerComponent: 'li',
  selectedAnnotationId: undefined
};