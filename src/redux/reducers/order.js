import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    time: "",
    date: "",
    location: "",
    cinema: "",
    seat: [],
    count: "",
    price: "",
    paymentMethod: "",
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
