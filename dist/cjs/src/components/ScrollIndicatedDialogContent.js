"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollIndicatedDialogContent = ScrollIndicatedDialogContent;
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _styles = require("@mui/material/styles");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["classes", "className"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * From https://github.com/mui/material-ui/blob/v5.15.0/packages/mui-material/src/styles/getOverlayAlpha.ts
 */
var getOverlayAlpha = function getOverlayAlpha(elevation) {
  var alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * Math.pow(elevation, 2);
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return (alphaValue / 100).toFixed(2);
};
var Root = (0, _styles.styled)(_DialogContent["default"], {
  name: 'ScrollIndicatedDialogContent',
  slot: 'root'
})(function (_ref) {
  var ownerState = _ref.ownerState,
    theme = _ref.theme;
  // In dark mode, paper has a elevation-dependent background color:
  // https://github.com/mui/material-ui/blob/v5.15.0/packages/mui-material/src/Paper/Paper.js#L55-L60
  var bgcolor = theme.palette.mode === 'dark' ? {
    backgroundImage: "linear-gradient(".concat((0, _styles.alpha)('#fff', getOverlayAlpha((ownerState === null || ownerState === void 0 ? void 0 : ownerState.elevation) || 24)), ", ").concat((0, _styles.alpha)('#fff', getOverlayAlpha((ownerState === null || ownerState === void 0 ? void 0 : ownerState.elevation) || 24)), ")")
  } : theme.palette.background.paper;
  return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    /* Shadow covers */
    background: "linear-gradient(".concat(bgcolor, " 30%, rgba(255, 255, 255, 0)), ") + "linear-gradient(rgba(255, 255, 255, 0), ".concat(bgcolor, " 70%) 0 100%, ")
    // Shaddows
    + 'radial-gradient(50% 0, farthest-side, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), ' + 'radial-gradient(50% 100%, farthest-side, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%,'
  }, "background", "linear-gradient(".concat(bgcolor, " 30%, rgba(255, 255, 255, 0)), ") // eslint-disable-line no-dupe-keys
  + "linear-gradient(rgba(255, 255, 255, 0), ".concat(bgcolor, " 70%) 0 100%, ")
  // Shaddows
  + 'radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), ' + 'radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%;'), "backgroundAttachment", 'local, local, scroll, scroll'), "backgroundRepeat", 'no-repeat'), "backgroundSize", '100% 40px, 100% 40px, 100% 14px, 100% 14px'), "overflowY", 'auto');
});

/**
 * ScrollIndicatedDialogContent ~ Inject a style into the DialogContent component
 *                                to indicate there is scrollable content
*/
function ScrollIndicatedDialogContent(props) {
  var classes = props.classes,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded);
  var ourClassName = [className, classes.shadowScrollDialog].join(' ');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, _objectSpread({
    className: ourClassName
  }, otherProps));
}
ScrollIndicatedDialogContent.defaultProps = {
  classes: {},
  className: ''
};