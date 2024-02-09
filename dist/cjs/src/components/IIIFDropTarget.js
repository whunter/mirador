"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDrop = exports.IIIFDropTarget = void 0;
var _Backdrop = _interopRequireDefault(require("@mui/material/Backdrop"));
var _InsertDriveFileSharp = _interopRequireDefault(require("@mui/icons-material/InsertDriveFileSharp"));
var _colors = require("@mui/material/colors");
var _uuid = require("uuid");
var _reactDndHtml5Backend = require("react-dnd-html5-backend");
var _reactDnd = require("react-dnd");
var _readImageMetadata = require("../lib/readImageMetadata");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /** */
var handleDrop = exports.handleDrop = function handleDrop(item, monitor, props) {
  var onDrop = props.onDrop;
  if (item.urls) {
    item.urls.forEach(function (str) {
      var url = new URL(str);
      var manifestId = url.searchParams.get('manifest');
      var canvasId = url.searchParams.get('canvas');
      if (manifestId) onDrop({
        canvasId: canvasId,
        manifestId: manifestId
      }, props, monitor);
    });
  }
  if (item.files) {
    var manifestFiles = item.files.filter(function (f) {
      return f.type === 'application/json';
    });
    var manifestPromises = manifestFiles.map(function (file) {
      return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.addEventListener('load', function () {
          var manifestJson = reader.result;
          var manifestId = (0, _uuid.v4)();
          if (manifestJson) onDrop({
            manifestId: manifestId,
            manifestJson: manifestJson
          }, props, monitor);
          resolve();
        });
        reader.readAsText(file);
      });
    });
    var imageFiles = item.files.filter(function (_ref) {
      var type = _ref.type;
      return type.startsWith('image/');
    });
    var imagePromise;
    if (imageFiles.length > 0) {
      var id = (0, _uuid.v4)();
      var imageData = imageFiles.map(function (file) {
        return (0, _readImageMetadata.readImageMetadata)(file);
      });
      imagePromise = Promise.all(imageData).then(function (images) {
        var manifestJson = {
          '@context': 'http://iiif.io/api/presentation/3/context.json',
          id: id,
          items: images.map(function (_ref2, index) {
            var name = _ref2.name,
              type = _ref2.type,
              width = _ref2.width,
              height = _ref2.height,
              url = _ref2.url;
            return {
              height: height,
              id: "".concat(id, "/canvas/").concat(index),
              items: [{
                id: "".concat(id, "/canvas/").concat(index, "/1"),
                items: [{
                  body: {
                    format: type,
                    id: url,
                    type: 'Image'
                  },
                  height: height,
                  id: "".concat(id, "/canvas/").concat(index, "/1/image"),
                  motivation: 'painting',
                  target: "".concat(id, "/canvas/").concat(index, "/1"),
                  type: 'Annotation',
                  width: width
                }],
                type: 'AnnotationPage'
              }],
              label: name,
              type: 'Canvas',
              width: width
            };
          }),
          label: images[0].name,
          type: 'Manifest'
        };
        var manifestId = (0, _uuid.v4)();
        if (manifestJson) onDrop({
          manifestId: manifestId,
          manifestJson: manifestJson
        }, props, monitor);
      });
    }
    return Promise.all([].concat(_toConsumableArray(manifestPromises), [imagePromise]));
  }
  return undefined;
};

/** */
var IIIFDropTarget = exports.IIIFDropTarget = function IIIFDropTarget(props) {
  var children = props.children,
    onDrop = props.onDrop;
  var _useDrop = (0, _reactDnd.useDrop)({
      accept: [_reactDndHtml5Backend.NativeTypes.URL, _reactDndHtml5Backend.NativeTypes.FILE],
      collect: function collect(monitor) {
        return {
          canDrop: monitor.canDrop(),
          isOver: monitor.isOver()
        };
      },
      /** */drop: function drop(item, monitor) {
        if (!onDrop) return;
        handleDrop(item, monitor, props);
      }
    }),
    _useDrop2 = _slicedToArray(_useDrop, 2),
    _useDrop2$ = _useDrop2[0],
    canDrop = _useDrop2$.canDrop,
    isOver = _useDrop2$.isOver,
    drop = _useDrop2[1];

  /**
   * Safari reports drag+drop'ed urls as both a file and uri-list
   * which gets mis-classified by react-dnd.
   */
  var hackForSafari = function hackForSafari(e) {
    if (!window.safari || !onDrop || !e.dataTransfer) return;
    if (e.dataTransfer.types.includes('Files') && e.dataTransfer.types.includes('text/uri-list')) {
      var url = e.dataTransfer.getData('text/uri-list');
      if (!url) return;
      handleDrop({
        urls: [url]
      }, null, props);
    }
  };
  var isActive = canDrop && isOver;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: drop,
    onDrop: hackForSafari,
    style: {
      height: '100%',
      width: '100%'
    },
    children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_Backdrop["default"], {
      open: isActive,
      style: {
        zIndex: 9999
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_InsertDriveFileSharp["default"], {
        style: {
          color: _colors.grey[400],
          fontSize: 256
        }
      })
    })]
  });
};