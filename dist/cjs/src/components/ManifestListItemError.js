"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ManifestListItemError = void 0;
var _react = require("react");
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _ErrorOutlineSharp = _interopRequireDefault(require("@mui/icons-material/ErrorOutlineSharp"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /**
 * ManifestListItemError renders a component displaying a
 * message to the user about a problem loading a manifest
*/
var ManifestListItemError = exports.ManifestListItemError = /*#__PURE__*/function (_Component) {
  _inherits(ManifestListItemError, _Component);
  function ManifestListItemError() {
    _classCallCheck(this, ManifestListItemError);
    return _callSuper(this, ManifestListItemError, arguments);
  }
  _createClass(ManifestListItemError, [{
    key: "render",
    value:
    /**
     * Returns the rendered component
    */
    function render() {
      var _this$props = this.props,
        manifestId = _this$props.manifestId,
        onDismissClick = _this$props.onDismissClick,
        onTryAgainClick = _this$props.onTryAgainClick,
        t = _this$props.t;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid["default"], {
        container: true,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid["default"], {
          container: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid["default"], {
            container: true,
            item: true,
            xs: 12,
            sm: 6,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid["default"], {
              item: true,
              xs: 4,
              sm: 3,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid["default"], {
                container: true,
                justifyContent: "center",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorOutlineSharp["default"], {
                  sx: {
                    color: 'error.main',
                    height: '2rem',
                    width: '2rem'
                  }
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid["default"], {
              item: true,
              xs: 8,
              sm: 9,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
                children: t('manifestError')
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
                sx: {
                  wordBreak: 'break-all'
                },
                children: manifestId
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid["default"], {
          container: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid["default"], {
            container: true,
            item: true,
            xs: 12,
            sm: 6,
            justifyContent: "flex-end",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid["default"], {
              item: true,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
                onClick: function onClick() {
                  onDismissClick(manifestId);
                },
                children: t('dismiss')
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
                onClick: function onClick() {
                  onTryAgainClick(manifestId);
                },
                children: t('tryAgain')
              })]
            })
          })
        })]
      });
    }
  }]);
  return ManifestListItemError;
}(_react.Component);