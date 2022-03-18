import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { currentUserInfo, clearUserInfo } from "../features/userSlice";
import userService from "./../services/userService";

const AuthCtx = React.createContext();

export const useAuth = () => {
  return useContext(AuthCtx);
};

export const AuthProvider = ({ children }) => {
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  const [isRegistrationCompleted, setIsRegistrationCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.entries(user).length <= 0) {
      const userSessionData = JSON.parse(sessionStorage.getItem("userData"));
      if (userSessionData) {
        dispatch(
          currentUserInfo({
            token: userSessionData.token,
            userId: userSessionData.userId,
            name: userSessionData.userName,
          })
        );
      }
    }
  }, []);

  const signup = async (data) => {
    const userDetails = await userService.addUserRegister(data);

    if (userDetails === "string") {
      return toast.error("Invalid input details. Try Agrain.");
    } else {
      dispatch(
        currentUserInfo({
          token: userDetails.token,
          userId: userDetails.userId,
          name: userDetails.userName,
        })
      );
      sessionStorage.setItem("userData", JSON.stringify(userDetails));
      setIsRegistrationCompleted(true);
      toast.success("Have a great experince ! ");
    }
    return userDetails;
  };

  const login = async (data) => {
    const userDetails = await userService.addUserLogin(data);

    if (typeof userDetails === "string" || typeof userDetails === "") {
      return toast.error("Invalid input details. Try Agrain.");
    } else {
      sessionStorage.setItem("userData", JSON.stringify(userDetails));
      setIsRegistrationCompleted(true);
      dispatch(
        currentUserInfo({
          token: userDetails.token,
          userId: userDetails.userId,
          name: userDetails.userName,
        })
      );
      toast.success("Have a great experince ! ");
    }
    setIsRegistrationCompleted(true);
    return userDetails;
  };

  const logout = async () => {
    sessionStorage.clear();
    dispatch(clearUserInfo());
    return navigate("/");
  };

  const value = {
    isRegistrationCompleted,
    setIsRegistrationCompleted,
    login,
    signup,
    logout,
  };

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
};
