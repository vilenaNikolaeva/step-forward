import React from "react";

import styles from '../assets/scss/componentsStyles/Footer.module.scss';

function Footer (){
    return (
       <div className={styles.footerContainer}>
           <h1> Some footer  info about the app </h1>
       </div>
    );
}
export default Footer;