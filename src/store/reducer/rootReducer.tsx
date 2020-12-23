import { combineReducers } from 'redux';
import { setDateReducer } from './setDateReducer';

export const rootReducer = combineReducers({ startDate: setDateReducer });
