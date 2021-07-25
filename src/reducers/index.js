import { combineReducers } from 'redux';

import stays from './stays';
import search from './search';

export default combineReducers({
  stays,
  search,
});
