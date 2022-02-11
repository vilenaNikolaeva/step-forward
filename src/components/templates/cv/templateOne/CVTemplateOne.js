import React from "react";
import ExperienceContent from '../ExperienceContent';
import EducationContent from '../EducationContent';

import {
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaRegEnvelope,
  FaUserAlt,
} from "react-icons/fa";
import logo from '../../../assets/images/Logo.png';
import styles from "../../../assets/scss/componentsStyles/templates/CVTemplateOne.module.scss";

const CVTemplateOne = () => {
  return (
    <div className={styles.templateOne}>
      <div className={styles["templateOne-profile"]}>
        <div className={styles["templateOne-profile-objective"]}>
          <h1> John Doe</h1>
          <label>Position Title</label>
          <span>Text area to place short objective.</span>
        </div>
        <div className={styles["templateOne-profile-image"]}>
          {/* <img alt="user Imagae"></img> */}
          <FaUserAlt width={100} height={100} />
        </div>
        <div className={styles["templateOne-profile-info"]}>
          <span>
            johnDoeExample@gmail.bg
            <FaRegEnvelope />
          </span>
          <span>
            MS,MV,Edgertown, st. Strawbarry Lane 22
            <FaMapMarkerAlt />
          </span>
          <span>
            + 359 888 888 999
            <FaPhone />
          </span>
          <span>
            someExampleLink.com
            <FaLinkedin />
          </span>
        </div>
      </div>
      <div className={styles["templateOne-cvContent"]}>
        <div className={styles["templateOne-cvContent-leftBox"]}>
          <div className={styles["templateOne-cvContent-leftBox-experience"]}>
            <label>Experiences</label>
            <div className={styles["templateOne-cvContent-leftBox-experience-content"]}>
             <ExperienceContent/>
            </div>
            <div className={styles["templateOne-cvContent-leftBox-experience-content"]}>
            <ExperienceContent/>
            </div>
            <div className={styles["templateOne-cvContent-leftBox-experience-content"]}>
            <ExperienceContent/>
            </div>
          </div>
          <div className={styles["templateOne-cvContent-leftBox-education"]}>
            <label>Education</label>
            <div className={styles["templateOne-cvContent-leftBox-education-content"]} >
            <EducationContent contentType="one"/>
            </div>
            <div className={styles["templateOne-cvContent-leftBox-education-content"]}>
            <EducationContent contentType="one"/>
            </div>
          </div>
        </div>
        <div className={styles["templateOne-cvContent-rightBox"]}>
          <div className={styles["templateOne-cvContent-rightBox-skills"]}>
            <label>Skills</label>
          <div className={styles["templateOne-cvContent-rightBox-skills-list"]}>
            <p>Teamwork</p>
            <p>Organization Skills</p>
            <p>Creativity</p>
            </div>
          </div>
          <div className={styles["templateOne-cvContent-rightBox-languages"]}>
            <label>Languages</label>
            <div className={styles["templateOne-cvContent-rightBox-languages-list"]}>
              <p>English</p>
              <p>Arabic</p>
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

export default CVTemplateOne;
