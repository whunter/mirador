import { compose } from 'redux';
import { connect } from 'react-redux';
import { withPlugins } from '../extend/withPlugins';
import { GalleryView } from '../components/GalleryView';
import { getCanvases, getSequenceViewingDirection } from '../state/selectors';

/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    canvases: getCanvases(state, {
      windowId: windowId
    }),
    viewingDirection: getSequenceViewingDirection(state, {
      windowId: windowId
    })
  };
};
var enhance = compose(connect(mapStateToProps), withPlugins('GalleryView')
// further HOC go here
);
export default enhance(GalleryView);