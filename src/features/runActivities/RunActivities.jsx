import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const RunActivities = () => {
  const runList = useSelector((state) => state.runActivities);
  return (
    <>
      {runList && (
        <ul>
          {runList.map((el, i) => (
            <>
              <li key={i}>{el.title}</li>
              <Link to={`/activity/${el.id}`}>View details</Link>
            </>
          ))}
        </ul>
      )}
    </>
  );
};
