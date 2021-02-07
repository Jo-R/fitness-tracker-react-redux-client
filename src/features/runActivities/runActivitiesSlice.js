import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addRunActivity, getRunActivitiesForUser } from "../../api/runActivity";

export const fetchActivities = createAsyncThunk(
  "runActivities/fetchActivities",
  async () => {
    const response = await getRunActivitiesForUser();
    return response.items;
  }
);

export const addNewRun = createAsyncThunk(
  "runActivities/addNewRun",
  async (newActivity) => {
    console.log(Date.now().toLocaleString());
    // TODO sort out hard coded fields
    // TODO failure handling is no good
    const date = new Date();
    const response = await addRunActivity({
      userId: "d30e52b0-304c-4aa1-3c68-08d888b124c0",
      date: date.toISOString(),
      title: newActivity.title,
      distanceMile: parseInt(newActivity.distance),
      duration: "00:00:30",
      averageHr: 150,
      averagePaceMile: "00:09:00",
      notes: "",
    });
    return response;
  }
);

const runActivitiesSlice = createSlice({
  name: "runActivities",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  extraReducers: {
    [fetchActivities.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchActivities.fulfilled]: (state, action) => {
      state.status = "succeeded";
      // Add any fetched items to the array
      state.items = state.items.concat(action.payload);
    },
    [fetchActivities.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Sorry, something went wrong.";
    },
    [addNewRun.fulfilled]: (state, action) => {
      // We can directly add the new run object to our array
      state.items.push(action.payload);
    },
  },
});

export const { addActivity } = runActivitiesSlice.actions;

export default runActivitiesSlice.reducer;

export const selectAllActivities = (state) => state.runActivities.items;

export const selectActivityById = (state, runId) =>
  state.runActivities.items.find(
    (activity) => activity.id.toString() === runId
  );
