import React from "react";
import { PageLayout } from "./PageLayout";
import { AddRunActivity } from "../features/runActivities/AddRunActivity";
import { RunActivities } from "../features/runActivities/RunActivities";
import { isLoggedInSelector } from "../features/userSlice";
import { useSelector } from "react-redux";

export const HomePage = ({ children, props }) => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return (
    <PageLayout>
      {isLoggedIn ? (
        <>
          <AddRunActivity {...props} />
          <RunActivities {...props} />
        </>
      ) : (
        <p>you need to log in...</p>
      )}
    </PageLayout>
  );
};
