import React from "react";
import { useSelector } from "react-redux";
import { selectActivityById } from "./runActivitiesSlice";

export const ViewRunActivity = ({ match }) => {
  const runId = match.params.runId;

  const activity = useSelector((state) => selectActivityById(state, runId));

  return (
    <div>
      {activity ? (
        <>
          <p>{activity.title}</p>
          <p>{`distance ${activity.distanceMile}`}</p>
        </>
      ) : (
        <p>No such activity</p>
      )}
    </div>
  );
};
