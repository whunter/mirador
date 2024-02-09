function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import HotApp from '../components/App';
import { filterValidPlugins } from '../extend/pluginPreprocessing';
import createPluggableStore from '../state/createPluggableStore';

/**
 * Default Mirador instantiation
 */
import { jsx as _jsx } from "react/jsx-runtime";
var MiradorViewer = /*#__PURE__*/function () {
  /**
   */
  function MiradorViewer(config) {
    var viewerConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, MiradorViewer);
    this.plugins = filterValidPlugins(viewerConfig.plugins || []);
    this.config = config;
    this.store = viewerConfig.store || createPluggableStore(this.config, this.plugins);
    if (config.id) {
      this.container = document.getElementById(config.id);
      this.root = createRoot(this.container);
      this.root.render(this.render());
    }
  }

  /**
   * Render the mirador viewer
   */
  _createClass(MiradorViewer, [{
    key: "render",
    value: function render() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return /*#__PURE__*/_jsx(Provider, {
        store: this.store,
        children: /*#__PURE__*/_jsx(HotApp, _objectSpread({
          plugins: this.plugins
        }, props))
      });
    }

    /**
     * Cleanup method to unmount Mirador from the dom
     */
  }, {
    key: "unmount",
    value: function unmount() {
      if (!this.root) return;
      this.root.unmount();
    }
  }]);
  return MiradorViewer;
}();
export default MiradorViewer;