import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    editUser: (state, action) => {
      const email = action.payload.email;
      const foundIndex = state.data.findIndex((e) => e.email === email);
      if (foundIndex !== -1) {
        state.data[foundIndex].firstname = action.payload.firstname;
        state.data[foundIndex].lastname = action.payload.lastname;
        state.data[foundIndex].email = action.payload.email;
        state.data[foundIndex].phonenumber = action.payload.phonenumber;
        if (action.payload.password !== "") {
          state.data[foundIndex].password = action.payload.password;
        }
      }
    },
  },
});

export const { addUser, editUser } = user.actions;
export default user.reducer;
