import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import * as actions from '../state/actions';
import { getCurrentCanvas } from '../state/selectors';
import { ThumbnailCanvasGrouping } from '../components/ThumbnailCanvasGrouping';

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ThumbnailCanvasGrouping
 * @private
 */
var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var data = _ref.data;
  return {
    setCanvas: function setCanvas() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return dispatch(actions.setCanvas.apply(actions, [data.windowId].concat(args)));
    }
  };
};

/**
 * mapStateToProps - used to hook up state to props
 * @memberof ThumbnailCanvasGrouping
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref2) {
  var data = _ref2.data;
  return {
    currentCanvasId: (getCurrentCanvas(state, {
      windowId: data.windowId
    }) || {}).id
  };
};
var enhance = compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps), withPlugins('ThumbnailCanvasGrouping'));
export default enhance(ThumbnailCanvasGrouping);