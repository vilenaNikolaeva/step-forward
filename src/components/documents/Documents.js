import React from "react";
import styles from '../../assets/scss/componentsStyles/documents/MyDocuments.module.scss'

const Documents = () => {
  return (
    <div className={styles.myDocumentsContent}>
      <label>Documents:</label>
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

export default Documents;
