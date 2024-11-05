import { combineReducers } from "@reduxjs/toolkit";
import user from "./user.js";

const reducer = combineReducers({
  user: user,
});

export default reducer;
