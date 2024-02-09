import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { WindowTopBarPluginArea } from '../components/WindowTopBarPluginArea';
var enhance = compose(withTranslation(), connect(null, null), withPlugins('WindowTopBarPluginArea'));
export default enhance(WindowTopBarPluginArea);