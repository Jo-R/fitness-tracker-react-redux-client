import React from "react";
import styles from "./ActivityCard.module.css";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";

export const ActivityCard = ({ title, distance, id }) => {
  return (
    <Card>
      <p className={styles.heading}>{title}</p>
      <div className={styles.content}>
        <p className={styles.description}>You ran {distance} miles</p>
        <Link to={`/activity/${id}`} className={styles.link}>
          View details
        </Link>
      </div>
    </Card>
  );
};
