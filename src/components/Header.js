import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaPen, FaHome } from "react-icons/fa";
import { useUser } from "../contexts/UserCtx";
import { useAuth } from "../contexts/AuthCtx";
import logo from "../assets/images/Logo.png";
import styles from "../assets/scss/styles/Header.module.scss";

function Header() {
  const { currentUser, logout } = useAuth();
  const { clearUserInfo } = useUser();

  const handleLogout = () => {
    clearUserInfo();
    logout();
  };

  const userNavbarLink = (
    <>
      <Link to="/profile" className="nav-link active " aria-current="page">
        <FaUserAlt />
      </Link>
      <Link to="/edit" className="nav-link active" aria-current="page">
        <FaPen />
      </Link>
      <button
        className="navbar-toggler "
        style={{ backgroundColor: "cadetblue", width: "5rem", height: "2rem" }}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="true"
        aria-label="Toggle navigation"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );

  const guestNavBarLink = (
    <>
      <Link to="/login" className="nav-link active" aria-current="page">
        Login
      </Link>
      <Link to="/signup" className="nav-link active" aria-current="page">
        SignUp
      </Link>
    </>
  );

  return (
    <div className={styles.headerContainer}>
      <Link to="/">
        <img src={logo} width={80} height={80} alt="logo_img"></img>
      </Link>
      {currentUser ? userNavbarLink : guestNavBarLink}
    </div>
  );
}
export default Header;
