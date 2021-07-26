import { combineReducers } from 'redux';

import staysReducer from './stays';
import filterReducer from './filters';
import searchBarReducer from './searchBar';

export default combineReducers({
  stays: staysReducer,
  searchBar: searchBarReducer,
  filters: filterReducer,
});
