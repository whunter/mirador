import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { SearchResults } from '../components/SearchResults';
import * as actions from '../state/actions';
import { getNextSearchId, getSearchQuery, getSearchIsFetching, getSearchNumTotal, getSortedSearchHitsForCompanionWindow, getSortedSearchAnnotationsForCompanionWindow } from '../state/selectors';

/**
 * mapStateToProps - used to hook up connect to state
 * @memberof SearchResult
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var companionWindowId = _ref.companionWindowId,
    windowId = _ref.windowId;
  return {
    isFetching: getSearchIsFetching(state, {
      companionWindowId: companionWindowId,
      windowId: windowId
    }),
    nextSearch: getNextSearchId(state, {
      companionWindowId: companionWindowId,
      windowId: windowId
    }),
    query: getSearchQuery(state, {
      companionWindowId: companionWindowId,
      windowId: windowId
    }),
    searchAnnotations: getSortedSearchAnnotationsForCompanionWindow(state, {
      companionWindowId: companionWindowId,
      windowId: windowId
    }),
    searchHits: getSortedSearchHitsForCompanionWindow(state, {
      companionWindowId: companionWindowId,
      windowId: windowId
    }),
    searchNumTotal: getSearchNumTotal(state, {
      companionWindowId: companionWindowId,
      windowId: windowId
    })
  };
};
var mapDispatchToProps = {
  fetchSearch: actions.fetchSearch
};
var enhance = compose(connect(mapStateToProps, mapDispatchToProps), withTranslation(), withPlugins('SearchResults'));
export default enhance(SearchResults);