import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../contexts/ModalCtx";

import userService from "../../services/userService";

import ModalWrapper from "../../wrappers/ModalWrapper";
import Spinner from '../../components/Spinner';
import ImageCropper from "./ImageCropper";

import styles from '../../assets/scss/componentsStyles/modals/userModals/ModalUserProfile.module.scss';

const ModalUserProfile = () => {
    const userId = useSelector((state) => state.user.userData.userId);

    const { isOpenUserProfileModal, setIsOpenUserProfileModal } = useModal();
    const [userInfo, setUserInfo] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        userService.getUserProfileInfo(userId)
            .then(res => setUserInfo(...res), setIsLoading(false));
    }, [])

    return (
        <>
            {isLoading ? <Spinner /> :
                <ModalWrapper
                    setIsOpenModalComponent={setIsOpenUserProfileModal}
                    isOpenModalComponent={isOpenUserProfileModal}
                >
                    {console.log(userInfo)}
                    <div className={styles['modal-container']}>
                        <form className={styles['modal-container-form']} >
                            <label className={styles['modal-container-form-share']}>
                                <input
                                    type="checkbox"
                                    name="isItPublic"
                                    checked={userInfo?.isItPublic ? "checked" : null}
                                // onClick={() => this.setState({ isItPublic: !this.state.isItPublic })}
                                /> SHARE
                            </label>
                            <label >Full Name:</label>
                            <input type="text" name="username" defaultValue={userInfo?.username} placeholder="Full Name..." />
                            <label >Address:</label>
                            <input type="text" name="address" defaultValue={userInfo?.address} placeholder="Address..." />
                            <label >Email:</label>
                            <input type="text" name="email" defaultValue={userInfo?.email} placeholder="Email..."></input>
                            <label >Phone number:</label>
                            <input type="text" name="phone" defaultValue={userInfo?.phone} placeholder="Phone..." />
                            <label >Link:</label>
                            <input type="text" name="link" defaultValue={userInfo?.link} placeholder="Link..." />
                            <label >Personal Description:</label>
                            <textarea type="text" name="description" defaultValue={userInfo?.description} placeholder="Personal description..." />
                            <div className={styles['modal-container-form-btnContainer']}>
                                <button className={styles['modal-container-form-btnContainer-close']}>Close</button>
                                <button className={styles['modal-container-form-btnContainer-save']} type="submit" onClick={() => setIsOpenUserProfileModal(false)} >Edit</button>
                            </div>
                        </form>
                        <ImageCropper />
                    </div>
                </ModalWrapper>
            }
        </>
    );
}
export default ModalUserProfile;