import React from "react";

import styles from "../assets/scss/componentsStyles/AppWrapper.module.scss";

const AppWrapper = ({ children }) => {
  return (
    <div className={styles.area}>
      <ul className={styles["area-circles"]}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      {children}
    </div>
  );
};

export default AppWrapper;
