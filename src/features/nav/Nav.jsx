import React from "react";
import styles from "./Nav.module.css";
import typeStyles from "../../sharedStyles/Typography.module.css";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={typeStyles.bannerTitle}>Track yo' runs</h1>
    </nav>
  );
};
