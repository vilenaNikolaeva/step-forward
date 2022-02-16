import React, { useState } from "react";
import ModalWrapper from "../wrappers/ModalWrapper";

import styles from '../assets/scss/componentsStyles/modals/userModals/UserProfileModal.module.scss';

const UserProfileModal = () => {
    return (
        <ModalWrapper
        // setIsOpenModalComponent={setIsOpenUserProfileModal}
        // isOpenModalComponent={isOpenUserProfileModal}
        >
            <div className={styles['modal-container']}>
                <div className={styles.modalContainer}>
                    <form >
                        <input
                            type="checkbox"
                            name="isItPublic"
                            // checked={this.state.isItPublic ? "checked" : null}
                            // defaultValue={this.state.isItPublic}
                            // onClick={() => this.setState({ isItPublic: !this.state.isItPublic })}
                            label="Share your resume with others." />
                        <label >Username:</label>
                        <input type="text" name="username" ></input>
                        <label >Address:</label>
                        <input type="text" name="address" ></input>
                        <label >email:</label>
                        <input type="text" name="email" ></input>
                        <label >Phone number:</label>
                        <input type="text" name="phone" ></input>
                        <label >Link:</label>
                        <input type="text" name="link" ></input>
                        <button >Close</button>
                        <button type="submit" >Edit</button>
                    </form>
                    {/* <ImageCropper onSetImageFileState={this.setImageFileState}></ImageCropper> */}
                </div>
            </div>
        </ModalWrapper>
    );
}
export default UserProfileModal;