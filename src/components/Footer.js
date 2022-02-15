import React from "react";

import {FaGithubSquare, FaLinkedin} from 'react-icons/fa';
import styles from '../assets/scss/componentsStyles/Footer.module.scss';

function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles['footerContainer-rights']} >
                <label>
                    © 2022 .All rights reserved.
                </label>
            </div>
            <div className={styles['footerContainer-project']}>
                <label>
                    Project sourse
                </label>
                <a href={'https://github.com/vilenaNikolaeva/step-forward'}>
                    <FaGithubSquare /> GitHub</a>
            </div>
            <div className={styles['footerContainer-about']}>
                <label>
                    About Me
                </label>
                <a href={'https://www.linkedin.com/in/vilena-nikolaeva-017780214/'}> 
                <FaLinkedin/> LinkedIn</a>
            </div>
        </div>

    );
}
export default Footer;