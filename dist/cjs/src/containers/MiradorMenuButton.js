"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _withPlugins = require("../extend/withPlugins");
var _MiradorMenuButton = require("../components/MiradorMenuButton");
var _WorkspaceContext = require("../contexts/WorkspaceContext");
var enhance = (0, _redux.compose)(_WorkspaceContext.withWorkspaceContext, (0, _withPlugins.withPlugins)('MiradorMenuButton'));
var _default = exports["default"] = enhance(_MiradorMenuButton.MiradorMenuButton);