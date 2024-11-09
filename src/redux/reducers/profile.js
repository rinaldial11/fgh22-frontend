import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    deleteProfile: () => {
      return initialState;
    },
  },
});

export const { setProfile, deleteProfile } = profile.actions;
export default profile.reducer;
