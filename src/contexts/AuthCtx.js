import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { TOKEN, USER_ID } from "./../api/constants.js";
import requester from "./../api/requester.js";
import { useUser } from "./UserCtx";

const AuthCtx = React.createContext();

export const useAuth = () => {
  return useContext(AuthCtx);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
//   const [userInfo, setUserInfo] = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState("");
  const [isRegistrationCompleted, setIsRegistrationCompleted] = useState(false);
  const navigate = useNavigate();

  const logout = async () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  const signup = async (data) => {
    requester
      .post("Authentication/register", data)
      .then((res) => {
        if (res !== undefined) {
          if (res.hasOwnProperty("status") == 400) {
            return { error: res.title };
          } else if (res.error) {
            return { error: res.error, loading: false };
          } else if (res.length >= 0) {
            res.forEach((err) =>
              this.setState({ error: err.description, loading: false })
            );
          }
        } else {
          sessionStorage.setItem("token", res.token);
          sessionStorage.setItem("user-id", res.userId);
        }
      })
      .then((res) => {
        return navigate("/");
      });

    //TODO GET USER SERVER RESPOND AND SAVE IT TO GLOBAL CNTX
  };

  const login = async (data) => {
      console.log(data);
    requester
      .post("Authentication/login", data)
      .then((res) => {
        if (!res.hasOwnProperty("status")) {
          sessionStorage.setItem(TOKEN, res.token);
          sessionStorage.setItem(USER_ID, res.userId);
          navigate("/");
        } else {
          if (res.status === 401) {
            return test({
              error:
                "***User does not exist or you may wrong the username or password.Please try again or register.",
            });
          }
          return { error: res.title };
        }
      })
      .catch((res) => {
        console.log(res);
      });
    setIsRegistrationCompleted(true);
    return;

    //TODO GET USER SERVER RESPOND AND SAVE IT TO GLOBAL CNTX
  };

  const value = {
    setIsRegistrationCompleted,
    login,
    signup,
    logout,
  };

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
};
