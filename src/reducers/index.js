import { combineReducers } from 'redux';
import pearsonUsersReducers from './pearsonUsersReducers';

export const reducers = combineReducers({
  pearsonUsers: pearsonUsersReducers
});
