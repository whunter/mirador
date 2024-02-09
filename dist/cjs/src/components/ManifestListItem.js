"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ManifestListItem = void 0;
var _react = require("react");
var _styles = require("@mui/material/styles");
var _ListItem = _interopRequireDefault(require("@mui/material/ListItem"));
var _ButtonBase = _interopRequireDefault(require("@mui/material/ButtonBase"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Skeleton = _interopRequireDefault(require("@mui/material/Skeleton"));
var _reactImage = require("react-image");
var _ManifestListItemError = _interopRequireDefault(require("../containers/ManifestListItemError"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Root = (0, _styles.styled)(_ListItem["default"], {
  name: 'ManifestListItem',
  slot: 'root'
})(function (_ref) {
  var ownerState = _ref.ownerState,
    theme = _ref.theme;
  return _defineProperty({
    '&:hover,&:focus-within': {
      backgroundColor: theme.palette.action.hover,
      borderLeftColor: ownerState !== null && ownerState !== void 0 && ownerState.active ? theme.palette.primary.main : theme.palette.action.hover
    },
    borderLeft: '4px solid',
    borderLeftColor: ownerState !== null && ownerState !== void 0 && ownerState.active ? theme.palette.primary.main : 'transparent',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }, theme.breakpoints.up('sm'), {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  });
});
var StyledThumbnail = (0, _styles.styled)(_reactImage.Img, {
  name: 'ManifestListItem',
  slot: 'thumbnail'
})(function (_ref3) {
  var theme = _ref3.theme;
  return {
    maxWidth: '100%',
    objectFit: 'contain'
  };
});
var StyledLogo = (0, _styles.styled)(_reactImage.Img, {
  name: 'ManifestListItem',
  slot: 'logo'
})(function (_ref4) {
  var theme = _ref4.theme;
  return {
    height: '2.5rem',
    maxWidth: '100%',
    objectFit: 'contain',
    paddingRight: 1
  };
});

/**
 * Represents an item in a list of currently-loaded or loading manifests
 * @param {object} props
 * @param {object} [props.manifest = string]
 */

/** */
var ManifestListItem = exports.ManifestListItem = /*#__PURE__*/function (_Component) {
  _inherits(ManifestListItem, _Component);
  /** */
  function ManifestListItem(props) {
    var _this;
    _classCallCheck(this, ManifestListItem);
    _this = _callSuper(this, ManifestListItem, [props]);
    _this.handleOpenButtonClick = _this.handleOpenButtonClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  /** */
  _createClass(ManifestListItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        fetchManifest = _this$props.fetchManifest,
        manifestId = _this$props.manifestId,
        ready = _this$props.ready,
        isFetching = _this$props.isFetching,
        error = _this$props.error,
        provider = _this$props.provider;
      if (!ready && !error && !isFetching && provider !== 'file') fetchManifest(manifestId);
    }

    /**
     * Handling open button click
     */
  }, {
    key: "handleOpenButtonClick",
    value: function handleOpenButtonClick() {
      var _this$props2 = this.props,
        addWindow = _this$props2.addWindow,
        handleClose = _this$props2.handleClose,
        manifestId = _this$props2.manifestId;
      addWindow({
        manifestId: manifestId
      });
      handleClose();
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        active = _this$props3.active,
        buttonRef = _this$props3.buttonRef,
        manifestId = _this$props3.manifestId,
        ready = _this$props3.ready,
        title = _this$props3.title,
        thumbnail = _this$props3.thumbnail,
        manifestLogo = _this$props3.manifestLogo,
        size = _this$props3.size,
        provider = _this$props3.provider,
        t = _this$props3.t,
        error = _this$props3.error,
        isCollection = _this$props3.isCollection,
        isMultipart = _this$props3.isMultipart;
      var placeholder = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid["default"], {
        container: true,
        className: (0, _cssNs["default"])('manifest-list-item'),
        spacing: 2,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid["default"], {
          item: true,
          xs: 3,
          sm: 2,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Skeleton["default"], {
            sx: {
              bgcolor: 'grey[300]'
            },
            variant: "rectangular",
            height: 80,
            width: 120
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid["default"], {
          item: true,
          xs: 9,
          sm: 6,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Skeleton["default"], {
            sx: {
              bgcolor: 'grey[300]'
            },
            variant: "text"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid["default"], {
          item: true,
          xs: 8,
          sm: 2,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Skeleton["default"], {
            sx: {
              bgcolor: 'grey[300]'
            },
            variant: "text"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Skeleton["default"], {
            sx: {
              bgcolor: 'grey[300]'
            },
            variant: "text"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid["default"], {
          item: true,
          xs: 4,
          sm: 2,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Skeleton["default"], {
            sx: {
              bgcolor: 'grey[300]'
            },
            variant: "rectangular",
            height: 60,
            width: 60
          })
        })]
      });
      if (error) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, {
          ownerState: this.props,
          divider: true,
          selected: active,
          className: active ? 'active' : '',
          "data-manifestid": manifestId,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ManifestListItemError["default"], {
            manifestId: manifestId
          })
        });
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, {
        divider: true,
        selected: active,
        className: active ? 'active' : '',
        "data-manifestid": manifestId,
        "data-active": active,
        children: ready ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid["default"], {
          container: true,
          className: (0, _cssNs["default"])('manifest-list-item'),
          spacing: 2,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid["default"], {
            item: true,
            xs: 12,
            sm: 6,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonBase["default"], {
              ref: buttonRef,
              className: (0, _cssNs["default"])('manifest-list-item-title'),
              style: {
                width: '100%'
              },
              onClick: this.handleOpenButtonClick,
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid["default"], {
                container: true,
                spacing: 2,
                sx: {
                  textAlign: 'left',
                  textTransform: 'initial'
                },
                component: "span",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid["default"], {
                  item: true,
                  xs: 4,
                  sm: 3,
                  component: "span",
                  children: thumbnail ? /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledThumbnail, {
                    className: [(0, _cssNs["default"])('manifest-list-item-thumb')],
                    src: [thumbnail],
                    alt: "",
                    height: "80",
                    unloader: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Skeleton["default"], {
                      variant: "rectangular",
                      animation: false,
                      sx: {
                        bgcolor: 'grey[300]'
                      },
                      height: 80,
                      width: 120
                    })
                  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Skeleton["default"], {
                    sx: {
                      bgcolor: 'grey[300]'
                    },
                    variant: "rectangular",
                    height: 80,
                    width: 120
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid["default"], {
                  item: true,
                  xs: 8,
                  sm: 9,
                  component: "span",
                  children: [isCollection && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
                    component: "div",
                    variant: "overline",
                    children: t(isMultipart ? 'multipartCollection' : 'collection')
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
                    component: "span",
                    variant: "h6",
                    children: title || manifestId
                  })]
                })]
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid["default"], {
            item: true,
            xs: 8,
            sm: 4,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
              className: (0, _cssNs["default"])('manifest-list-item-provider'),
              children: provider
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
              children: t('numItems', {
                count: size,
                number: size
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid["default"], {
            item: true,
            xs: 4,
            sm: 2,
            children: manifestLogo && /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledLogo, {
              src: [manifestLogo],
              alt: "",
              role: "presentation",
              unloader: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Skeleton["default"], {
                variant: "rectangular",
                animation: false,
                sx: {
                  bgcolor: 'grey[300]'
                },
                height: 60,
                width: 60
              })
            })
          })]
        }) : placeholder
      });
    }
  }]);
  return ManifestListItem;
}(_react.Component);
ManifestListItem.defaultProps = {
  active: false,
  buttonRef: undefined,
  error: null,
  handleClose: function handleClose() {},
  isCollection: false,
  isFetching: false,
  isMultipart: false,
  manifestLogo: null,
  provider: null,
  ready: false,
  size: 0,
  t: function t(key) {
    return key;
  },
  thumbnail: null,
  title: null
};