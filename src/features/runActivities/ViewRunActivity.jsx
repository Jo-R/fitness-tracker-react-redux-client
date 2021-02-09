import React from "react";
import { useSelector } from "react-redux";
import { selectActivityById } from "./runActivitiesSlice";
import { Card } from "../../components/Card/Card";
import typeStyles from "../../sharedStyles/Typography.module.css";
import styles from "./ViewRunActivity.module.css";
import { BiArrowBack } from "react-icons/bi";
import placeholderImg from "../../assets/york.jpg";

export const ViewRunActivity = ({ match, history }) => {
  const runId = match.params.runId;

  const activity = useSelector((state) => selectActivityById(state, runId));

  const goBack = () => {
    history.push("/");
  };

  return (
    <Card>
      <button aria-label="back" className={styles.btn} onClick={goBack}>
        <span>
          <BiArrowBack size={"2em"} color={"var(--main-2"} />
        </span>
      </button>
      {activity ? (
        <>
          <h2 className={typeStyles.cardHeading}>{activity.title}</h2>
          <p>{`distance ${activity.distanceMile}`}</p>
        </>
      ) : (
        <p>No such activity</p>
      )}
      <div className={styles.grid}>
        <div>
          <p>some other details</p>
        </div>
        <img src={placeholderImg} alt="a map" />
      </div>
    </Card>
  );
};
