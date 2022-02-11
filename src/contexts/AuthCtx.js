import React, { useContext, useState, useEffect, useDebugValue } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import userService from "./../services/userService";
const AuthCtx = React.createContext();

export const useAuth = () => {
  return useContext(AuthCtx);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [isRegistrationCompleted, setIsRegistrationCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser == undefined) {
      const userSessionData = JSON.parse(sessionStorage.getItem("userData"));
      if (userSessionData) {
        setCurrentUser({
          token: userSessionData.token,
          userId: userSessionData.userId,
          name: userSessionData.name,
        });
      }
    }
  }, [currentUser]);

  const signup = async (data) => {
    const userDetails = await userService.addUserRegister(data);

    if (userDetails === "string") {
      return toast.error("Invalid input details. Try Agrain.");
    } else {
      setCurrentUser({
        token: userDetails.token,
        userId: userDetails.userId,
        name: userDetails.userName,
      });
      sessionStorage.setItem("userData", JSON.stringify(userDetails));
      setIsRegistrationCompleted(true);
      toast.success("Have a great experince ! ");
    }
    return currentUser;
  };

  const login = async (data) => {
    const userDetails = await userService.addUserLogin(data);

    if (typeof userDetails === "string" || typeof userDetails === '') {
      return toast.error("Invalid input details. Try Agrain.");
    }
    else {
      sessionStorage.setItem("userData", JSON.stringify(userDetails));
      setIsRegistrationCompleted(true);
      setCurrentUser({
        token: userDetails.token,
        userId: userDetails.userId,
        name: userDetails.userName,
      });
      toast.success("Have a great experince ! ");
    }
    setIsRegistrationCompleted(true);
    return userDetails;
  };

  const logout = async () => {
    sessionStorage.clear();
    setCurrentUser();
    navigate("/");
    return "";
  };

  const value = {
    currentUser,
    isRegistrationCompleted,
    setIsRegistrationCompleted,
    login,
    signup,
    logout,
  };

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
};
