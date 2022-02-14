import React, { useContext, useState, useEffect, useDebugValue } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addUserToState, removeUserFromState } from "../redux/user/userActions";

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
          name: userSessionData.userName,
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
      addUserToState({
        token: userDetails.token,
        userId: userDetails.userId,
        name: userDetails.userName,
      });
      console.log(userDetails)
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
      addUserToState({
        token: userDetails.token,
        userId: userDetails.userId,
        name: userDetails.userName,
      });
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
    removeUserFromState();
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
