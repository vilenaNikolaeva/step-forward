import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "./../../contexts/AuthCtx";
import Spinner from "../Spinner";

import styles from '../../assets/scss/componentsStyles/UserForm.module.scss';

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onLoginSubmit = async (ev) => {
    ev.preventDefault();

    if (email === "" || password === "") {
      return setError("No empty fields are allowed!");
    }

    try {
      setIsLoading(true);

      const userDetails = await login({
        email: email,
        password: password,
      });

      if (typeof userDetails !== "string") {
        setIsLoading(false);
        navigate("/profile");
      }
      else {
        setIsLoading(false);
      }

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
          <h1>Login</h1>
          <form
            onSubmit={onLoginSubmit}
            className={styles["formContainer-form"]}
          >
            <input
              name="email"
              error={error ? error : null}
              type="email"
              placeholder="User email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              name="password"
              type="password"
              placeholder="Password *"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles["formContainer-form-btnBox"]}>
              <button type="submit"> LogIn </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
export default Login;
