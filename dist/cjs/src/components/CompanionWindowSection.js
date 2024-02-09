"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompanionWindowSection = void 0;
var _styles = require("@mui/material/styles");
var CompanionWindowSection = exports.CompanionWindowSection = (0, _styles.styled)('div', {
  name: 'CompanionWindowSection',
  slot: 'root'
})(function (_ref) {
  var theme = _ref.theme;
  return {
    paddingBlockEnd: theme.spacing(1),
    paddingBlockStart: theme.spacing(2),
    paddingInlineEnd: theme.spacing(1),
    paddingInlineStart: theme.spacing(2)
  };
});