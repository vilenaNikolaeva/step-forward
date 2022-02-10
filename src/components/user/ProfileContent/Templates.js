import React from "react";
import templateOne from '../../../assets/images/templateOne.png';
import templateTwo from '../../../assets/images/templateTwo.png';

import styles from '../../../assets/scss/componentsStyles/templates/Templates.module.scss';

const Templates = () => {
  return (
    <div className={styles.templates}>
      <label> CV Templates </label>
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
      </div>
    </div>
  );
};

export default Templates;
