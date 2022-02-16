import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthCtx";
import logo from "../assets/images/Logo.png";
import styles from "../assets/scss/componentsStyles/Header.module.scss";
import {  useSelector } from "react-redux";

function Header() {
  const user = useSelector((state) => state.user.userData);
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const userNavbarLink = (
    <>
      <button
        className={styles["headerContainer-logoutBtn"]}
        type="button"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );

  const guestNavBarLink = (
    <>
      <Link to="/login" className={styles['headerContainer-btn']} aria-current="page">
        Login
      </Link>
      <Link to="/signup" className={styles['headerContainer-btn']} aria-current="page">
        SignUp
      </Link>
    </>
  );

  return (
    <div className={styles.headerContainer}>
      <Link to="/" className={styles['headerContainer-logo']}>
        <img src={logo} width={100} height={100} alt="logo_img"></img>
      </Link>
      <div className={styles['headerContainer-nav']}>
        {Object.entries(user).length > 0 ? userNavbarLink : guestNavBarLink}</div>
    </div>
  );
}
export default Header;
