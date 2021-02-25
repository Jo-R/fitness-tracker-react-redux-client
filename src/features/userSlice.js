import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    toggleIsLoggedIn(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { toggleIsLoggedIn } = userSlice.actions;

export default userSlice.reducer;

export const isLoggedInSelector = (state) => state.user.isLoggedIn;
