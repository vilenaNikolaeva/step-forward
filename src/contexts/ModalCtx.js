import React, { useContext, useState } from 'react';

const ModalCtx = React.createContext();

export const useModal = () => useContext(ModalCtx);

export const ModalProvider = ({ children }) => {
   const [isOpenUserProfileModal, setIsOpenUserProfileModal] = useState(false);
   const [isOpenUserCvTemplateModal, setIsOpenUserCvTemplateModal] = useState(false);
   const showUserProfileInfo = () =>{
       setIsOpenUserProfileModal(true);
   }
    const closeModal = () => {
        setIsOpenUserProfileModal(false);
    }
    const value = {
        closeModal,
        isOpenUserProfileModal,
        setIsOpenUserProfileModal,
        isOpenUserCvTemplateModal,
        setIsOpenUserCvTemplateModal,
        showUserProfileInfo
    };
    return <ModalCtx.Provider value={value}>{children}</ModalCtx.Provider>;
};