import React from "react";

import styles from '../../../assets/scss/componentsStyles/documents/MyDocuments.module.scss'

const MyDocuments = () => {
  return (
    <div className={styles.myDocumentsContent}>
      <label> My Documents:</label>
      <div className={styles['myDocumentsContent-tables']}>
        <table className={styles['myDocumentsContent-tables-tableCv']}>
          <tbody>
            <tr>
              <th> CV`s</th>
              <th> Description</th>
            </tr>
            <tr>
              <td> First Document</td>
              <td>
                Some Description...
              </td>
            </tr>
            <tr>
              <td> Second Document</td>
              <td>
                Some Description...
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th> Cover Letter</th>
              <th> Description</th>
            </tr>
            <tr>
              <td> First Cover letter Document</td>
              <td>
                Some Description...
              </td>
            </tr>
            <tr>
              <td> Second  Cover letter Document</td>
              <td>
                Some Description...
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDocuments;
