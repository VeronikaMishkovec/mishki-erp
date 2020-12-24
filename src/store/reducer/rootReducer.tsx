import { combineReducers } from 'redux';
import { setDateReducer } from './setDateReducer';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({ startDate: setDateReducer, user: usersReducer });
