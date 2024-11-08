import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const subscriber = createSlice({
  name: "subscriber",
  initialState,
  reducers: {
    addSubscriber: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});

export const { addSubscriber } = subscriber.actions;
export default subscriber.reducer;
