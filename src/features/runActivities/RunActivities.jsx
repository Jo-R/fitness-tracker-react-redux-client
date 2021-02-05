import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllActivities, fetchActivities } from "./runActivitiesSlice";

export const RunActivities = () => {
  const dispatch = useDispatch();
  const runList = useSelector(selectAllActivities);

  const activitiesStatus = useSelector((state) => state.runActivities.status);
  const error = useSelector((state) => state.runActivities.error);

  useEffect(() => {
    if (activitiesStatus === "idle") {
      dispatch(fetchActivities());
    }
  }, [activitiesStatus, dispatch]);

  let content;
  if (activitiesStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (activitiesStatus === "succeeded") {
    if (runList.length === 0) {
      content = <p>No activities to display</p>;
      return;
    }
    // Sort posts in reverse chronological order by datetime string
    const orderedActivities = runList
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

    content = orderedActivities.map((el) => (
      <React.Fragment key={el.id}>
        <li>{el.title}</li>
        <Link to={`/activity/${el.id}`}>View details</Link>
      </React.Fragment>
    ));
  } else if (activitiesStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section>
      <h2>Your activities</h2>
      <ul>{content}</ul>
    </section>
  );
};
