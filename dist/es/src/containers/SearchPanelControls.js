import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { SearchPanelControls } from '../components/SearchPanelControls';
import * as actions from '../state/actions';
import { getManifestAutocompleteService, getManifestSearchService, getSearchIsFetching, getSearchQuery } from '../state/selectors';

/**
 * mapStateToProps - used to hook up connect to state
 * @memberof SearchPanelControls
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var companionWindowId = _ref.companionWindowId,
    windowId = _ref.windowId;
  return {
    autocompleteService: getManifestAutocompleteService(state, {
      windowId: windowId
    }),
    query: getSearchQuery(state, {
      companionWindowId: companionWindowId,
      windowId: windowId
    }),
    searchIsFetching: getSearchIsFetching(state, {
      companionWindowId: companionWindowId,
      windowId: windowId
    }),
    searchService: getManifestSearchService(state, {
      windowId: windowId
    })
  };
};

/**
 * mapDispatchToProps - to hook up connect
 * @memberof SearchPanelControls
 * @private
 */
var mapDispatchToProps = {
  fetchSearch: actions.fetchSearch
};
var enhance = compose(connect(mapStateToProps, mapDispatchToProps), withTranslation(), withPlugins('SearchPanelControls'));
export default enhance(SearchPanelControls);