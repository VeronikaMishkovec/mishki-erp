import { PROJECTS_LIST } from '../types';

const initialState = { projectsList: {} };

export const projectsList = (state = initialState, action: any) => {
  switch (action.type) {
    case PROJECTS_LIST:
      return {
        ...state,
        projectsList: action.projectsList,
      };
    default:
      return state;
  }
};
