"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceAdd = void 0;
var _react = require("react");
var _styles = require("@mui/material/styles");
var _classnames = _interopRequireDefault(require("classnames"));
var _AddSharp = _interopRequireDefault(require("@mui/icons-material/AddSharp"));
var _ExpandMoreSharp = _interopRequireDefault(require("@mui/icons-material/ExpandMoreSharp"));
var _AppBar = _interopRequireDefault(require("@mui/material/AppBar"));
var _Drawer = _interopRequireDefault(require("@mui/material/Drawer"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Fab = _interopRequireDefault(require("@mui/material/Fab"));
var _List = _interopRequireDefault(require("@mui/material/List"));
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _Toolbar = _interopRequireDefault(require("@mui/material/Toolbar"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _utils = require("@mui/utils");
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
var _ManifestForm = _interopRequireDefault(require("../containers/ManifestForm"));
var _ManifestListItem = _interopRequireDefault(require("../containers/ManifestListItem"));
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
var _IIIFDropTarget = require("./IIIFDropTarget");
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
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var StyledWorkspaceAdd = (0, _styles.styled)('div')(function () {
  return {
    boxSizing: 'border-box',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto'
  };
});
var StyledMiradorMenuButton = (0, _styles.styled)(_MiradorMenuButton["default"])(function () {
  return {
    marginLeft: -12,
    marginRight: 20
  };
});
/**
 * An area for managing manifests and adding them to workspace
 * @memberof Workspace
 * @private
 */
var WorkspaceAdd = exports.WorkspaceAdd = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceAdd, _Component);
  /** */
  function WorkspaceAdd(props) {
    var _this;
    _classCallCheck(this, WorkspaceAdd);
    _this = _callSuper(this, WorkspaceAdd, [props]);
    _this.state = {
      addResourcesOpen: false
    };
    _this.ref = /*#__PURE__*/(0, _react.createRef)();
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.setAddResourcesVisibility = _this.setAddResourcesVisibility.bind(_assertThisInitialized(_this));
    _this.handleDrop = _this.handleDrop.bind(_assertThisInitialized(_this));
    return _this;
  }

  /** */
  _createClass(WorkspaceAdd, [{
    key: "handleDrop",
    value: function handleDrop(_ref, props, monitor) {
      var manifestId = _ref.manifestId,
        manifestJson = _ref.manifestJson;
      var addResource = this.props.addResource;
      if (manifestJson) {
        addResource(manifestId, manifestJson, {
          provider: 'file'
        });
      } else {
        addResource(manifestId);
      }
      this.scrollToTop();
    }

    /** @private */
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      this.setAddResourcesVisibility(false);
      this.scrollToTop();
    }

    /**
     * @private
     */
  }, {
    key: "setAddResourcesVisibility",
    value: function setAddResourcesVisibility(bool) {
      this.setState({
        addResourcesOpen: bool
      });
    }

    /** Scroll the list back to the top */
  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      if (this.ref.current) {
        var el = this.ref.current;
        el.scrollTo({
          behavior: 'smooth',
          left: 0,
          top: 0
        });
      }
    }

    /**
     * render
     */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        catalog = _this$props.catalog,
        setWorkspaceAddVisibility = _this$props.setWorkspaceAddVisibility,
        t = _this$props.t;
      var addResourcesOpen = this.state.addResourcesOpen;
      var manifestList = catalog.map(function (resource, index) {
        return /*#__PURE__*/(0, _react.createElement)(_ManifestListItem["default"], _objectSpread(_objectSpread({}, index === 0 && {
          buttonRef: function buttonRef(ref) {
            return ref && ref.focus();
          }
        }), {}, {
          key: resource.manifestId,
          manifestId: resource.manifestId,
          provider: resource.provider,
          handleClose: function handleClose() {
            return setWorkspaceAddVisibility(false);
          }
        }));
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_IIIFDropTarget.IIIFDropTarget, {
        onDrop: this.handleDrop,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(StyledWorkspaceAdd, {
          ref: this.ref,
          className: (0, _classnames["default"])((0, _cssNs["default"])('workspace-add')),
          children: [catalog.length < 1 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid["default"], {
            alignItems: "center",
            container: true,
            style: {
              height: '100%'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid["default"], {
              xs: 12,
              item: true,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
                variant: "h1",
                component: "div",
                align: "center",
                children: t('emptyResourceList')
              })
            })
          }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Paper["default"], {
            sx: {
              margin: 2
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
              style: _utils.visuallyHidden,
              component: "h1",
              children: t('miradorResources')
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PluginHook.PluginHook, _objectSpread({}, this.props)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_List["default"], {
              disablePadding: true,
              children: manifestList
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Fab["default"], {
            variant: "extended",
            disabled: addResourcesOpen,
            sx: function sx(theme) {
              return {
                bottom: theme.spacing(2),
                position: 'absolute',
                right: theme.spacing(2)
              };
            },
            className: (0, _classnames["default"])((0, _cssNs["default"])('add-resource-button')),
            color: "primary",
            onClick: function onClick() {
              return _this2.setAddResourcesVisibility(true);
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_AddSharp["default"], {}), t('addResource')]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drawer["default"], {
            sx: function sx(theme) {
              return _objectSpread({
                '.MuiDrawer-paper': _defineProperty({
                  borderTop: '0',
                  left: '0'
                }, theme.breakpoints.up('sm'), {
                  left: '65px'
                })
              }, !addResourcesOpen && {
                display: 'none'
              });
            },
            variant: "persistent",
            anchor: "bottom",
            open: addResourcesOpen,
            ModalProps: {
              disablePortal: true,
              hideBackdrop: true,
              style: {
                position: 'absolute'
              }
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Paper["default"], {
              sx: {
                left: '0',
                marginTop: 6,
                paddingBottom: 2,
                paddingLeft: {
                  sm: 3,
                  xs: 2
                },
                paddingRight: {
                  sm: 3,
                  xs: 2
                },
                paddingTop: 2,
                right: '0'
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_AppBar["default"], {
                position: "absolute",
                color: "primary",
                enableColorOnDark: true,
                onClick: function onClick() {
                  return _this2.setAddResourcesVisibility(false);
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Toolbar["default"], {
                  variant: "dense",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(StyledMiradorMenuButton, {
                    "aria-label": t('closeAddResourceForm'),
                    color: "inherit",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExpandMoreSharp["default"], {})
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
                    variant: "h2",
                    noWrap: true,
                    color: "inherit",
                    sx: {
                      flexGrow: 1
                    },
                    children: t('addResource')
                  })]
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ManifestForm["default"], {
                addResourcesOpen: addResourcesOpen,
                onSubmit: this.onSubmit,
                onCancel: function onCancel() {
                  return _this2.setAddResourcesVisibility(false);
                }
              })]
            })
          })]
        })
      });
    }
  }]);
  return WorkspaceAdd;
}(_react.Component);
WorkspaceAdd.defaultProps = {
  addResource: function addResource() {},
  catalog: [],
  t: function t(key) {
    return key;
  }
};