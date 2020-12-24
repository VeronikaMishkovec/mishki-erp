import { START_DATE } from '../types';

export const setDate = (date: string) => {
  return {
    payload: date,
    type: START_DATE,
  };
};
