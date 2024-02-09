import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { CustomPanel } from '../components/CustomPanel';

/**
 * mapStateToProps - to hook up connect
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id,
    windowId = _ref.windowId;
  return {};
};
var enhance = compose(withTranslation(), connect(mapStateToProps), withPlugins('CustomPanel'));
export default enhance(CustomPanel);