import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import * as actions from '../state/actions';
import { getThemeIds, getConfig } from '../state/selectors';
import { ChangeThemeDialog } from '../components/ChangeThemeDialog';

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ChangeThemeDialog
 * @private
 */
var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var windowId = _ref.windowId;
  return {
    setSelectedTheme: function setSelectedTheme(theme) {
      return dispatch(actions.updateConfig({
        selectedTheme: theme
      }));
    }
  };
};

/**
 * mapStateToProps - to hook up connect
 * @memberof ChangeThemeDialog
 * @private
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    selectedTheme: getConfig(state).selectedTheme,
    themeIds: getThemeIds(state)
  };
};
var enhance = compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps), withPlugins('ChangeThemeDialog'));
export default enhance(ChangeThemeDialog);