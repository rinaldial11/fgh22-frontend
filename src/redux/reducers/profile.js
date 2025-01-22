import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";

const initialState = {
  data: {},
};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.data = action.payload;
    },
    deleteProfile: () => {
      return initialState;
    },
  },
});

export const { setProfile, deleteProfile } = profile.actions;
export default profile.reducer;
