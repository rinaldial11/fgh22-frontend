import { combineReducers } from "@reduxjs/toolkit";
import user from "./user.js";
import auth from "./auth.js";
import profile from "./profile.js";
import subscriber from "./subscriber.js";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const authConfig = {
  key: "auth",
  storage,
};
const userConfig = {
  key: "user",
  storage,
};

// : persistReducer(authConfig, auth)
// persistReducer(userConfig, user);
const reducer = combineReducers({
  profile,
  auth,
  user,
  subscriber,
});

export default reducer;
