import React, { useContext, useEffect, useState } from 'react';

import { useAuth } from './AuthCtx.js';

const UserCtx = React.createContext();

export const useUser = () => {
    return useContext(UserCtx);
};

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const { setIsRegistrationCompleted } = useAuth();

    useEffect(() => {
        return '';
    }, [userInfo, setIsRegistrationCompleted]);

    const updateUserContext = (newUserData) => {
        localStorage.setItem('userData', JSON.stringify(newUserData));
        setUserInfo(newUserData);
    } 

    const value = {
        userInfo,
        updateUserContext,
    };

    return <UserCtx.Provider value={value}>{children}</UserCtx.Provider>;
};
