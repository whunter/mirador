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
import { Component } from 'react';
import { styled } from '@mui/material/styles';
import deburr from 'lodash/deburr';
import debounce from 'lodash/debounce';
import isObject from 'lodash/isObject';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/SearchSharp';
import MiradorMenuButton from '../containers/MiradorMenuButton';
import SearchPanelNavigation from '../containers/SearchPanelNavigation';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
var StyledForm = styled('form', {
  name: 'SearchPanelControls',
  slot: 'form'
})(function (_ref) {
  var theme = _ref.theme;
  return {
    paddingBottom: theme.spacing(1),
    paddingRight: theme.spacing(1.5),
    width: '100%'
  };
});

/** Sometimes an autocomplete match can be a simple string, other times an object
    with a `match` property, this function abstracts that away */
var getMatch = function getMatch(option) {
  return isObject(option) ? option.match : option;
};

/** */
export var SearchPanelControls = /*#__PURE__*/function (_Component) {
  _inherits(SearchPanelControls, _Component);
  /** */
  function SearchPanelControls(props) {
    var _this;
    _classCallCheck(this, SearchPanelControls);
    _this = _callSuper(this, SearchPanelControls, [props]);
    _this.state = {
      search: props.query,
      suggestions: []
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.submitSearch = _this.submitSearch.bind(_assertThisInitialized(_this));
    _this.getSuggestions = _this.getSuggestions.bind(_assertThisInitialized(_this));
    _this.selectItem = _this.selectItem.bind(_assertThisInitialized(_this));
    _this.fetchAutocomplete = debounce(_this.fetchAutocomplete.bind(_assertThisInitialized(_this)), 500);
    _this.receiveAutocomplete = _this.receiveAutocomplete.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * Update the query in the component state if the query has changed in the redux store
   */
  _createClass(SearchPanelControls, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var query = this.props.query;
      if (query !== prevProps.query) {
        // We are setting local state directly here ONLY when the query prop (from redux)
        // changed
        this.setState({
          // eslint-disable-line react/no-did-update-set-state
          search: query
        });
      }
    }

    /**
     * Cancel the debounce function when the component unmounts
     */
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.fetchAutocomplete.cancel();
    }

    /** */
  }, {
    key: "handleChange",
    value: function handleChange(event, value, reason) {
      // For some reason the value gets reset to an empty value from the
      // useAutocomplete hook sometimes, we just ignore these cases
      if (reason === 'reset' && !value) {
        return;
      }
      this.setState({
        search: value,
        suggestions: []
      });
      if (value) {
        this.fetchAutocomplete(value);
      }
    }

    /** */
  }, {
    key: "getSuggestions",
    value: function getSuggestions(value) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref2$showEmpty = _ref2.showEmpty,
        showEmpty = _ref2$showEmpty === void 0 ? false : _ref2$showEmpty;
      var suggestions = this.state.suggestions;
      var inputValue = deburr(value.trim()).toLowerCase();
      var inputLength = inputValue.length;
      return inputLength === 0 && !showEmpty ? [] : suggestions;
    }

    /** */
  }, {
    key: "fetchAutocomplete",
    value: function fetchAutocomplete(value) {
      var autocompleteService = this.props.autocompleteService;
      if (!autocompleteService) return;
      if (!value) return;
      fetch("".concat(autocompleteService.id, "?").concat(new URLSearchParams({
        q: value
      }))).then(function (response) {
        return response.json();
      }).then(this.receiveAutocomplete);
    }

    /** */
  }, {
    key: "receiveAutocomplete",
    value: function receiveAutocomplete(json) {
      this.setState({
        suggestions: json.terms
      });
    }

    /** */
  }, {
    key: "submitSearch",
    value: function submitSearch(event) {
      var _this$props = this.props,
        companionWindowId = _this$props.companionWindowId,
        fetchSearch = _this$props.fetchSearch,
        searchService = _this$props.searchService,
        windowId = _this$props.windowId;
      var search = this.state.search;
      event && event.preventDefault();
      if (!search) return;
      fetchSearch(windowId, companionWindowId, "".concat(searchService.id, "?").concat(new URLSearchParams({
        q: search
      })), search);
    }

    /** */
  }, {
    key: "selectItem",
    value: function selectItem(_event, selectedItem, _reason) {
      if (selectedItem && getMatch(selectedItem)) {
        this.setState({
          search: getMatch(selectedItem)
        }, this.submitSearch);
      }
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        companionWindowId = _this$props2.companionWindowId,
        searchIsFetching = _this$props2.searchIsFetching,
        t = _this$props2.t,
        windowId = _this$props2.windowId;
      var _this$state = this.state,
        search = _this$state.search,
        suggestions = _this$state.suggestions;
      var id = "search-".concat(companionWindowId);
      return /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx(StyledForm, {
          "aria-label": t('searchTitle'),
          onSubmit: this.submitSearch,
          children: /*#__PURE__*/_jsx(Autocomplete, {
            id: id,
            inputValue: search,
            options: suggestions,
            getOptionLabel: getMatch,
            isOptionEqualToValue: function isOptionEqualToValue(option, value) {
              return deburr(getMatch(option).trim()).toLowerCase() === deburr(getMatch(value).trim()).toLowerCase();
            },
            noOptionsText: "",
            onChange: this.selectItem,
            onInputChange: this.handleChange,
            freeSolo: true,
            disableClearable: true,
            renderInput: function renderInput(params) {
              return /*#__PURE__*/_jsx(TextField, _objectSpread(_objectSpread({}, params), {}, {
                label: t('searchInputLabel'),
                variant: "standard",
                InputProps: _objectSpread(_objectSpread({}, params.InputProps), {}, {
                  endAdornment: /*#__PURE__*/_jsxs(InputAdornment, {
                    sx: {
                      position: 'relative'
                    },
                    position: "end",
                    children: [/*#__PURE__*/_jsx(MiradorMenuButton, {
                      "aria-label": t('searchSubmitAria'),
                      type: "submit",
                      children: /*#__PURE__*/_jsx(SearchIcon, {})
                    }), Boolean(searchIsFetching) && /*#__PURE__*/_jsx(CircularProgress, {
                      sx: {
                        left: '50%',
                        marginLeft: '-25px',
                        marginTop: '-25px',
                        position: 'absolute',
                        top: '50%'
                      },
                      size: 50
                    })]
                  })
                })
              }));
            }
          })
        }), /*#__PURE__*/_jsx(SearchPanelNavigation, {
          windowId: windowId,
          companionWindowId: companionWindowId
        })]
      });
    }
  }]);
  return SearchPanelControls;
}(Component);
SearchPanelControls.defaultProps = {
  autocompleteService: undefined,
  query: '',
  t: function t(key) {
    return key;
  }
};