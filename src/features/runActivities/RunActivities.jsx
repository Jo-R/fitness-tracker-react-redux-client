import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./RunActivities.module.css";
import { ActivityCard } from "../../components/ActivityCard/ActivitySummaryCard";
import { selectAllActivities, fetchActivities } from "./runActivitiesSlice";

// TODO loading and error styles
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
    // Sort items in reverse chronological order by datetime string
    const orderedActivities = runList
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

    content = orderedActivities.map((el) => (
      <React.Fragment key={el.id}>
        <li className={styles.item}>
          <ActivityCard
            title={el.title}
            distance={el.distanceMile}
            id={el.id}
          />
        </li>
      </React.Fragment>
    ));
  } else if (activitiesStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section>
      <h2 className={styles.heading}>Your activities:</h2>
      <ul className={styles.unstyled}>{content}</ul>
    </section>
  );
};
