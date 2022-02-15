import React from "react";

import styles from '../assets/scss/componentsStyles/Spinner.module.scss';

const Spinner = () => {
    return (
        <div className={styles.ellipsis}>
            <label>Loading...</label>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Spinner;