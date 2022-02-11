import React from "react";
import templateOne from '../../../assets/images/templateOne.png';
import templateTwo from '../../../assets/images/templateTwo.png';

import styles from '../../../assets/scss/componentsStyles/templates/Templates.module.scss';
import TemplateLetterOne from "../../templates/coverLetter/templateLetterOne/TemplateLetterOne";

const Templates = () => {
  return (
    <div className={styles.templates}>
      {/* <label> CV Templates </label> */}
      <label> Cover Letters</label>
      <TemplateLetterOne/>
      {/* <div className={styles['templates-content']}>
        <div className={styles['templates-content-box']}>
          <div className={styles['templates-content-box-card']}>
            <img width={300} height={350} src={templateOne}></img>
            <button>Choose the template</button>
          </div>
          <div className={styles['templates-content-box-card']}>
            <img width={300} height={350} src={templateTwo}></img>
            <button>Choose the template</button>
          </div>
        </div>
      </div>
      <label> Cover Letters</label>
      <div className={styles['templates-content']}>
        <div className={styles['templates-content-box']}>
          <div className={styles['templates-content-box-card']}>
            <img width={300} height={350} src={templateOne}></img>
            <button>Choose the template</button>
          </div>
          <div className={styles['templates-content-box-card']}>
            <img width={300} height={350} src={templateTwo}></img>
            <button>Choose the template</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Templates;
