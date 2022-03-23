import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../contexts/ModalCtx";

import {
  getUserInfoAsync,
  updateUserFullName,
  updateUserAddress,
  updateUserEmail,
  updateUserPhone,
  updateUserLink,
  updateUserInfo,
  updateUserDescription,
  updateUserProfileStatus
  // updateUserProfileInfo,
} from "../../features/userSlice.js";
import ModalWrapper from "../../wrappers/ModalWrapper";
import Spinner from "../../components/Spinner";
import ImageCropper from "./ImageCropper";

import styles from "../../assets/scss/componentsStyles/modals/userModals/ModalUserProfile.module.scss";

const ModalUserProfile = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userData.userId);
  const userInfo = useSelector((state) => state.user.userProfileInfo);
  const { isOpenUserProfileModal, setIsOpenUserProfileModal } = useModal();

  useEffect(() => {
    dispatch(getUserInfoAsync(userId));
  }, []);

  const handleUpdateUserInfo = (e) => {
    e.preventDefault();
    dispatch(updateUserInfo({ userId, userInfo }));
    setIsOpenUserProfileModal(false);
  };
  return (
    <>
      {!userInfo ? (
        <Spinner />
      ) : (
        <ModalWrapper
          setIsOpenModalComponent={setIsOpenUserProfileModal}
          isOpenModalComponent={isOpenUserProfileModal}
        >
          <div className={styles["modal-container"]}>
            <form
              className={styles["modal-container-form"]}
              onSubmit={handleUpdateUserInfo}
            >
              <label className={styles["modal-container-form-share"]}>
                <input
                  type="checkbox"
                  name="isItPublic"
                  defaultChecked={userInfo.isItPublic ? "checked" : null}
                  onClick={(e) => dispatch(updateUserProfileStatus(e.target.value))}
                />{" "}
                SHARE
              </label>
              <label>Full Name:</label>
              <input
                type="text"
                name="username"
                defaultValue={userInfo?.username}
                onChange={(e) => dispatch(updateUserFullName(e.target.value))}
                placeholder="Full Name..."
              />
              <label>Address:</label>
              <input
                type="text"
                name="address"
                defaultValue={userInfo?.address}
                onChange={(e) => dispatch(updateUserAddress(e.target.value))}
                placeholder="Address..."
              />
              <label>Email:</label>
              <input
                type="text"
                name="email"
                defaultValue={userInfo?.email}
                onChange={(e) => dispatch(updateUserEmail(e.target.value))}
                placeholder="Email..."
              ></input>
              <label>Phone number:</label>
              <input
                type="text"
                name="phone"
                defaultValue={userInfo?.phone}
                onChange={(e) => dispatch(updateUserPhone(e.target.value))}
                placeholder="Phone..."
              />
              <label>Link:</label>
              <input
                type="text"
                name="link"
                defaultValue={userInfo?.link}
                onChange={(e) => dispatch(updateUserLink(e.target.value))}
                placeholder="Link..."
              />
              <label>Personal Description:</label>
              <textarea
                type="text"
                name="description"
                defaultValue={userInfo?.description}
                onChange={(e) =>
                  dispatch(updateUserDescription(e.target.value))
                }
                placeholder="Personal description..."
              />
              <div className={styles["modal-container-form-btnContainer"]}>
                <button
                  className={styles["modal-container-form-btnContainer-close"]}
                  onClick={()=>setIsOpenUserProfileModal(false)}
                >
                  Close
                </button>
                <button
                  className={styles["modal-container-form-btnContainer-save"]}
                  type="submit"
                >
                  Edit
                </button>
              </div>
            </form>
            <ImageCropper />
          </div>
        </ModalWrapper>
      )}
    </>
  );
};
export default ModalUserProfile;
