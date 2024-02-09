import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import * as actions from '../state/actions';
import { getManifest, getManifestoInstance, getSequenceBehaviors, getWindow } from '../state/selectors';
import { CollectionDialog } from '../components/CollectionDialog';
import { withWorkspaceContext } from '../contexts/WorkspaceContext';

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof CollectionDialog
 * @private
 */
var mapDispatchToProps = {
  addWindow: actions.addWindow,
  hideCollectionDialog: actions.hideCollectionDialog,
  setWorkspaceAddVisibility: actions.setWorkspaceAddVisibility,
  showCollectionDialog: actions.showCollectionDialog,
  updateWindow: actions.updateWindow
};

/**
 * mapStateToProps - to hook up connect
 * @memberof CollectionDialog
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  var _getWindow = getWindow(state, {
      windowId: windowId
    }),
    collectionPath = _getWindow.collectionPath,
    manifestId = _getWindow.collectionManifestId;
  var manifest = getManifest(state, {
    manifestId: manifestId
  });
  var collectionId = collectionPath && collectionPath[collectionPath.length - 1];
  var collection = collectionId && getManifest(state, {
    manifestId: collectionId
  });
  return {
    collection: collection && getManifestoInstance(state, {
      manifestId: collection.id
    }),
    collectionPath: collectionPath,
    error: manifest && manifest.error,
    isMultipart: getSequenceBehaviors(state, {
      manifestId: manifestId
    }).includes('multi-part'),
    manifest: manifest && getManifestoInstance(state, {
      manifestId: manifestId
    }),
    manifestId: manifestId,
    open: state.workspace.collectionDialogOn,
    ready: manifest && !!manifest.json,
    windowId: windowId
  };
};
var enhance = compose(withTranslation(), withWorkspaceContext, connect(mapStateToProps, mapDispatchToProps), withPlugins('CollectionDialog'));
export default enhance(CollectionDialog);