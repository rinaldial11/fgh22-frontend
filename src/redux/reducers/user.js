import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nama: "Rinaldi Ainnurrahman Lengkana",
  email: "rinaldi@mail.com",
  password: "1234",
  image: "https://i.mydramalist.com/xWAE0_5c.jpg",
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUser: (state, action) => {
      state.nama = action.payload.nama;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.image = action.payload.image;
    },
  },
});

export const { changeUser } = user.actions;
export default user.reducer;
