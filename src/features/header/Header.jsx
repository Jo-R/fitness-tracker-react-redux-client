import React from "react";
import styles from "./Header.module.css";
import typeStyles from "../../sharedStyles/Typography.module.css";
import { isLoggedInSelector, toggleIsLoggedIn } from "../userSlice";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const dispatch = useDispatch();
  return (
    <header className={styles.header}>
      <h1 className={typeStyles.bannerTitle}>Track yo' runs</h1>
      {isLoggedIn ? (
        <button onClick={() => dispatch(toggleIsLoggedIn())}>Log out</button>
      ) : (
        <button onClick={() => dispatch(toggleIsLoggedIn())}>Log in</button>
      )}
    </header>
  );
};
