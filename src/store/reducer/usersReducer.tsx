const USERS = 'USERS';

const initialState = { user: {} };

export const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USERS:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};