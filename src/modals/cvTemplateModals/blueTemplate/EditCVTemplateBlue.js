import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import EditExperience from "../EditExperience";
import EditEducation from "../EditEducation";
import EditSkill from "../EditSkill";
import EditLanguage from "../EditLanguage";

import {
  updateUserDescription,
  updateUserJobTitle,
  updateUserFullName,
  updateUserEmail,
  updateUserAddress,
  updateUserPhone,
  updateUserLink,
  getUserInfoAsync,
  updateUserInfo,
  updateUserOtherConnections,
} from "../../../features/userSlice";

import {
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaRegEnvelope,
  FaUserAlt,
  FaLink,
} from "react-icons/fa";

import logo from "../../../assets/images/Logo.png";
import styles from "../../../assets/scss/componentsStyles/templates/EditCvTemplateBlue.module.scss";
import { useModal } from "../../../contexts/ModalCtx";
import { Navigate } from "react-router-dom";

const EditCVTemplateBlue = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userData.userId);
  const userInfo = useSelector((state) => state.user.userProfileInfo);
  const { setIsOpenUserCvTemplateModal } = useModal();
  
  useEffect(() => {
    dispatch(getUserInfoAsync(userId));
  }, []);

  const handleUpdateUserInfo = (e) => {
    e.preventDefault();
    dispatch(updateUserInfo({ userId, userInfo }));
  };

  return (
    <div className={styles.tempBlue}>
      <button
        className={styles["tempBlue-clsBtn"]}
        onClick={() => setIsOpenUserCvTemplateModal(false)}
      >
        CLOSE
      </button>
      <form onSubmit={handleUpdateUserInfo} className={styles["tempBlue-prfl"]}>
        <div className={styles["tempBlue-prfl-objective"]}>
          <input
            type="text"
            name="username"
            defaultValue={userInfo.username}
            onChange={(e) => dispatch(updateUserFullName(e.target.value))}
            placeholder="Full Name..."
          />
          <input
            type="text"
            name="jobTitle"
            defaultValue={userInfo?.jobTitle}
            onChange={(e) => dispatch(updateUserJobTitle(e.target.value))}
            placeholder="Job title..."
          />
          <textarea
            type="text"
            name="description"
            defaultValue={userInfo.description}
            onChange={(e) => dispatch(updateUserDescription(e.target.value))}
            placeholder="Summary..."
          />
        </div>
        <div className={styles["tempBlue-prfl-image"]}>
          {userInfo.imageSrc ? (
            <img
              alt="user Imagae"
              width={130}
              height={130}
              src={userInfo.imageSrc}
            />
          ) : (
            <FaUserAlt width={100} height={100} />
          )}
        </div>
        <div className={styles["tempBlue-prfl-info"]}>
          <span>
              <input
                type="text"
                name="email"
                defaultValue={userInfo.email}
                onChange={(e) => dispatch(updateUserEmail(e.target.value))}
                placeholder="Email addres..."
              />
            <FaRegEnvelope />
          </span>
          <span>
              <input
                type="text"
                name="address"
                defaultValue={userInfo.address}
                onChange={(e) => dispatch(updateUserAddress(e.target.value))}
                placeholder="Address..."
              />
            <FaMapMarkerAlt />
          </span>
          <span>
              <input
                type="text"
                name="phone"
                defaultValue={userInfo.phone}
                onChange={(e) => dispatch(updateUserPhone(e.target.value))}
                placeholder="Phone number..."
              />
            <FaPhone />
          </span>
          <span>
              <input
                type="text"
                name="link"
                defaultValue={userInfo.link}
                onChange={(e) => dispatch(updateUserLink(e.target.value))}
                placeholder="Link..."
              />
            <FaLinkedin />
          </span>
          <span>
              <input
                type="text"
                name="otherConnections"
                defaultValue={userInfo.otherConnections}
                onChange={(e) =>
                  dispatch(updateUserOtherConnections(e.target.value))
                }
                placeholder="Other connections..."
              />
            <FaLink />
          </span>
        </div>
        <button className={styles['tempBlue-prfl-svBtn']}type="submit">Save</button>
      </form>
      <div className={styles["tempBlue-cntnt"]}>
        <div className={styles["tempBlue-cntnt-ltBox"]}>
          <div className={styles["tempBlue-cntnt-ltBox-experience"]}>
            <label>Experiences</label>
            <div className={styles["tempBlue-cntnt-ltBox-experience-content"]}>
              <EditExperience />
            </div>
          </div>
          <div className={styles["tempBlue-cntnt-ltBox-skills"]}>
            <label>Skills</label>
            <div className={styles["tempBlue-cntnt-ltBox-skills-list"]}>
              <EditSkill />
            </div>
          </div>
        </div>
        <div className={styles["tempBlue-cntnt-rtBox"]}>
          <div className={styles["tempBlue-cntnt-rtBox-education"]}>
            <label>Education</label>
            <div className={styles["tempBlue-cntnt-rtBox-education-content"]}>
              <EditEducation />
            </div>
          </div>
          <div className={styles["tempBlue-cntnt-rtBox-languages"]}>
            <label>Languages</label>
            <div className={styles["tempBlue-cntnt-rtBox-languages-list"]}>
              <EditLanguage />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.logo}>
        <img src={logo} width={70} height={70}></img>
      </div>
    </div>
  );
};

export default EditCVTemplateBlue;
