import React from "react";
import styles from "./ActivityCard.module.css";
import { Link } from "react-router-dom";

export const ActivityCard = ({ title, distance, id }) => {
  return (
    <div className={styles.card}>
      <p className={styles.heading}>{title}</p>
      <div className={styles.content}>
        <p className={styles.description}>You ran {distance} miles</p>
        <Link to={`/activity/${id}`} className={styles.link}>
          View details
        </Link>
      </div>
    </div>
  );
};
