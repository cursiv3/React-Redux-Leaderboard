import { combineReducers } from "redux";
//import * as reducers from "./reducers/reducers";
import {
  isFetching,
  isDataReceived,
  boards,
  currentBoard,
  stats
} from "./reducers/reducers";

const rootReducer = combineReducers({
  isFetching,
  isDataReceived,
  boards,
  currentBoard,
  stats
});

export default rootReducer;
