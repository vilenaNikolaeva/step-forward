import React, { useState } from "react";
import { useAuth } from "./../../contexts/AuthCtx";
import { useUser } from "./../../contexts/UserCtx";
import { useNavigate } from "react-router-dom";
import styles from '../../assets/scss/componentsStyles/UserForm.module.scss';

function Login() {
  const { login } = useAuth();
  const { setUserInfo } = useUser();
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
      setUserInfo(userDetails);
      setIsLoading(false);
      navigate("/profile");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      {isLoading ? (
        <p style={{ fontSize: "5rem", color: "green" }}>Loading...</p>
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
        // <form onSubmit={onLoginSubmit} className="">
        //   <input
        //     name="email"
        //     error={error ? error : null}
        //     type="email"
        //     placeholder="User email..."
        //     value={email}
        //     onChange={(e) => setEmail(e.target.value)}
        //   />

        //   <input
        //     name="password"
        //     type="password"
        //     placeholder="Password *"
        //     value={password}
        //     onChange={(e) => setPassword(e.target.value)}
        //   />
        //   <div className="">
        //     <button type="submit">LogIn</button>
        //   </div>
        // </form>
      )}
    </>
  );
}
export default Login;
