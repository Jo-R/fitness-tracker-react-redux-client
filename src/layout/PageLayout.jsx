import React from "react";
import styles from "./PageLayout.module.css";

export const PageLayout = ({ children }) => {
  return (
    <div className={styles.grid}>
      <nav>Nav</nav>
      <main>{children}</main>
    </div>
  );
};
