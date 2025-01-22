import { combineReducers } from "@reduxjs/toolkit";
import user from "./user.js";
import auth from "./auth.js";
import profile from "./profile.js";
import order from "./order";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const profileConfig = {
  key: "profile",
  storage,
};
const authConfig = {
  key: "auth",
  storage,
};
const userConfig = {
  key: "user",
  storage,
};
const orderConfig = {
  key: "order",
  storage,
};

const reducer = combineReducers({
  profile: persistReducer(profileConfig, profile),
  auth: persistReducer(authConfig, auth),
  user: persistReducer(userConfig, user),
  order: persistReducer(orderConfig, order),
});

export default reducer;
