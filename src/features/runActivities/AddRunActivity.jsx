import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewRun } from "./runActivitiesSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import styles from "./AddRunActivity.module.css";
import typeStyles from "../../sharedStyles/Typography.module.css";
import { Card } from "../../components/Card/Card";

export const AddRunActivity = ({ className }) => {
  const dispatch = useDispatch();
  const [distance, setDistance] = useState("");
  const [title, setTitle] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const handleTitleInput = (evt) => {
    setTitle(evt.target.value);
  };

  const handleDistanceInput = (evt) => {
    setDistance(evt.target.value);
  };

  const canSave =
    [title, distance].every(Boolean) && addRequestStatus === "idle";

  const handleSave = async (evt) => {
    evt.preventDefault();
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        const resultAction = await dispatch(addNewRun({ title, distance }));
        unwrapResult(resultAction);
        setDistance("");
        setTitle("");
      } catch (err) {
        // TODO display this error properly
        console.error("Failed to save the run: ", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <section className={className}>
      <Card>
        <form onSubmit={handleSave}>
          <h3 className={typeStyles.sectionHeading}>Add new run</h3>
          <div className={styles.grid}>
            <label htmlFor="titleInput">Title</label>
            <input
              id="titleInput"
              value={title}
              onChange={handleTitleInput}
            ></input>
            <label htmlFor="distanceInput">distance</label>
            <input
              id="distanceInput"
              value={distance}
              onChange={handleDistanceInput}
            ></input>
          </div>
          <div className={styles.rightAlign}>
            <button
              onClick={handleSave}
              type="submit"
              disabled={!canSave}
              className={styles.btn}
            >
              Save
            </button>
          </div>
        </form>
      </Card>
    </section>
  );
};
