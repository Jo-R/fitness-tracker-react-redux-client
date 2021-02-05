import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { getRunActivitiesForUser } from "../../api/runActivity";

export const fetchActivities = createAsyncThunk(
  "runActivities/fetchActivities",
  async () => {
    const response = await getRunActivitiesForUser();
    return response.items;
  }
);

const runActivitiesSlice = createSlice({
  name: "runActivities",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addActivity: {
      // TODO actual add!
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (title, distance) => {
        return {
          payload: {
            id: nanoid(),
            title,
            distance,
          },
        };
      },
    },
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
      state.error = action.error.message;
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
