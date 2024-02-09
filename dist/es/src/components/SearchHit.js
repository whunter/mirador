function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { Component } from 'react';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import SanitizedHtml from '../containers/SanitizedHtml';
import TruncatedHit from '../lib/TruncatedHit';
import { ScrollTo } from './ScrollTo';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
var Root = styled(ListItem, {
  name: 'SearchHit',
  slot: 'root'
})(function (_ref) {
  var ownerState = _ref.ownerState,
    theme = _ref.theme;
  return {
    '&.Mui-focused': _objectSpread({
      '&:hover': _objectSpread({}, ownerState.windowSelected && {
        backgroundColor: 'inherit'
      })
    }, ownerState.windowSelected && {
      backgroundColor: 'inherit'
    }),
    paddingRight: theme.spacing(1)
  };
});
var CanvasLabel = styled('h4', {
  name: 'SearchHit',
  slot: 'canvasLabel'
})(function (_ref2) {
  var theme = _ref2.theme;
  return {
    display: 'inline',
    marginBottom: theme.spacing(1.5)
  };
});
var Counter = styled(Chip, {
  name: 'SearchHit',
  slot: 'counter'
})(function (_ref3) {
  var ownerState = _ref3.ownerState,
    theme = _ref3.theme;
  return _objectSpread(_objectSpread(_objectSpread({
    // eslint-disable-next-line no-nested-ternary
    backgroundColor: theme.palette.hitCounter["default"]
  }, ownerState.windowSelected && {
    backgroundColor: theme.palette.highlights.primary
  }), ownerState.adjacent && !ownerState.windowSelected && {
    backgroundColor: theme.palette.highlights.secondary
  }), {}, {
    height: 30,
    marginRight: theme.spacing(1),
    typography: 'subtitle2',
    verticalAlign: 'inherit'
  });
});

/** */
export var SearchHit = /*#__PURE__*/function (_Component) {
  _inherits(SearchHit, _Component);
  /** */
  function SearchHit(props) {
    var _this;
    _classCallCheck(this, SearchHit);
    _this = _callSuper(this, SearchHit, [props]);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * Announce the annotation content if the component is mounted selected
   */
  _createClass(SearchHit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var selected = this.props.selected;
      if (selected) this.announceHit();
    }

    /**
     * Announce hit if the hit has been selected
     */
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var selected = this.props.selected;
      if (selected && selected !== prevProps.selected) {
        this.announceHit();
      }
    }

    /** */
  }, {
    key: "handleClick",
    value: function handleClick() {
      var _this$props = this.props,
        annotation = _this$props.annotation,
        annotationId = _this$props.annotationId,
        selectAnnotation = _this$props.selectAnnotation;
      if (annotation && annotationId) selectAnnotation(annotationId);
    }

    /**
     * Pass content describing the hit to the announcer prop (intended for screen readers)
     */
  }, {
    key: "announceHit",
    value: function announceHit() {
      var _this$props2 = this.props,
        annotation = _this$props2.annotation,
        annotationLabel = _this$props2.annotationLabel,
        announcer = _this$props2.announcer,
        canvasLabel = _this$props2.canvasLabel,
        hit = _this$props2.hit,
        index = _this$props2.index,
        t = _this$props2.t,
        total = _this$props2.total;
      if (!hit || !announcer) return;
      var truncatedHit = new TruncatedHit(hit, annotation);
      announcer([t('pagination', {
        current: index + 1,
        total: total
      }), canvasLabel, annotationLabel, truncatedHit.before, truncatedHit.match, truncatedHit.after].join(' '), 'polite');
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        adjacent = _this$props3.adjacent,
        annotation = _this$props3.annotation,
        annotationLabel = _this$props3.annotationLabel,
        canvasLabel = _this$props3.canvasLabel,
        companionWindowId = _this$props3.companionWindowId,
        containerRef = _this$props3.containerRef,
        hit = _this$props3.hit,
        focused = _this$props3.focused,
        index = _this$props3.index,
        showDetails = _this$props3.showDetails,
        selected = _this$props3.selected,
        t = _this$props3.t,
        windowSelected = _this$props3.windowSelected;
      if (focused && !selected) return null;
      var truncatedHit = focused ? hit : hit && new TruncatedHit(hit, annotation);
      var truncated = hit && (truncatedHit.before !== hit.before || truncatedHit.after !== hit.after);
      var canvasLabelHtmlId = "".concat(companionWindowId, "-").concat(index);
      var ownerState = {
        adjacent: adjacent,
        focused: focused,
        selected: selected,
        windowSelected: windowSelected
      };
      var header = /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx(Counter, {
          component: "span",
          ownerState: ownerState,
          label: index + 1
        }), /*#__PURE__*/_jsxs(CanvasLabel, {
          id: canvasLabelHtmlId,
          children: [canvasLabel, annotationLabel && /*#__PURE__*/_jsx(Typography, {
            component: "span",
            sx: {
              display: 'block',
              marginTop: 1
            },
            children: annotationLabel
          })]
        })]
      });
      return /*#__PURE__*/_jsx(ScrollTo, {
        containerRef: containerRef,
        offsetTop: 96 // offset for the height of the form above
        ,
        scrollTo: windowSelected && !focused,
        children: /*#__PURE__*/_jsx(Root, {
          ownerState: ownerState,
          className: windowSelected ? 'windowSelected' : '',
          divider: true,
          button: !selected,
          component: "li",
          onClick: this.handleClick,
          selected: selected,
          children: /*#__PURE__*/_jsx(ListItemText, {
            primary: header,
            primaryTypographyProps: {
              component: 'div',
              sx: {
                marginBottom: 1
              },
              variant: 'subtitle2'
            },
            secondaryTypographyProps: {
              variant: 'body1'
            },
            secondary: /*#__PURE__*/_jsxs(_Fragment, {
              children: [hit && /*#__PURE__*/_jsxs(_Fragment, {
                children: [/*#__PURE__*/_jsx(SanitizedHtml, {
                  ruleSet: "iiif",
                  htmlString: truncatedHit.before
                }), ' ', /*#__PURE__*/_jsx("strong", {
                  children: /*#__PURE__*/_jsx(SanitizedHtml, {
                    ruleSet: "iiif",
                    htmlString: truncatedHit.match
                  })
                }), ' ', /*#__PURE__*/_jsx(SanitizedHtml, {
                  ruleSet: "iiif",
                  htmlString: truncatedHit.after
                }), ' ', truncated && !focused && /*#__PURE__*/_jsx(Button, {
                  sx: {
                    '& span': {
                      lineHeight: '1.5em'
                    },
                    margin: 0,
                    padding: 0,
                    textTransform: 'none'
                  },
                  onClick: showDetails,
                  color: "secondary",
                  size: "small",
                  "aria-describedby": canvasLabelHtmlId,
                  children: t('more')
                })]
              }), !hit && annotation && /*#__PURE__*/_jsx(SanitizedHtml, {
                ruleSet: "iiif",
                htmlString: annotation.chars
              })]
            })
          })
        })
      });
    }
  }]);
  return SearchHit;
}(Component);
SearchHit.defaultProps = {
  adjacent: false,
  annotation: undefined,
  annotationId: undefined,
  annotationLabel: undefined,
  announcer: undefined,
  canvasLabel: undefined,
  companionWindowId: undefined,
  containerRef: undefined,
  focused: false,
  hit: undefined,
  index: undefined,
  selectAnnotation: function selectAnnotation() {},
  selected: false,
  showDetails: function showDetails() {},
  t: function t(k) {
    return k;
  },
  total: undefined,
  windowSelected: false
};