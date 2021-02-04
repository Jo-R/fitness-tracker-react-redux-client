import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "a run!", distance: 3 },
  { id: "2", title: "another run", distance: 4 },
];

const runActivitiesSlice = createSlice({
  name: "runActivities",
  initialState,
  reducers: {
    addActivity: {
      reducer: (state, action) => [...state, action.payload],
      prepare: (title, distance) => {
        return { id: nanoid(), title, distance };
      },
    },
  },
});

export const { addActivity } = runActivitiesSlice.actions;

export default runActivitiesSlice.reducer;
