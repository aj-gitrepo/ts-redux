import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

// type of the reducers return type - 
// specifies the type of repositories
export type RootState = ReturnType<typeof reducers>;
