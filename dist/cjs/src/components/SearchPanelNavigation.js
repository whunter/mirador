"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchPanelNavigation = void 0;
var _react = require("react");
var _ChevronLeftSharp = _interopRequireDefault(require("@mui/icons-material/ChevronLeftSharp"));
var _ChevronRightSharp = _interopRequireDefault(require("@mui/icons-material/ChevronRightSharp"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
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
 * SearchPanelNavigation ~
*/
var SearchPanelNavigation = exports.SearchPanelNavigation = /*#__PURE__*/function (_Component) {
  _inherits(SearchPanelNavigation, _Component);
  function SearchPanelNavigation() {
    _classCallCheck(this, SearchPanelNavigation);
    return _callSuper(this, SearchPanelNavigation, arguments);
  }
  _createClass(SearchPanelNavigation, [{
    key: "nextSearchResult",
    value: /** */
    function nextSearchResult(currentHitIndex) {
      var _this$props = this.props,
        searchHits = _this$props.searchHits,
        selectAnnotation = _this$props.selectAnnotation;
      selectAnnotation(searchHits[currentHitIndex + 1].annotations[0]);
    }

    /** */
  }, {
    key: "previousSearchResult",
    value: function previousSearchResult(currentHitIndex) {
      var _this$props2 = this.props,
        searchHits = _this$props2.searchHits,
        selectAnnotation = _this$props2.selectAnnotation;
      selectAnnotation(searchHits[currentHitIndex - 1].annotations[0]);
    }

    /** */
  }, {
    key: "hasNextResult",
    value: function hasNextResult(currentHitIndex) {
      var searchHits = this.props.searchHits;
      if (searchHits.length === 0) return false;
      if (currentHitIndex < searchHits.length - 1) return true;
      return false;
    }

    /** */
  }, {
    key: "hasPreviousResult",
    value: function hasPreviousResult(currentHitIndex) {
      var searchHits = this.props.searchHits;
      if (searchHits.length === 0) return false;
      if (currentHitIndex > 0) return true;
      return false;
    }

    /**
     * Returns the rendered component
    */
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props3 = this.props,
        numTotal = _this$props3.numTotal,
        searchHits = _this$props3.searchHits,
        selectedContentSearchAnnotation = _this$props3.selectedContentSearchAnnotation,
        t = _this$props3.t,
        direction = _this$props3.direction;
      var iconStyle = direction === 'rtl' ? {
        transform: 'rotate(180deg)'
      } : {};
      var currentHitIndex = searchHits.findIndex(function (val) {
        return val.annotations.includes(selectedContentSearchAnnotation[0]);
      });
      var lengthText = searchHits.length;
      if (searchHits.length < numTotal) {
        lengthText += '+';
      }
      if (searchHits.length === 0) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography["default"], {
        variant: "body2",
        align: "center",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MiradorMenuButton["default"], {
          "aria-label": t('searchPreviousResult'),
          disabled: !this.hasPreviousResult(currentHitIndex),
          onClick: function onClick() {
            return _this.previousSearchResult(currentHitIndex);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ChevronLeftSharp["default"], {
            style: iconStyle
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: {
            unicodeBidi: 'plaintext'
          },
          children: t('pagination', {
            current: currentHitIndex + 1,
            total: lengthText
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MiradorMenuButton["default"], {
          "aria-label": t('searchNextResult'),
          disabled: !this.hasNextResult(currentHitIndex),
          onClick: function onClick() {
            return _this.nextSearchResult(currentHitIndex);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ChevronRightSharp["default"], {
            style: iconStyle
          })
        })]
      });
    }
  }]);
  return SearchPanelNavigation;
}(_react.Component);
SearchPanelNavigation.defaultProps = {
  numTotal: undefined,
  searchHits: [],
  t: function t(key) {
    return key;
  }
};