import React from "react";

import styles from "../../assets/scss/componentsStyles/templates/CVTemplateOne.module.scss";
import {
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaRegEnvelope,
  FaUserAlt,
} from "react-icons/fa";

const CVTemplateOne = () => {
  return (
    <div className={styles.templateOne}>
      <div className={styles["templateOne-profile"]}>
        <div className={styles["templateOne-profile-objective"]}>
          <h1> John Doe</h1>
          <span>fhbksdfbhjdrfhjbdrevgderfbgkjbteglkebrgkbegbklergjkergke
            jerhbgebrglkiregkibnerkgnj;erkgn;olergnj;loaergne
            ergernabgjrkebgkliraeglregrgkrlki
          </span>
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
      {/* <div className={styles['templateOne-cvContent']}>
        <div className={styles["templateOne-objective"]}>
          <span>Objective</span>
        </div>
        <div className={styles["templateOne-experience"]}>
          <label>Experiences</label>
          <div>
            <span>Experience № 1</span>
          </div>
          <div>
            <span>Experience № 2</span>
          </div>
          <div>
            <span>Experience № 3</span>
          </div>
        </div>
        <div className={styles["templateOne-edication"]}>
          <label>Educations and courses</label>
          <div>
            <span>University № 1</span>
          </div>
          <div>
            <span>Trainings</span>
          </div>
        </div>
        <div className={styles["templateOne-skills"]}>
          <label>Skills</label>
          <p>One</p>
          <p>Two</p>
          <p>Three</p>
        </div>
        <div className={styles["templateOne-languages"]}>
          <label>Languages</label>
          <p>English</p>
          <p>Arabic</p>
        </div>
      </div> */}
    </div>
  );
};

export default CVTemplateOne;
