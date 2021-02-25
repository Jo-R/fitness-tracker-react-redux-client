import { configureStore } from "@reduxjs/toolkit";
import runActivitiesReducer from "../features/runActivities/runActivitiesSlice";
import userReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    runActivities: runActivitiesReducer,
    user: userReducer,
  },
});
