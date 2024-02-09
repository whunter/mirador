"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _withPlugins = require("../extend/withPlugins");
var _WorkspaceControlPanelButtons = require("../components/WorkspaceControlPanelButtons");
var enhance = (0, _redux.compose)((0, _withPlugins.withPlugins)('WorkspaceControlPanelButtons'));
var _default = exports["default"] = enhance(_WorkspaceControlPanelButtons.WorkspaceControlPanelButtons);