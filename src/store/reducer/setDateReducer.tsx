import { START_DATE } from '../types';

const initialState = { startDate: '' };

export const setDateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case START_DATE:
      return {
        ...state,
        startDate: action.payload,
      };
    default:
      return state;
  }
};
