import React from "react";
import { useAuth } from "../../../contexts/AuthCtx";
import { Link } from "react-router-dom";

import styles from "../../../assets/scss/componentsStyles/Profile.module.scss";

const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <div className={styles.userInfoBtn}>
        <button>Personal Info </button>
      </div>
      <div className={styles.profileContainer}>
        <div className={styles["prfileContainer-label"]}>
          <h1> Welcome , {currentUser?.name}</h1>
        </div>
        <div className={styles["profileContainer-welcomeContainer"]}>
          <p>So happy that you’re here! The concept is simple:
            Step Forward helps you get organized, motivated,
            get more done and start your own professional adventure by those small steps. </p>
        </div>
        <div>
        </div>
        <div className={styles["profileContainer-cardsContainer"]}>
          <div className={styles["profileContainer-cardsContainer-card"]}>
            <p>
              1. Choose the right template for your document
            </p>
            <Link to="/profile/templates">
              <button>Choose template</button>
            </Link>
          </div>
          <div className={styles["profileContainer-cardsContainer-card"]}>
            <p >
              2. Fill in your information
            </p>
            <Link to="/profile/exampleCv">
              <button>Check out the examples </button>
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
    </div>
  );
};
export default Profile;
