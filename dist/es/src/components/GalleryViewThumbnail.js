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
import { createRef, Component } from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import AnnotationIcon from '@mui/icons-material/CommentSharp';
import SearchIcon from '@mui/icons-material/SearchSharp';
import { InView } from 'react-intersection-observer';
import IIIFThumbnail from '../containers/IIIFThumbnail';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Root = styled('div', {
  name: 'GalleryView',
  slot: 'thumbnail'
})(function (_ref) {
  var ownerState = _ref.ownerState,
    theme = _ref.theme;
  return _objectSpread(_objectSpread(_objectSpread({
    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover
    },
    border: '2px solid transparent'
  }, ownerState.selected && {
    borderColor: theme.palette.primary.main
  }), !ownerState.selected && ownerState.searchAnnotationsCount > 0 && {
    borderColor: theme.palette.action.selected
  }), {}, {
    cursor: 'pointer',
    display: 'inline-block',
    margin: theme.spacing(1, 0.5),
    maxHeight: ownerState.config.height + 45,
    minWidth: '60px',
    overflow: 'hidden',
    padding: theme.spacing(0.5),
    position: 'relative',
    width: 'min-content'
  });
});
var StyledChipsContainer = styled('div', {
  name: 'GalleryView',
  slot: 'chipArea'
})(function (_ref2) {
  var theme = _ref2.theme;
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.25),
    position: 'absolute',
    right: 0,
    top: 0
  };
});
var AnnotationChip = styled(Chip, {
  name: 'GalleryView',
  slot: 'chip'
})(function (_ref3) {
  var theme = _ref3.theme;
  return {
    backgroundColor: theme.palette.annotations.chipBackground,
    opacity: 0.875,
    textAlign: 'right'
  };
});

/**
 * Represents a WindowViewer in the mirador workspace. Responsible for mounting
 * OSD and Navigation
 */
export var GalleryViewThumbnail = /*#__PURE__*/function (_Component) {
  _inherits(GalleryViewThumbnail, _Component);
  /** */
  function GalleryViewThumbnail(props) {
    var _this;
    _classCallCheck(this, GalleryViewThumbnail);
    _this = _callSuper(this, GalleryViewThumbnail, [props]);
    _this.myRef = /*#__PURE__*/createRef();
    _this.state = {
      requestedAnnotations: false
    };
    _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_this));
    _this.handleKey = _this.handleKey.bind(_assertThisInitialized(_this));
    _this.handleIntersection = _this.handleIntersection.bind(_assertThisInitialized(_this));
    return _this;
  }

  // eslint-disable-next-line require-jsdoc
  _createClass(GalleryViewThumbnail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var selected = this.props.selected;
      if (selected) {
        var _this$myRef$current;
        (_this$myRef$current = this.myRef.current) === null || _this$myRef$current === void 0 || _this$myRef$current.scrollIntoView(true);
      }
    }

    /** @private */
  }, {
    key: "handleSelect",
    value: function handleSelect() {
      var _this$props = this.props,
        canvas = _this$props.canvas,
        selected = _this$props.selected,
        setCanvas = _this$props.setCanvas,
        focusOnCanvas = _this$props.focusOnCanvas;
      if (selected) {
        focusOnCanvas();
      } else {
        setCanvas(canvas.id);
      }
    }

    /** @private */
  }, {
    key: "handleKey",
    value: function handleKey(event) {
      var _this$props2 = this.props,
        canvas = _this$props2.canvas,
        setCanvas = _this$props2.setCanvas,
        focusOnCanvas = _this$props2.focusOnCanvas;
      this.keys = {
        enter: 'Enter',
        space: ' '
      };
      this.chars = {
        enter: 13,
        space: 32
      };
      var enterOrSpace = event.key === this.keys.enter || event.which === this.chars.enter || event.key === this.keys.space || event.which === this.chars.space;
      if (enterOrSpace) {
        focusOnCanvas();
      } else {
        setCanvas(canvas.id);
      }
    }

    /** */
  }, {
    key: "handleIntersection",
    value: function handleIntersection(_inView, _ref4) {
      var isIntersecting = _ref4.isIntersecting;
      var _this$props3 = this.props,
        annotationsCount = _this$props3.annotationsCount,
        requestCanvasAnnotations = _this$props3.requestCanvasAnnotations;
      var requestedAnnotations = this.state.requestedAnnotations;
      if (!isIntersecting || annotationsCount === undefined || annotationsCount > 0 || requestedAnnotations) return;
      this.setState({
        requestedAnnotations: true
      });
      requestCanvasAnnotations();
    }

    /**
     * Renders things
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        annotationsCount = _this$props4.annotationsCount,
        searchAnnotationsCount = _this$props4.searchAnnotationsCount,
        canvas = _this$props4.canvas,
        config = _this$props4.config,
        selected = _this$props4.selected;
      return /*#__PURE__*/_jsx(InView, {
        onChange: this.handleIntersection,
        children: /*#__PURE__*/_jsx(Root, {
          ownerState: this.props,
          className: selected ? 'selected' : '',
          onClick: this.handleSelect,
          onKeyUp: this.handleKey,
          ref: this.myRef,
          role: "button",
          tabIndex: 0,
          children: /*#__PURE__*/_jsx(IIIFThumbnail, {
            resource: canvas,
            labelled: true,
            variant: "outside",
            maxHeight: config.height,
            maxWidth: config.width,
            children: /*#__PURE__*/_jsxs(StyledChipsContainer, {
              children: [searchAnnotationsCount > 0 && /*#__PURE__*/_jsx(AnnotationChip, {
                icon: /*#__PURE__*/_jsx(SearchIcon, {
                  fontSize: "small"
                }),
                label: searchAnnotationsCount,
                size: "small"
              }), annotationsCount > 0 && /*#__PURE__*/_jsx(AnnotationChip, {
                icon: /*#__PURE__*/_jsx(AnnotationIcon, {
                  fontSize: "small"
                }),
                label: annotationsCount,
                size: "small"
              })]
            })
          })
        }, canvas.id || canvas.index)
      });
    }
  }]);
  return GalleryViewThumbnail;
}(Component);
GalleryViewThumbnail.defaultProps = {
  annotationsCount: undefined,
  config: {
    height: 100,
    width: null
  },
  requestCanvasAnnotations: function requestCanvasAnnotations() {},
  searchAnnotationsCount: 0,
  selected: false
};