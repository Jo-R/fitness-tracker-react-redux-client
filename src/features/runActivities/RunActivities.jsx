import React from "react";
import { useSelector } from "react-redux";

export const RunActivities = () => {
  const runList = useSelector((state) => state.runActivities);
  return (
    <>
      {runList && (
        <ul>
          {runList.map((el, i) => (
            <li key={i}>{el.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};
