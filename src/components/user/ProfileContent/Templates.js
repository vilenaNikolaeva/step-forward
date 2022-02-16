import React from "react";
import templateOne from '../../../assets/images/templateOne.png';
import templateTwo from '../../../assets/images/templateTwo.png';
import coverLetterOne from '../../../assets/images/coverLetterOne.PNG'

import styles from '../../../assets/scss/componentsStyles/templates/Templates.module.scss';

const Templates = () => {

  return (
    <div className={styles.templates}>
      <label> CV Templates </label>
      <div className={styles['templates-content']}>
        <div className={styles['templates-content-box']}>
          <div className={styles['templates-content-box-card']}>
            <img width={300} height={350} src={templateOne} alt="templateImg"></img>
            <button>Choose the template</button>
          </div>
          <div className={styles['templates-content-box-card']}>
            <img width={300} height={350} src={templateTwo} alt="templateImg"></img>
            <button>Choose the template</button>
          </div>
        </div>
      </div>
      <label> Cover Letters</label>
      <div className={styles['templates-content']}>
        <div className={styles['templates-content-box']}>
          <div className={styles['templates-content-box-card']}>
            <img width={300} height={350} src={coverLetterOne} alt="templateImg"></img>
            <button>Choose the template</button>
          </div>
          <div className={styles['templates-content-box-card']}>
            <img width={300} height={350} src={""} alt="upcomming ..."></img>
            <button>Choose the template</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
