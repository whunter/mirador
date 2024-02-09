var _excluded = ["children", "nodeId"];
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { Component } from 'react';
import { alpha, styled } from '@mui/material/styles';
import { TreeView } from '@mui/x-tree-view/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { ScrollTo } from './ScrollTo';
import { jsx as _jsx } from "react/jsx-runtime";
var StyledVisibleNode = styled('div')(function () {
  return {};
});
/** */
function getStartCanvasId(node) {
  var jsonld = node.data.__jsonld; // eslint-disable-line no-underscore-dangle
  if (jsonld.startCanvas && typeof jsonld.startCanvas === 'string') {
    return jsonld.startCanvas;
  }
  if (jsonld.start) {
    if (jsonld.start.type === 'Canvas' && typeof jsonld.start.id === 'string') {
      return jsonld.start.id;
    }
    if (jsonld.start.type === 'SpecificResource' && typeof jsonld.start.source === 'string') {
      return jsonld.start.source;
    }
  }
  return node.data.getCanvasIds()[0];
}

/** Traverse through the manifesto tree to find a node with a given id */
function deepFind(treeNode, id) {
  if (treeNode.id === id) {
    return treeNode;
  }
  var result = null;
  if (treeNode.nodes) {
    for (var i = 0; result == null && i < treeNode.nodes.length; i += 1) {
      result = deepFind(treeNode.nodes[i], id);
    }
  }
  return result;
}

/** Wrap <ScrollTo> to remove the nodeId prop required for MUI's TreeView */
var ScrollToForTreeItem = function ScrollToForTreeItem(_ref) {
  var children = _ref.children,
    nodeId = _ref.nodeId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(ScrollTo, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }));
};
/** */
export var SidebarIndexTableOfContents = /*#__PURE__*/function (_Component) {
  _inherits(SidebarIndexTableOfContents, _Component);
  /** */
  function SidebarIndexTableOfContents(props) {
    var _this;
    _classCallCheck(this, SidebarIndexTableOfContents);
    _this = _callSuper(this, SidebarIndexTableOfContents, [props]);
    _this.handleNodeSelect = _this.handleNodeSelect.bind(_assertThisInitialized(_this));
    _this.handleNodeToggle = _this.handleNodeToggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  /** */
  _createClass(SidebarIndexTableOfContents, [{
    key: "handleNodeSelect",
    value: function handleNodeSelect(event, nodeId) {
      var toggleNode = this.props.toggleNode;
      if (event.key === ' ' || event.key === 'Spacebar') {
        toggleNode(nodeId);
      }
      this.selectTreeItem(nodeId);
    }

    /** */
  }, {
    key: "handleNodeToggle",
    value: function handleNodeToggle(_event, nodeIds) {
      var expandNodes = this.props.expandNodes;
      expandNodes(nodeIds);
    }

    /** */
  }, {
    key: "selectTreeItem",
    value: function selectTreeItem(nodeId) {
      var _this$props = this.props,
        setCanvas = _this$props.setCanvas,
        treeStructure = _this$props.treeStructure,
        windowId = _this$props.windowId;
      var node = deepFind(treeStructure, nodeId);

      // Do not select if there are no canvases listed or it has children
      if (!node.data.getCanvasIds() || node.data.getCanvasIds().length === 0 || node.nodes.length > 0) {
        return;
      }
      var target = getStartCanvasId(node);
      var canvasId = target.indexOf('#') === -1 ? target : target.substr(0, target.indexOf('#'));
      setCanvas(windowId, canvasId);
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        treeStructure = _this$props2.treeStructure,
        visibleNodeIds = _this$props2.visibleNodeIds,
        expandedNodeIds = _this$props2.expandedNodeIds,
        containerRef = _this$props2.containerRef,
        nodeIdToScrollTo = _this$props2.nodeIdToScrollTo;
      if (!treeStructure) {
        return null;
      }

      /** Render the tree structure recursively */
      var renderTree = function renderTree(node) {
        return /*#__PURE__*/_jsx(ScrollToForTreeItem, {
          containerRef: containerRef,
          nodeId: node.id,
          offsetTop: 96 // offset for the height of the form above
          ,
          scrollTo: nodeIdToScrollTo === node.id,
          children: /*#__PURE__*/_jsx(TreeItem, {
            nodeId: node.id,
            sx: {
              '& .MuiTreeItem-content': {
                alignItems: 'flex-start',
                borderLeft: '1px solid transparent',
                padding: '8px 16px 8px 0',
                width: 'auto'
              },
              '& .MuiTreeItem-group': {
                borderLeft: '1px solid',
                borderLeftColor: 'grey.300'
              },
              '& .MuiTreeItem-iconContainer': {
                paddingBlockStart: 0.5
              },
              '& .MuiTreeItem-label': {
                paddingLeft: 0
              },
              '& .MuiTreeItem-root': {
                '&:focus > .MuiTreeItem-content': {
                  backgroundColor: 'action.selected'
                },
                '&:hover > .MuiTreeItem-content': {
                  backgroundColor: 'action.hover'
                },
                '&:hover > .MuiTreeItem-content .MuiTreeItem-label, &:focus > .MuiTreeItem-content .MuiTreeItem-label, &.MuiTreeItem-selected > .MuiTreeItem-content .MuiTreeItem-label, &.MuiTreeItem-selected > .MuiTreeItem-content .MuiTreeItem-label:hover, &.MuiTreeItem-selected:focus > .MuiTreeItem-content .MuiTreeItem-label': {
                  backgroundColor: 'transparent'
                }
              }
            },
            label: /*#__PURE__*/_jsx(StyledVisibleNode, {
              sx: function sx(theme) {
                var _theme$palette$highli;
                return {
                  backgroundColor: visibleNodeIds.indexOf(node.id) !== -1 && alpha(((_theme$palette$highli = theme.palette.highlights) === null || _theme$palette$highli === void 0 ? void 0 : _theme$palette$highli.primary) || theme.palette.action.selected, 0.35),
                  display: visibleNodeIds.indexOf(node.id) !== -1 && 'inline'
                };
              },
              children: node.label
            }),
            children: Array.isArray(node.nodes) ? node.nodes.map(function (n) {
              return renderTree(n);
            }) : null
          })
        }, node.id);
      };
      return /*#__PURE__*/_jsx(TreeView, {
        sx: {
          flexGrow: 1
        },
        defaultCollapseIcon: /*#__PURE__*/_jsx(ExpandMoreIcon, {
          color: "action"
        }),
        defaultExpandIcon: /*#__PURE__*/_jsx(ChevronRightIcon, {
          color: "action"
        }),
        defaultEndIcon: null,
        onNodeSelect: this.handleNodeSelect,
        onNodeToggle: this.handleNodeToggle,
        expanded: expandedNodeIds,
        children: Array.isArray(treeStructure.nodes) ? treeStructure.nodes.map(function (n) {
          return renderTree(n);
        }) : null
      });
    }
  }]);
  return SidebarIndexTableOfContents;
}(Component);