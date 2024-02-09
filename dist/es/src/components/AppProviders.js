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
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
import { DndContext, DndProvider } from 'react-dnd';
import { MultiBackend } from 'react-dnd-multi-backend';
import { HTML5toTouch } from 'rdndmb-html5-to-touch';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import createI18nInstance from '../i18n';
import FullScreenContext from '../contexts/FullScreenContext';

/**
 * Allow applications to opt-out of (or provide their own) drag and drop context
 */
import { jsx as _jsx } from "react/jsx-runtime";
var MaybeDndProvider = function MaybeDndProvider(props) {
  var dndManager = props.dndManager,
    children = props.children;
  if (dndManager === false) {
    return children;
  }
  if (dndManager === undefined) {
    return /*#__PURE__*/_jsx(DndProvider, {
      backend: MultiBackend,
      options: HTML5toTouch,
      children: children
    });
  }
  return /*#__PURE__*/_jsx(DndContext.Provider, {
    value: dndManager,
    children: children
  });
};
/**
 * Shim to inject the full screen handle into a context
 */
var FullScreenShim = function FullScreenShim(_ref) {
  var children = _ref.children;
  var handle = useFullScreenHandle();
  return /*#__PURE__*/_jsx(FullScreen, {
    handle: handle,
    children: /*#__PURE__*/_jsx(FullScreenContext.Provider, {
      value: handle,
      children: children
    })
  });
};
/**
 * This component adds viewer-specific providers.
 * @prop {Object} manifests
 */
export var AppProviders = /*#__PURE__*/function (_Component) {
  _inherits(AppProviders, _Component);
  /** */
  function AppProviders(props) {
    var _this;
    _classCallCheck(this, AppProviders);
    _this = _callSuper(this, AppProviders, [props]);
    _this.i18n = createI18nInstance();
    // Set i18n language
    _this.i18n.changeLanguage(props.language);
    return _this;
  }

  /**
   * Update the i18n language if it is changed
   */
  _createClass(AppProviders, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var language = this.props.language;
      if (prevProps.language !== language) {
        this.i18n.changeLanguage(language);
      }
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        children = _this$props.children,
        theme = _this$props.theme,
        translations = _this$props.translations,
        dndManager = _this$props.dndManager;

      /**
       * Create rtl emotion cache
       */
      var cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin]
      });

      /**
       * Create default emotion cache
       */
      var cacheDefault = createCache({
        key: 'mui'
      });
      Object.keys(translations).forEach(function (lng) {
        _this2.i18n.addResourceBundle(lng, 'translation', translations[lng], true, true);
      });
      return /*#__PURE__*/_jsx(FullScreenShim, {
        children: /*#__PURE__*/_jsx(I18nextProvider, {
          i18n: this.i18n,
          children: /*#__PURE__*/_jsx(StyledEngineProvider, {
            injectFirst: true,
            children: /*#__PURE__*/_jsx(CacheProvider, {
              value: theme.direction === 'rtl' ? cacheRtl : cacheDefault,
              children: /*#__PURE__*/_jsx(ThemeProvider, {
                theme: createTheme(theme),
                children: /*#__PURE__*/_jsx(MaybeDndProvider, {
                  dndManager: dndManager,
                  children: children
                })
              })
            })
          })
        })
      });
    }
  }]);
  return AppProviders;
}(Component);
AppProviders.defaultProps = {
  children: null,
  dndManager: undefined
};