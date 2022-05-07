import { combineReducers } from "redux";

import bankReducer from "./reducers/bankReducer";


export default combineReducers({
  bank: bankReducer
});