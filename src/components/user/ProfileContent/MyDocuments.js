import React from "react";

import styles from '../../../assets/scss/componentsStyles/documents/MyDocuments.module.scss'

const MyDocuments = () => {
  return (
    <div className={styles.myDocumentsContent}>
      <label> My Documents:</label>
      <p> ???? Probably someting new </p>
      <div className={styles['myDocumentsContent-container']}>
        <div className={styles['myDocumentsContent-container-box']}>
          <label> CV Document</label>
        </div>
        <div className={styles['myDocumentsContent-container-box']}>
          <label>Cover Letter</label>
        </div>
      </div>
    </div>
  );
};

export default MyDocuments;
