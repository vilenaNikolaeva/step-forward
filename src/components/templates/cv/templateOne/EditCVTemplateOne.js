import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ExperienceContent from "../ExperienceContent";
import EducationContent from "../EducationContent";
import {
  updateUserDescription,
  updateUserJobTitle,
  updateUserFullName,
  updateUserProfileInfo,
  updateUserEmail,
  updateUserAddress,
  updateUserPhone,
  updateUserLink,
  getUserInfoAsync,
  updateUserInfo,
  updateUserOtherConnections,
} from "../../../../features/userSlice";

import {
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaRegEnvelope,
  FaUserAlt,
  FaLink,
} from "react-icons/fa";

import logo from "../../../../assets/images/Logo.png";
import styles from "../../../../assets/scss/componentsStyles/templates/CVTemplateOne.module.scss";
import { getUserExperiencesAsync } from "../../../../features/experienceSlice";
import EditExperience from "../EditExperience";


const EditCVTemplateOne = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userData.userId);
  const userInfo = useSelector((state) => state.user.userProfileInfo);

  useEffect(() => {
    dispatch(getUserInfoAsync(userId));
  }, []);

  const handleUpdateUserInfo = (e) => {
    e.preventDefault();
    dispatch(updateUserInfo({ userId, userInfo }));
  };
  // TODOO
  //  const handleUpdateExpereince=(e)=>{}

  return (
    <div className={styles.templateOne}>
      <form
        onSubmit={handleUpdateUserInfo}
        className={styles["templateOne-profile"]}
      >
        <div className={styles["templateOne-profile-objective"]}>
          {userId ? (
            <input
              type="text"
              name="username"
              defaultValue={userInfo.username}
              onChange={(e) => dispatch(updateUserFullName(e.target.value))}
              placeholder="Full Name..."
            />
          ) : (
            <h1> John Doe</h1>
          )}
          {userId ? (
            <input
              type="text"
              name="jobTitle"
              defaultValue={userInfo.jobTitle}
              onChange={(e) => dispatch(updateUserJobTitle(e.target.value))}
              placeholder="Job title..."
            />
          ) : (
            <label>Position Title</label>
          )}
          {userId ? (
            <textarea
              type="text"
              name="description"
              defaultValue={userInfo.description}
              onChange={(e) => dispatch(updateUserDescription(e.target.value))}
              placeholder="Summary..."
            />
          ) : (
            <span>Text area to place short objective.</span>
          )}
        </div>
        <div className={styles["templateOne-profile-image"]}>
          {userInfo.ImageSrc ? (
            <img alt="user Imagae" src={userInfo.ImageSrc} />
          ) : (
            <FaUserAlt width={100} height={100} />
          )}
        </div>
        <div className={styles["templateOne-profile-info"]}>
          <span>
            {userId ? (
              <input
                type="text"
                name="email"
                defaultValue={userInfo.email}
                onChange={(e) => dispatch(updateUserEmail(e.target.value))}
                placeholder="Email addres..."
              />
            ) : (
              "johnDoeExample@gmail.bg"
            )}
            <FaRegEnvelope />
          </span>
          <span>
            {userId ? (
              <input
                type="text"
                name="address"
                defaultValue={userInfo.address}
                onChange={(e) => dispatch(updateUserAddress(e.target.value))}
                placeholder="Address..."
              />
            ) : (
              "MS,MV,Edgertown, st. Strawbarry Lane 22"
            )}
            <FaMapMarkerAlt />
          </span>
          <span>
            {userId ? (
              <input
                type="text"
                name="phone"
                defaultValue={userInfo.phone}
                onChange={(e) => dispatch(updateUserPhone(e.target.value))}
                placeholder="Phone number..."
              />
            ) : (
              "+ 359 888 888 999"
            )}
            <FaPhone />
          </span>
          <span>
            {userId ? (
              <input
                type="text"
                name="link"
                defaultValue={userInfo.link}
                onChange={(e) => dispatch(updateUserLink(e.target.value))}
                placeholder="Link..."
              />
            ) : (
              " someExampleLink.com"
            )}
            <FaLinkedin />
          </span>
          <span>
            {userId ? (
              <input
                type="text"
                name="otherConnections"
                defaultValue={userInfo.link}
                onChange={(e) =>
                  dispatch(updateUserOtherConnections(e.target.value))
                }
                placeholder="Other connections..."
              />
            ) : (
              " otherConnections.com"
            )}
            <FaLink />
          </span>
        </div>
        <button type="submit">Save</button>
      </form>
      <div className={styles["templateOne-cvContent"]}>
        <div className={styles["templateOne-cvContent-leftBox"]}>
            <div className={styles["templateOne-cvContent-leftBox-experience"]}>
              <label>Experiences</label>
              <div
                className={
                  styles["templateOne-cvContent-leftBox-experience-content"]
                }
              >
                <EditExperience/>
              </div>
              {/* <div
                className={
                  styles["templateOne-cvContent-leftBox-experience-content"]
                }
              >
                <ExperienceContent />
              </div>
              <div
                className={
                  styles["templateOne-cvContent-leftBox-experience-content"]
                }
              >
                <ExperienceContent />
              </div> */}
            </div>
          <div className={styles["templateOne-cvContent-leftBox-education"]}>
            <label>Education</label>
            <div
              className={
                styles["templateOne-cvContent-leftBox-education-content"]
              }
            >
              <EducationContent contentType="one" />
            </div>
            <div
              className={
                styles["templateOne-cvContent-leftBox-education-content"]
              }
            >
              <EducationContent contentType="one" />
            </div>
          </div>
        </div>
        <div className={styles["templateOne-cvContent-rightBox"]}>
          <div className={styles["templateOne-cvContent-rightBox-skills"]}>
            <label>Skills</label>
            <div
              className={styles["templateOne-cvContent-rightBox-skills-list"]}
            >
              <p>Teamwork</p>
              <p>Organization Skills</p>
              <p>Creativity</p>
            </div>
          </div>
          <div className={styles["templateOne-cvContent-rightBox-languages"]}>
            <label>Languages</label>
            <div
              className={
                styles["templateOne-cvContent-rightBox-languages-list"]
              }
            >
              <p>English</p>
              <p>Arabic</p>
            </div>
          </div>
        </div>
      </div>
      {userId ? <button>Save</button> : ""}
      <div className={styles.logo}>
        <img src={logo} width={70} height={70}></img>
      </div>
    </div>
  );
};

export default EditCVTemplateOne;
