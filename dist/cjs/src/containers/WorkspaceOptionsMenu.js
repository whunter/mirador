"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _WorkspaceContext = require("../contexts/WorkspaceContext");
var _WorkspaceOptionsMenu = require("../components/WorkspaceOptionsMenu");
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), _WorkspaceContext.withWorkspaceContext);
var _default = exports["default"] = enhance(_WorkspaceOptionsMenu.WorkspaceOptionsMenu);