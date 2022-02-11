import React from "react";
import { useAuth } from "../../../contexts/AuthCtx";

import styles from "../../../assets/scss/componentsStyles/Profile.module.scss";
import { Link } from "react-router-dom";

const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <div className={styles.profileContainer}>
      <div className={styles["prfileContainer-label"]}>
        <h1> Welcome , {currentUser?.name}</h1>
      </div>
      <div className={styles["profileContainer-welcomeContainer"]}>
        <p>So happy you’re here! The concept is simple:
          Step Forward helps you get organized, get motivated,
          get more done and start your own professional adventure by those small steps. </p>
      </div>
      <div className={styles["profileContainer-cardsContainer"]}>
        <div className={styles["profileContainer-cardsContainer-card"]}>
          <p >
            1. Choose the right document for you
          </p>
          <Link to="/documents">
            <button>Choose document </button>
          </Link>
        </div>
        <div className={styles["profileContainer-cardsContainer-card"]}>
          <p>
            2. Choose the right template for your document
          </p>
          <Link to="/templates">
            <button>Choose template</button>
          </Link>
        </div>
        <div className={styles["profileContainer-cardsContainer-card"]}>
          <p>
            3. Find out how to share your documents
          </p>
          <Link to="">
            <button>Check out HOW </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Profile;
