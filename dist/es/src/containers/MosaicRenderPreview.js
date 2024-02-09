import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { getManifestTitle } from '../state/selectors';
import { MosaicRenderPreview } from '../components/MosaicRenderPreview';

/** */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    title: getManifestTitle(state, {
      windowId: windowId
    })
  };
};
var enhance = compose(withTranslation(), connect(mapStateToProps, null), withPlugins('MosaicRenderPreview'));
export default enhance(MosaicRenderPreview);