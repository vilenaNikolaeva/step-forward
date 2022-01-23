import React, { useContext, useEffect, useState } from "react";

import { useAuth } from "./AuthCtx.js";

const UserCtx = React.createContext();

export const useUser = () => {
  return useContext(UserCtx);
};

export const UserProvider = ({ children }) => {
  const { setIsRegistrationCompleted } = useAuth();
  const [userInfo, setUserInfo] = useState({});
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    if (userInfo === undefined || userInfo === null) {
      const userDataFromSessionStorage = sessionStorage.getItem("userData");

      if (userDataFromSessionStorage) {
        setUserInfo(userDataFromSessionStorage);
        setIsRegistrationCompleted(true);
        setIsUserLoading(false);
      }
      setIsUserLoading(false);
    } else {
      setIsUserLoading(false);
    }
  }, [userInfo, setIsRegistrationCompleted]);

  const updateUserContext = async (newUserData) => {
    setUserInfo(newUserData);
  };

  const clearUserInfo = () => {
    setUserInfo({});
  };

  const value = {
    userInfo,
    setUserInfo,
    updateUserContext,
    isUserLoading,
    clearUserInfo,
  };

  return <UserCtx.Provider value={value}>{children}</UserCtx.Provider>;
};
