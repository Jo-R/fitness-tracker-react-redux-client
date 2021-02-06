import React from "react";
import { Nav } from "../features/nav/Nav";
import styles from "./PageLayout.module.css";

export const PageLayout = ({ children }) => {
  return (
    <div className={styles.grid}>
      <Nav />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
