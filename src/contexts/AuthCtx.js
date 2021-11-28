import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { TOKEN, USER, USER_ID } from "./../api/constants.js";
import requester from "./../api/requester.js";
import { useUser } from "./UserCtx";

const AuthCtx = React.createContext();

export const useAuth = () => {
  return useContext(AuthCtx);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isRegistrationCompleted, setIsRegistrationCompleted] = useState(false);
  const navigate = useNavigate();

  const signup = async (data) => {
    console.log(data);
    requester
      .post("Authentication/register", data)
      .then((res) => {
        if (res !== undefined) {
          if (res.hasOwnProperty("status") == 400) {
            return console.log(res.title);
          } else if (res.error) {
            return console.log(res.error);
          } else if (res.length >= 0) {
            res.forEach((err) => console.log({ error: err.description }));
          }
        } else {
          sessionStorage.setItem("token", res.token);
          sessionStorage.setItem("user-id", res.userId);
          setCurrentUser({'username': res.username, 'email':res.email, 'userId': res.userId});
        }
      })
      .then((res) => {
        return navigate("/");
      });
    setIsRegistrationCompleted(true);
    return currentUser;
    //TODO GET USER SERVER RESPOND AND SAVE IT TO GLOBAL CNTX
  };

  const login = async (data) => {
    requester
      .post("Authentication/login", data)
      .then((res) => {
        if (!res.hasOwnProperty("status")) {
          sessionStorage.setItem(USER, "true");
          sessionStorage.setItem(TOKEN, res.token);
          sessionStorage.setItem(USER_ID, res.userId);
          setCurrentUser({ 'user_Id':res.userId, 'token': res.token});
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
    return currentUser ;

    //TODO GET USER SERVER RESPOND AND SAVE IT TO GLOBAL CNTX
  };

  const value = {
    setIsRegistrationCompleted,
    login,
    signup,
    // logout,
  };

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
};
