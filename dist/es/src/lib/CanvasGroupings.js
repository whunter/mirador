function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 *
 */
var CanvasGroupings = /*#__PURE__*/function () {
  /**
   */
  function CanvasGroupings(canvases) {
    var viewType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'single';
    _classCallCheck(this, CanvasGroupings);
    this.canvases = canvases;
    this.viewType = viewType;
    this._groupings = null; // eslint-disable-line no-underscore-dangle
  }

  /**
   */
  _createClass(CanvasGroupings, [{
    key: "getCanvases",
    value: function getCanvases(index) {
      switch (this.viewType) {
        case 'book':
          return this.groupings()[Math.ceil(index / 2)];
        default:
          return this.groupings()[index];
      }
    }

    /**
     * Groups a set of canvases based on the view type. Single, is just an array
     * of canvases, while book view creates pairs.
     */
  }, {
    key: "groupings",
    value: function groupings() {
      if (this._groupings) {
        // eslint-disable-line no-underscore-dangle
        return this._groupings; // eslint-disable-line no-underscore-dangle
      }
      if (this.viewType === 'scroll') {
        return [this.canvases];
      }
      if (this.viewType !== 'book') {
        return this.canvases.map(function (canvas) {
          return [canvas];
        });
      }
      var groupings = [];
      this.canvases.forEach(function (canvas, i) {
        if (i === 0) {
          groupings.push([canvas]);
          return;
        }
        // Odd page
        if (i % 2 !== 0) {
          groupings.push([canvas]);
        } else {
          // Even page
          groupings[Math.ceil(i / 2)].push(canvas);
        }
      });
      this._groupings = groupings; // eslint-disable-line no-underscore-dangle
      return groupings;
    }
  }]);
  return CanvasGroupings;
}();
export { CanvasGroupings as default };