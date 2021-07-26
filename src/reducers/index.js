import { combineReducers } from 'redux';

import staysReducer from './stays';
import filterReducer from './filters';

export default combineReducers({
  stays: staysReducer,
  filters: filterReducer,
});
