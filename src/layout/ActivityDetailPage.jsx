import React from "react";
import { ViewRunActivity } from "../features/runActivities/ViewRunActivity";
import { AddRunActivity } from "../features/runActivities/AddRunActivity";
import { PageLayout } from "./PageLayout";

export const ActivityDetailPage = ({ children, ...props }) => {
  return (
    <PageLayout>
      <ViewRunActivity {...props} />
      <AddRunActivity {...props} />
    </PageLayout>
  );
};
