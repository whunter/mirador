function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import flatten from 'lodash/flatten';
import AnnotationResource from './AnnotationResource';
/** */
var AnnotationList = /*#__PURE__*/function () {
  /** */
  function AnnotationList(json, target) {
    _classCallCheck(this, AnnotationList);
    this.json = json;
    this.target = target;
  }

  /** */
  _createClass(AnnotationList, [{
    key: "id",
    get: function get() {
      return this.json['@id'];
    }

    /** */
  }, {
    key: "present",
    value: function present() {
      return this.resources && this.resources.length > 0;
    }

    /** */
  }, {
    key: "resources",
    get: function get() {
      var _this = this;
      this._resources = this._resources || function () {
        // eslint-disable-line no-underscore-dangle
        if (!_this.json || !_this.json.resources) return [];
        return flatten([_this.json.resources]).map(function (resource) {
          return new AnnotationResource(resource);
        });
      }();
      return this._resources; // eslint-disable-line no-underscore-dangle
    }
  }]);
  return AnnotationList;
}();
export { AnnotationList as default };