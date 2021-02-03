import { configureStore } from "@reduxjs/toolkit";
import runActivitiesReducer from "../features/runActivities/runActivitiesSlice";

export default configureStore({
  reducer: {
    runActivities: runActivitiesReducer,
  },
});
