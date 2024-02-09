"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchResults = void 0;
var _react = require("react");
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _List = _interopRequireDefault(require("@mui/material/List"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _ArrowBackSharp = _interopRequireDefault(require("@mui/icons-material/ArrowBackSharp"));
var _liveAnnouncer = require("@react-aria/live-announcer");
var _SearchHit = _interopRequireDefault(require("../containers/SearchHit"));
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
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /** */
var SearchResults = exports.SearchResults = /*#__PURE__*/function (_Component) {
  _inherits(SearchResults, _Component);
  /** */
  function SearchResults(props) {
    var _this;
    _classCallCheck(this, SearchResults);
    _this = _callSuper(this, SearchResults, [props]);
    _this.state = {
      focused: false
    };
    _this.toggleFocus = _this.toggleFocus.bind(_assertThisInitialized(_this));
    return _this;
  }

  /** */
  _createClass(SearchResults, [{
    key: "toggleFocus",
    value: function toggleFocus() {
      var focused = this.state.focused;
      this.setState({
        focused: !focused
      });
    }

    /**
     * Return SearchHits for every hit in the response
     * Return SearchHits for every annotation in the response if there are no hits
     */
  }, {
    key: "renderSearchHitsAndAnnotations",
    value: function renderSearchHitsAndAnnotations() {
      var _this2 = this;
      var _this$props = this.props,
        companionWindowId = _this$props.companionWindowId,
        containerRef = _this$props.containerRef,
        searchAnnotations = _this$props.searchAnnotations,
        searchHits = _this$props.searchHits,
        windowId = _this$props.windowId;
      var focused = this.state.focused;
      if (searchHits.length === 0 && searchAnnotations.length > 0) {
        return searchAnnotations.map(function (anno, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SearchHit["default"], {
            announcer: _liveAnnouncer.announce,
            annotationId: anno.id,
            companionWindowId: companionWindowId,
            containerRef: containerRef,
            focused: focused,
            index: index,
            total: searchAnnotations.length,
            windowId: windowId,
            showDetails: _this2.toggleFocus
          }, anno.id);
        });
      }
      return searchHits.map(function (hit, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SearchHit["default"], {
          announcer: _liveAnnouncer.announce,
          containerRef: containerRef,
          companionWindowId: companionWindowId,
          focused: focused,
          hit: hit,
          index: index,
          total: searchHits.length,
          windowId: windowId,
          showDetails: _this2.toggleFocus
        }, hit.annotations[0]);
      });
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        companionWindowId = _this$props2.companionWindowId,
        containerRef = _this$props2.containerRef,
        isFetching = _this$props2.isFetching,
        fetchSearch = _this$props2.fetchSearch,
        nextSearch = _this$props2.nextSearch,
        query = _this$props2.query,
        searchAnnotations = _this$props2.searchAnnotations,
        searchHits = _this$props2.searchHits,
        searchNumTotal = _this$props2.searchNumTotal,
        t = _this$props2.t,
        windowId = _this$props2.windowId;
      var focused = this.state.focused;
      var noResultsState = query && !isFetching && searchHits.length === 0 && searchAnnotations.length === 0;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [focused && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ScrollTo.ScrollTo, {
          containerRef: containerRef,
          offsetTop: 96,
          scrollTo: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Button["default"], {
            onClick: this.toggleFocus,
            sx: {
              textTransform: 'none'
            },
            size: "small",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ArrowBackSharp["default"], {}), t('backToResults')]
          })
        }), noResultsState && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
          sx: {
            padding: 2,
            typography: 'h6'
          },
          children: t('searchNoResults')
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_List["default"], {
          disablePadding: true,
          children: this.renderSearchHitsAndAnnotations()
        }), nextSearch && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Button["default"], {
          sx: {
            width: '100%'
          },
          color: "secondary",
          onClick: function onClick() {
            return fetchSearch(windowId, companionWindowId, nextSearch, query);
          },
          children: [t('moreResults'), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), "(".concat(t('searchResultsRemaining', {
            numLeft: searchNumTotal - searchHits.length
          }), ")")]
        })]
      });
    }
  }]);
  return SearchResults;
}(_react.Component);
SearchResults.defaultProps = {
  containerRef: undefined,
  isFetching: false,
  nextSearch: undefined,
  query: undefined,
  searchAnnotations: [],
  searchHits: [],
  searchNumTotal: undefined,
  t: function t(k) {
    return k;
  }
};