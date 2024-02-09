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
import { Component } from 'react';
import Button from '@mui/material/Button';
import ErrorIcon from '@mui/icons-material/ErrorOutlineSharp';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/**
 * ManifestListItemError renders a component displaying a
 * message to the user about a problem loading a manifest
*/
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var ManifestListItemError = /*#__PURE__*/function (_Component) {
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
      return /*#__PURE__*/_jsxs(Grid, {
        container: true,
        children: [/*#__PURE__*/_jsx(Grid, {
          container: true,
          children: /*#__PURE__*/_jsxs(Grid, {
            container: true,
            item: true,
            xs: 12,
            sm: 6,
            children: [/*#__PURE__*/_jsx(Grid, {
              item: true,
              xs: 4,
              sm: 3,
              children: /*#__PURE__*/_jsx(Grid, {
                container: true,
                justifyContent: "center",
                children: /*#__PURE__*/_jsx(ErrorIcon, {
                  sx: {
                    color: 'error.main',
                    height: '2rem',
                    width: '2rem'
                  }
                })
              })
            }), /*#__PURE__*/_jsxs(Grid, {
              item: true,
              xs: 8,
              sm: 9,
              children: [/*#__PURE__*/_jsx(Typography, {
                children: t('manifestError')
              }), /*#__PURE__*/_jsx(Typography, {
                sx: {
                  wordBreak: 'break-all'
                },
                children: manifestId
              })]
            })]
          })
        }), /*#__PURE__*/_jsx(Grid, {
          container: true,
          children: /*#__PURE__*/_jsx(Grid, {
            container: true,
            item: true,
            xs: 12,
            sm: 6,
            justifyContent: "flex-end",
            children: /*#__PURE__*/_jsxs(Grid, {
              item: true,
              children: [/*#__PURE__*/_jsx(Button, {
                onClick: function onClick() {
                  onDismissClick(manifestId);
                },
                children: t('dismiss')
              }), /*#__PURE__*/_jsx(Button, {
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
}(Component);