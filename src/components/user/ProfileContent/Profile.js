import React from "react";
import { useAuth } from "../../../contexts/AuthCtx";
import { Link } from "react-router-dom";

import styles from "../../../assets/scss/componentsStyles/Profile.module.scss";

const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <div className={styles.profileContainer}>
      <div className={styles["prfileContainer-label"]}>
        <h1> Hello , {currentUser.name}</h1>
      </div>
      <div className={styles["profileContainer-welcomeContainer"]}>
        <p>Some welcome message over </p>
      </div>
      <div className={styles["profileContainer-cardsContainer"]}>
        <p className={styles["profileContainer-cardsContainer-card"]}>
          Choose template card
          <button>Choose </button>
        </p>
        <p className={styles["profileContainer-cardsContainer-card"]}>
          Build a CV card
          <button>Create your CV </button>
        </p>
        <p className={styles["profileContainer-cardsContainer-card"]}>
          Ways to share and send your document
          <button>Check out HOW </button>
        </p>
      </div>
    </div>
  );
};
export default Profile;
