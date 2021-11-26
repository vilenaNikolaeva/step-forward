import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FaUserAlt, FaPen, FaHome } from "react-icons/fa";

function Navigation() {
  // CHECK IF THE USER IS LOGGEDIN

  const [loggedIn, setIsLoggedIn] = useState(false);

  const userNavbarLink = (
    <>
      <Link to="/myResume" className="nav-link active " aria-current="page">
        <FaUserAlt />
      </Link>
      <Link to="/edit" className="nav-link active" aria-current="page">
        <FaPen />
      </Link>
      <Link to="/logout" className="nav-link active" aria-current="page">
        Logout
      </Link>
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
    <div>
      <div>
        <img></img>
      </div>
      <button
        className="navbar-toggler "
        style={{ backgroundColor: "cadetblue" }}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div>
        <Link to="/">
          <FaHome />
        </Link>
        {loggedIn ? userNavbarLink : guestNavBarLink}
      </div>
    </div>
  );
}
export default Navigation;
