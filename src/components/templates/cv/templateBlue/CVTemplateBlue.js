import React from "react";
import ExperienceContent from "../ExperienceContent";
import EducationContent from "../EducationContent";

import {
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaRegEnvelope,
  FaUserAlt,
  FaLink,
  FaCalendarAlt,
} from "react-icons/fa";

import logo from "../../../../assets/images/Logo.png";
import styles from "../../../../assets/scss/componentsStyles/templates/CVTemplateBlue.module.scss";

const CVTemplateBlue = () => {
  return (
    <div className={styles.tempBlue}>
      <div className={styles["tempBlue-prfl"]}>
        <div className={styles["tempBlue-prfl-objective"]}>
          <h1> John Doe</h1>
          <label>Position Title</label>
          <span>Text area to place short objective.</span>
        </div>
        <div className={styles["tempBlue-prfl-image"]}>
          {/* <img alt="user Imagae"></img> */}
          <FaUserAlt width={100} height={100} />
        </div>
        <div className={styles["tempBlue-prfl-info"]}>
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
          <span>
            other connections
            <FaLink />
          </span>
        </div>
      </div>
      <div className={styles["tempBlue-cntnt"]}>
        <div className={styles["tempBlue-cntnt-ltBox"]}>
          <div className={styles["tempBlue-cntnt-ltBox-experience"]}>
            <label>Experiences</label>
            <div className={styles["tempBlue-cntnt-ltBox-experience-content"]}>
              <span>Front-End</span>
              <span> Company name</span>
              <span>
                <FaCalendarAlt /> 03/10/19 - 05/03/22
              </span>
              <span placeholder="Job responsibility ...">
                as fgyesdiflbghaerlgerlgner rghaergaerbglaerogjaerg
                rrfhlaeriglaerbglaergbagblaerg
              </span>
            </div>
            <div className={styles["tempBlue-cntnt-ltBox-experience-content"]}>
              <span>Front-End</span>
              <span> Company name</span>
              <span>
                <FaCalendarAlt /> 01/02/17 - 03/03/21
              </span>
              <span placeholder="Job responsibility ...">
                fcaedfbgsofvhrsdfkegbklirkaeighlraeghlaergkraegh;ae reo;raeh
                glhaergyhae;e ;re herah g;ehg;e
              </span>
            </div>
          </div>
          <div className={styles["tempBlue-cntnt-ltBox-skills"]}>
            <label>Skills</label>
            <div className={styles["tempBlue-cntnt-ltBox-skills-list"]}>
              <p>Teamwork</p>
              <p>Organization Skills</p>
              <p>Creativity</p>
              <p>Teamwork</p>
              <p>Organization Skills</p>
              <p>Creativity</p>
            </div>
          </div>
        </div>
        <div className={styles["tempBlue-cntnt-rtBox"]}>
          <div className={styles["tempBlue-cntnt-rtBox-education"]}>
          <label>Education</label>
            <div className={styles["tempBlue-cntnt-rtBox-education-content"]}>
              <span>
                <FaCalendarAlt /> 09/2012 - 04/2016
              </span>
              <span>Degree</span>
              <p>
                Description : Here you can place description topics of your
                education process
              </p>
            </div>
            <div className={styles["tempBlue-cntnt-rtBox-education-content"]}>
              <span>
                <FaCalendarAlt /> 09/2012 - 04/2016
              </span>
              <span>Degree</span>
              <p>
                Description : Here you can place description topics of your
                education process
              </p>
            </div>
          </div>
          <div className={styles["tempBlue-cntnt-rtBox-languages"]}>
            <label>Languages</label>
            <div className={styles["tempBlue-cntnt-rtBox-languages-list"]}>
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

export default CVTemplateBlue;
