"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _WorkspaceMenuButton = require("../components/WorkspaceMenuButton");
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _withPlugins.withPlugins)('WorkspaceMenuButton')
// further HOC
);
var _default = exports["default"] = enhance(_WorkspaceMenuButton.WorkspaceMenuButton);