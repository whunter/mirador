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
import Chip from '@mui/material/Chip';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import SanitizedHtml from '../containers/SanitizedHtml';
import { ScrollTo } from './ScrollTo';

/**
 * CanvasAnnotations ~
*/
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var CanvasAnnotations = /*#__PURE__*/function (_Component) {
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
      return /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx(Typography, {
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
        }), /*#__PURE__*/_jsx(MenuList, {
          autoFocusItem: true,
          variant: "selectedMenu",
          children: annotations.map(function (annotation) {
            return /*#__PURE__*/_jsx(ScrollTo, {
              containerRef: containerRef,
              offsetTop: 96 // offset for the height of the form above
              ,
              scrollTo: selectedAnnotationId === annotation.id,
              selected: selectedAnnotationId === annotation.id,
              children: /*#__PURE__*/_jsx(MenuItem, {
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
                children: /*#__PURE__*/_jsx(ListItemText, {
                  primaryTypographyProps: {
                    variant: 'body2'
                  },
                  primary: /*#__PURE__*/_jsx(SanitizedHtml, {
                    ruleSet: htmlSanitizationRuleSet,
                    htmlString: annotation.content
                  }),
                  secondary: annotation.tags.map(function (tag) {
                    return /*#__PURE__*/_jsx(Chip, {
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
}(Component);
CanvasAnnotations.defaultProps = {
  annotations: [],
  containerRef: undefined,
  hoveredAnnotationIds: [],
  htmlSanitizationRuleSet: 'iiif',
  listContainerComponent: 'li',
  selectedAnnotationId: undefined
};