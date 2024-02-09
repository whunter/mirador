var _excluded = ["badge", "children", "container", "dispatch", "BadgeProps", "TooltipProps", "sx"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { jsx as _jsx } from "react/jsx-runtime";
var Root = styled(IconButton, {
  name: 'MiradorMenuButton',
  slot: 'root'
})(function (_ref) {
  var ownerState = _ref.ownerState,
    theme = _ref.theme;
  return _objectSpread({
    fill: 'currentcolor'
  }, ownerState.selected && {
    backgroundColor: theme.palette.action.selected
  });
});

/**
 * MiradorMenuButton ~ Wrap the given icon prop in an IconButton and a Tooltip.
 * This shares the passed in aria-label w/ the Tooltip (as title) and the IconButton
 * All props besides icon are spread to the IconButton component
*/
export function MiradorMenuButton(props) {
  var ariaLabel = props['aria-label'];
  var badge = props.badge,
    children = props.children,
    container = props.container,
    dispatch = props.dispatch,
    BadgeProps = props.BadgeProps,
    TooltipProps = props.TooltipProps,
    sx = props.sx,
    iconButtonProps = _objectWithoutProperties(props, _excluded);
  var button = /*#__PURE__*/_jsx(Root, _objectSpread(_objectSpread({
    ownerState: props
  }, iconButtonProps), {}, {
    sx: sx,
    size: "large",
    children: badge ? /*#__PURE__*/_jsx(Badge, _objectSpread(_objectSpread({
      overlap: "rectangular"
    }, BadgeProps), {}, {
      children: children
    })) : children
  }));
  if (iconButtonProps.disabled) return button;
  return /*#__PURE__*/_jsx(Tooltip, _objectSpread(_objectSpread({
    PopperProps: {
      container: container === null || container === void 0 ? void 0 : container.current
    },
    title: ariaLabel
  }, TooltipProps), {}, {
    children: button
  }));
}
MiradorMenuButton.defaultProps = {
  badge: false,
  BadgeProps: {},
  container: null,
  dispatch: function dispatch() {},
  selected: false,
  sx: {},
  TooltipProps: {}
};