import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

const token = createSlice({
  name: "token",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.token = action.payload;
    },
    logOut: () => {
      return initialState;
    },
  },
});

export const { logIn, logOut } = token.actions;
export default token.reducer;
