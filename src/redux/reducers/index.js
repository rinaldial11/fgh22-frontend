import { combineReducers } from "@reduxjs/toolkit";
import user from "./user.js";
import token from "./auth.js";
import profile from "./profile.js";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const tokenConfig = {
  key: "token",
  storage,
};
const userConfig = {
  key: "user",
  storage,
};

// persistReducer(userConfig, user);
const reducer = combineReducers({
  profile,
  token: persistReducer(tokenConfig, token),
  user,
});

export default reducer;
