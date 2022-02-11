import React from "react";
import ExperinceContent from "../ExperienceContent";
import EducationContent from "../EducationContent";

import {
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaRegEnvelope,
  FaUserAlt,
} from "react-icons/fa";
import logo from "../../../assets/images/Logo.png";
import styles from "../../../assets/scss/componentsStyles/templates/CVTemplateTwo.module.scss";
import WorkExperienceContent from "../WorkExperienceContent";
import MainSpecialization from "./../MainSpecializationContent";
import SkillsContent from "./../SkillsContent";

const CVTemplateTwo = () => {
  return (
    <div className={styles.templateTwo}>
      <div className={styles["templateTwo-profile"]}>
        <div className={styles["templateTwo-profile-image"]}>
          {/* <img alt="user Imagae"></img> */}
          <FaUserAlt width={100} height={100} />
        </div>
        <label>Contacts</label>
        <div className={styles["templateTwo-profile-info"]}>
          <div className={styles["templateTwo-profile-info-box"]}>
            <span>
              <FaRegEnvelope />
            </span>
            <p>johnDoeExample@gmail.bg</p>
          </div>
          <div className={styles["templateTwo-profile-info-box"]}>
            <span>
              <FaMapMarkerAlt />
              MS,MV,Edgertown, st. Strawbarry Lane 22
            </span>
          </div>
          <div className={styles["templateTwo-profile-info-box"]}>
            <span>
              <FaPhone />+ 359 888 888 999
            </span>
          </div>
          <div className={styles["templateTwo-profile-info-box"]}>
            <span>
              <FaLinkedin />
              someExampleLink.com
            </span>
          </div>
        </div>
        <div>
          <label>Education</label>
          <div className={styles["templateTwo-profile-education"]}>
            <div className={styles["templateTwo-profile-education-content"]}>
              <EducationContent contentType="two" />
            </div>
            <div className={styles["templateTwo-profile-education-content"]}>
              <EducationContent contentType="two" />
            </div>
          </div>
        </div>
        <div>
          <label>Languages</label>
          <div className={styles["templateTwo-profile-languages"]}>
            <div className={styles["templateTwo-profile-languages-list"]}>
              <p>English</p>
              <p>Arabic</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["templateTwo-cvContent"]}>
        <div className={styles["templateTwo-cvContent-rightBox"]}>
          <div className={styles["templateTwo-cvContent-rightBox-username"]}>
            <label> Name and Last Name</label>
            <p>your job possition</p>
          </div>
          <div className={styles["templateTwo-cvContent-rightBox-experience"]}>
            <label>Profesional Experience</label>
            <div
              className={
                styles["templateTwo-cvContent-rightBox-experience-content"]
              }
            >
              <ExperinceContent contentType="two" />
            </div>
          </div>
        </div>
        <div
          className={styles["templateTwo-cvContent-rightBox-workExperience"]}
        >
          <label>Work Experience </label>
          <div
            className={
              styles["templateTwo-cvContent-rightBox-workExperience-content"]
            }
          >
            <WorkExperienceContent />
          </div>
        </div>
        <div
          className={styles["templateTwo-cvContent-rightBox-specialization"]}
        >
          <label> Main Specialization </label>
          <div
            className={
              styles["templateTwo-cvContent-rightBox-specialization-content"]
            }
          >
            <MainSpecialization />
          </div>
        </div>
        <div className={styles["templateTwo-cvContent-rightBox-skills"]}>
          <label>Skills</label>
          <div className={styles["templateTwo-cvContent-rightBox-skills-list"]}>
            <SkillsContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVTemplateTwo;
