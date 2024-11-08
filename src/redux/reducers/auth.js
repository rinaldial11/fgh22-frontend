import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: false,
};

const token = createSlice({
  name: "token",
  initialState,
  reducers: {
    logIn: (state) => {
      state.token = true;
    },
    logOut: () => {
      return initialState;
    },
  },
});

export const { logIn, logOut } = token.actions;
export default token.reducer;
