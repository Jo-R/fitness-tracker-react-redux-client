import React from "react";
import { useSelector } from "react-redux";
import { selectActivityById } from "./runActivitiesSlice";
import { Card } from "../../components/Card/Card";
import typeStyles from "../../sharedStyles/Typography.module.css";

export const ViewRunActivity = ({ match }) => {
  const runId = match.params.runId;

  const activity = useSelector((state) => selectActivityById(state, runId));

  return (
    <Card>
      {activity ? (
        <>
          <h2 className={typeStyles.cardHeading}>{activity.title}</h2>
          <p>{`distance ${activity.distanceMile}`}</p>
        </>
      ) : (
        <p>No such activity</p>
      )}
    </Card>
  );
};
