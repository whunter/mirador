import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import * as actions from '../state/actions';
import { getCompanionWindow, getManifestLocale, getMetadataLocales, getVisibleCanvasIds, getWindowConfig, getWindow } from '../state/selectors';
import { WindowSideBarInfoPanel } from '../components/WindowSideBarInfoPanel';

/**
 * mapStateToProps - to hook up connect
 * @memberof WindowSideBarInfoPanel
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id,
    windowId = _ref.windowId;
  return {
    availableLocales: getMetadataLocales(state, {
      companionWindowId: id,
      windowId: windowId
    }),
    canvasIds: getVisibleCanvasIds(state, {
      windowId: windowId
    }),
    collectionPath: (getWindow(state, {
      windowId: windowId
    }) || {}).collectionPath,
    locale: getCompanionWindow(state, {
      companionWindowId: id
    }).locale || getManifestLocale(state, {
      windowId: windowId
    }),
    showLocalePicker: getWindowConfig(state, {
      windowId: windowId
    }).showLocalePicker
  };
};

/** */
var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var windowId = _ref2.windowId,
    id = _ref2.id;
  return {
    setLocale: function setLocale(locale) {
      return dispatch(actions.updateCompanionWindow(windowId, id, {
        locale: locale
      }));
    }
  };
};
var enhance = compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps), withPlugins('WindowSideBarInfoPanel'));
export default enhance(WindowSideBarInfoPanel);