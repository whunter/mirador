"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _LocalePicker = require("../components/LocalePicker");
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)());
var _default = exports["default"] = enhance(_LocalePicker.LocalePicker);