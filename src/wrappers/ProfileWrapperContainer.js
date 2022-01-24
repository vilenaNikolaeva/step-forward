import React from 'react';

import styles from '../assets/scss/componentsStyles/ProfileWrapperContainer.module.scss';

const ProfileWrapperContainer = ({ children }) => {
    return (
        <div className={styles['container-profile-page']}>
            {children}
        </div>
    );
};

export default ProfileWrapperContainer;
