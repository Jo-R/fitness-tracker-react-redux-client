import React from "react";
import { useSelector } from "react-redux";

export const ViewRunActivity = ({ match }) => {
  console.log(match);
  const runId = match.params.runId;

  const activity = useSelector((state) =>
    state.runActivities.find((activity) => activity.id === runId)
  );

  return (
    <div>
      {activity ? (
        <>
          <p>{activity.title}</p>
          <p>{`distance ${activity.distance}`}</p>
        </>
      ) : (
        <p>No such activity</p>
      )}
    </div>
  );
};
