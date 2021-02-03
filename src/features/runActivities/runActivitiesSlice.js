import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "a run!", distance: 3 },
  { id: "2", title: "another run", content: 4 },
];

const runAcvitiesSlice = createSlice({
  name: "runAcvities",
  initialState,
  reducers: {
    addActivity: (state, action) => [...state, action.payload],
  },
});

export const { addActivity } = runAcvitiesSlice.actions;

export default runAcvitiesSlice.reducer;
