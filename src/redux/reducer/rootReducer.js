const initialState = {
  date: "",
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_DATE":
      console.log("reducer", action.payload);
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
};
