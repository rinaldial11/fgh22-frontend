import { combineReducers } from "@reduxjs/toolkit";
import user from "./user.js";
import token from "./auth.js";
import profile from "./profile.js";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const profileConfig = {
  key: "profile",
  storage,
};
const tokenConfig = {
  key: "token",
  storage,
};
const userConfig = {
  key: "user",
  storage,
};

const reducer = combineReducers({
  profile: persistReducer(profileConfig, profile),
  token: persistReducer(tokenConfig, token),
  user: persistReducer(userConfig, user),
});

export default reducer;
