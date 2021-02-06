import React from "react";
import { ViewRunActivity } from "../features/runActivities/ViewRunActivity";
import { PageLayout } from "./PageLayout";

export const ActivityDetailPage = ({ children, ...props }) => {
  return (
    <PageLayout>
      <>
        <ViewRunActivity {...props} />
      </>
    </PageLayout>
  );
};
