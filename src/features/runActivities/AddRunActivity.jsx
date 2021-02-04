import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addActivity } from "./runActivitiesSlice";

export const AddRunActivity = () => {
  const dispatch = useDispatch();
  const [distance, setDistance] = useState("");
  const [title, setTitle] = useState("");

  const handleTitleInput = (evt) => {
    setTitle(evt.target.value);
  };

  const handleDistanceInput = (evt) => {
    setDistance(evt.target.value);
  };

  const handleSave = () => {
    dispatch(addActivity(title, distance));
    setDistance("");
    setTitle("");
  };

  return (
    <div>
      <label htmlFor="titleInput">Title</label>
      <input id="titleInput" value={title} onChange={handleTitleInput}></input>
      <label htmlFor="distanceInput">distance</label>
      <input
        id="distanceInput"
        value={distance}
        onChange={handleDistanceInput}
      ></input>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};
