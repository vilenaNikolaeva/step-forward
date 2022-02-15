import React, { useState } from "react";
import { useAuth } from "./../../contexts/AuthCtx";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "./../../contexts/UserCtx";
import { toast } from "react-toastify";
import { addUserToState } from './../../redux/user/userActions'

import styles from '../../assets/scss/componentsStyles/UserForm.module.scss';
import { connect } from "react-redux";
import Spinner from "../Spinner";

function SignUp() {
  const { signup } = useAuth();
  const { updateUserContext } = useUser();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatedPassword, setRepeatedPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onRegisterSubmit = async (event) => {
    event.preventDefault();

    if (password !== repeatedPassword) {
      return toast.error("Password should match!");
    }

    try {
      setIsLoading(true);
      const userDetails = await signup({
        username: username,
        email: email,
        password: password,
      });
      updateUserContext(userDetails);
      setIsLoading(false);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.formContainer}>
          <h1>Sign Up</h1>
          <form onSubmit={onRegisterSubmit} className={styles['formContainer-form']}>
            <input
              name="username"
              type="text"
              placeholder="** Place your username..."
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              name="email"
              type="email"
              placeholder=" ** Place your email..."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              name="password"
              type="password"
              placeholder="** Place your password..."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              name="repeatedPass"
              type="password"
              placeholder="** Repeat your password..."
              value={repeatedPassword}
              onChange={(e) => {
                setRepeatedPassword(e.target.value);
              }}
            />
            <div className={styles['formContainer-form-btnBox']}>
              <button type="submit"> SignUp </button>
            </div>
          </form>
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      )}
    </>
  );
} const mapDispatchToProps = dispatch => {
  return {
    addUserToState: (userData) => dispatch(addUserToState(userData))
  }
}

export default connect(null, mapDispatchToProps)(SignUp);