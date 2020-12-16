import { combineReducers } from "redux";
import { postsReducer } from "../redux/postsReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
});
