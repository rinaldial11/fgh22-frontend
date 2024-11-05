import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nama: "",
  email: "rinaldi@mail.com",
  password: "1234",
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUser: (state, action) => {
      state.nama = action.payload.nama;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { changeUser } = user.actions;
export default user.reducer;
