import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { getConfig } from '../state/selectors';
import { IIIFThumbnail } from '../components/IIIFThumbnail';

/**
 * mapStateToProps - to hook up connect
 * @private
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    thumbnailsConfig: getConfig(state).thumbnails
  };
};
var enhance = compose(withTranslation(), connect(mapStateToProps), withPlugins('IIIFThumbnail'));
export default enhance(IIIFThumbnail);