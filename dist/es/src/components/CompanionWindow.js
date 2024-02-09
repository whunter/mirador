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
import { Children, cloneElement, Component } from 'react';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/CloseSharp';
import OpenInNewIcon from '@mui/icons-material/OpenInNewSharp';
import MoveIcon from '@mui/icons-material/DragIndicatorSharp';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { Rnd } from 'react-rnd';
import MiradorMenuButton from '../containers/MiradorMenuButton';
import ns from '../config/css-ns';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Root = styled(Paper, {
  name: 'CompanionWindow',
  slot: 'root'
})({});
var StyledToolbar = styled(Toolbar, {
  name: 'CompanionWindow',
  slot: 'toolbar'
})({});
var StyledTitle = styled(Typography, {
  name: 'CompanionWindow',
  slot: 'title'
})({});
var StyledTitleControls = styled('div', {
  name: 'CompanionWindow',
  slot: 'controls'
})({});
var Contents = styled(Paper, {
  name: 'CompanionWindow',
  slot: 'contents'
})({});
var StyledRnd = styled(Rnd, {
  name: 'CompanionWindow',
  slot: 'resize'
})({});
var StyledPositionButton = styled(MiradorMenuButton, {
  name: 'CompanionWindow',
  slot: 'positionButton'
})({});
var StyledCloseButton = styled(MiradorMenuButton, {
  name: 'CompanionWindow',
  slot: 'closeButton'
})({});

/**
 * CompanionWindow
 */
export var CompanionWindow = /*#__PURE__*/function (_Component) {
  _inherits(CompanionWindow, _Component);
  function CompanionWindow() {
    _classCallCheck(this, CompanionWindow);
    return _callSuper(this, CompanionWindow, arguments);
  }
  _createClass(CompanionWindow, [{
    key: "openInNewStyle",
    value: /** */
    function openInNewStyle() {
      var direction = this.props.direction;
      if (direction === 'rtl') return {
        transform: 'scale(-1, 1)'
      };
      return {};
    }

    /** */
  }, {
    key: "resizeHandles",
    value: function resizeHandles() {
      var _this$props = this.props,
        direction = _this$props.direction,
        position = _this$props.position;
      var positions = {
        ltr: {
          "default": 'left',
          opposite: 'right'
        },
        rtl: {
          "default": 'right',
          opposite: 'left'
        }
      };
      var base = {
        bottom: false,
        bottomLeft: false,
        bottomRight: false,
        left: false,
        right: false,
        top: false,
        topLeft: false,
        topRight: false
      };
      if (position === 'right' || position === 'far-right') {
        return _objectSpread(_objectSpread({}, base), {}, _defineProperty({}, positions[direction]["default"], true));
      }
      if (position === 'left') {
        return _objectSpread(_objectSpread({}, base), {}, _defineProperty({}, positions[direction].opposite, true));
      }
      if (position === 'bottom' || position === 'far-bottom') {
        return _objectSpread(_objectSpread({}, base), {}, {
          top: true
        });
      }
      return base;
    }

    /**
     * render
     * @return
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        ariaLabel = _this$props2.ariaLabel,
        classes = _this$props2.classes,
        paperClassName = _this$props2.paperClassName,
        onCloseClick = _this$props2.onCloseClick,
        updateCompanionWindow = _this$props2.updateCompanionWindow,
        isDisplayed = _this$props2.isDisplayed,
        position = _this$props2.position,
        t = _this$props2.t,
        title = _this$props2.title,
        children = _this$props2.children,
        titleControls = _this$props2.titleControls,
        size = _this$props2.size,
        defaultSidebarPanelWidth = _this$props2.defaultSidebarPanelWidth,
        defaultSidebarPanelHeight = _this$props2.defaultSidebarPanelHeight,
        innerRef = _this$props2.innerRef;
      var isBottom = position === 'bottom' || position === 'far-bottom';
      var childrenWithAdditionalProps = Children.map(children, function (child) {
        if (!child) return null;
        return /*#__PURE__*/cloneElement(child, {
          parentactions: {
            closeCompanionWindow: onCloseClick
          }
        });
      });
      return /*#__PURE__*/_jsx(Root, {
        ownerState: this.props,
        ref: innerRef,
        style: {
          display: isDisplayed ? null : 'none',
          order: position === 'left' ? -1 : null
        },
        className: [ns("companion-window-".concat(position)), paperClassName, position === 'bottom' ? classes.horizontal : classes.vertical].join(' '),
        square: true,
        component: "aside",
        "aria-label": ariaLabel || title,
        children: /*#__PURE__*/_jsxs(StyledRnd, {
          style: {
            display: 'inherit',
            position: 'inherit'
          },
          ownerState: this.props,
          "default": {
            height: isBottom ? defaultSidebarPanelHeight : '100%',
            width: isBottom ? 'auto' : defaultSidebarPanelWidth
          },
          disableDragging: true,
          enableResizing: this.resizeHandles(),
          minHeight: 50,
          minWidth: position === 'left' ? 235 : 100,
          children: [/*#__PURE__*/_jsxs(StyledToolbar, {
            variant: "dense",
            className: [ns('companion-window-header'), size.width < 370 ? classes.small : null].join(' '),
            disableGutters: true,
            children: [/*#__PURE__*/_jsx(StyledTitle, {
              variant: "h3",
              children: title
            }), position === 'left' ? updateCompanionWindow && /*#__PURE__*/_jsx(MiradorMenuButton, {
              "aria-label": t('openInCompanionWindow'),
              onClick: function onClick() {
                updateCompanionWindow({
                  position: 'right'
                });
              },
              children: /*#__PURE__*/_jsx(OpenInNewIcon, {
                style: this.openInNewStyle()
              })
            }) : /*#__PURE__*/_jsxs(_Fragment, {
              children: [updateCompanionWindow && /*#__PURE__*/_jsx(StyledPositionButton, {
                "aria-label": position === 'bottom' ? t('moveCompanionWindowToRight') : t('moveCompanionWindowToBottom'),
                onClick: function onClick() {
                  updateCompanionWindow({
                    position: position === 'bottom' ? 'right' : 'bottom'
                  });
                },
                children: /*#__PURE__*/_jsx(MoveIcon, {})
              }), /*#__PURE__*/_jsx(StyledCloseButton, {
                sx: _objectSpread({}, size.width < 370 && {
                  order: 'unset'
                }),
                "aria-label": t('closeCompanionWindow'),
                onClick: onCloseClick,
                children: /*#__PURE__*/_jsx(CloseIcon, {})
              })]
            }), titleControls && /*#__PURE__*/_jsx(StyledTitleControls, {
              ownerState: {
                position: position
              },
              sx: {
                order: isBottom || size.width < 370 ? 'unset' : 1000
              },
              className: ns('companion-window-title-controls'),
              children: titleControls
            })]
          }), /*#__PURE__*/_jsx(Contents, {
            className: ns('scrollto-scrollable'),
            elevation: 0,
            children: childrenWithAdditionalProps
          })]
        })
      });
    }
  }]);
  return CompanionWindow;
}(Component);
CompanionWindow.defaultProps = {
  ariaLabel: undefined,
  children: undefined,
  classes: {},
  defaultSidebarPanelHeight: 201,
  defaultSidebarPanelWidth: 235,
  innerRef: undefined,
  isDisplayed: false,
  onCloseClick: function onCloseClick() {},
  paperClassName: '',
  position: null,
  size: {},
  t: function t(key) {
    return key;
  },
  title: null,
  titleControls: null,
  updateCompanionWindow: undefined
};