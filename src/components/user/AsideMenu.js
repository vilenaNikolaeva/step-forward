import React from "react";
import { Link } from "react-router-dom";

import styles from "../../assets/scss/componentsStyles/AsideMenu.module.scss";

const AsideMenu = () => {
  return (
      <aside className={styles.asideMenuContainer}>
        <Link to="/profile" className={styles["asideMenuContainer-link"]}>
          Profile
        </Link>
        <Link
          to="/profile/myDocuments" className={styles["asideMenuContainer-link"]}
        >
          My Documents
        </Link>
        <Link to="/profile/templates" className={styles["asideMenuContainer-link"]}>
          Templates
        </Link>
        <Link
          to="/profile/exampleCv" className={styles["asideMenuContainer-link"]}>
          Examples
        </Link>
      </aside>
  );
};

export default AsideMenu;
