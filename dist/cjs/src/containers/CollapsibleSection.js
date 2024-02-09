"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _CollapsibleSection = require("../components/CollapsibleSection");
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)());
var _default = exports["default"] = enhance(_CollapsibleSection.CollapsibleSection);