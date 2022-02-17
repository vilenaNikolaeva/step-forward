import React from "react";
import styles from "../assets/scss/componentsStyles/PageWrapper.module.scss";
import Modals from "../modals/Modals";

const PageWrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {children}
      <Modals />
    </div>
  );
};

export default PageWrapper;
