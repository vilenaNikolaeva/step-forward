import React, { useState } from "react";
import { useAuth } from "./../../contexts/AuthCtx";
import { useUser } from "./../../contexts/UserCtx";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const { updateUserContext } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onLoginSubmit = async (ev) => {
    console.log("Here");
    ev.preventDefault();

    if (username === "" || password === "") {
      return setError("No empty fields are allowed!");
    }

    try {
      const userDetails = await login({
        username: username,
        password: password,
      });
      updateUserContext(userDetails);
      navigate("/");
    } catch (err) {
      console.log(err.message);
      setError("Wrong email or password!");
    }
  };

  return (
    <>
      <form onSubmit={onLoginSubmit} className="">
        <input
          name="username"
          error={error ? error : null}
          type="text"
          placeholder="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          name="password"
          type="password"
          placeholder="Password *"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="">
          <button type="submit">LogIn</button>
        </div>
      </form>
    </>
  );
}
export default Login;
