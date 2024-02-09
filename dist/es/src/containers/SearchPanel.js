import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import * as actions from '../state/actions';
import { withPlugins } from '../extend/withPlugins';
import { SearchPanel } from '../components/SearchPanel';
import { getManifestSearchService, getSearchQuery, getWindow } from '../state/selectors';

/** */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id,
    windowId = _ref.windowId;
  return {
    query: getSearchQuery(state, {
      companionWindowId: id,
      windowId: windowId
    }),
    searchService: getManifestSearchService(state, {
      windowId: windowId
    }),
    suggestedSearches: getWindow(state, {
      windowId: windowId
    }).suggestedSearches
  };
};

/** */
var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    fetchSearch: function fetchSearch(searchId, query) {
      return dispatch(actions.fetchSearch(props.windowId, props.id, searchId, query));
    },
    removeSearch: function removeSearch() {
      return dispatch(actions.removeSearch(props.windowId, props.id));
    }
  };
};
var enhance = compose(connect(mapStateToProps, mapDispatchToProps), withTranslation(), withPlugins('SearchPanel'));
export default enhance(SearchPanel);