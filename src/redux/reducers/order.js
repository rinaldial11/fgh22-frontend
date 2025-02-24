import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    user_id: 0,
    movie_id: 0,
    time_id: 0,
    date_id: 0,
    location_id: 0,
    cinema_id: 0,
    "[]seat_id": [],
    method: "",
  },
};

const order = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    cancelOrder: () => {
      return initialState;
    },
  },
});

export const { addOrder, cancelOrder } = order.actions;
export default order.reducer;
