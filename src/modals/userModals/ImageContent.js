import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserImageFile,
  updateUserImageSrc,
} from "../../features/userSlice";
import profilePicture from "../../assets/images/profilePicture.png";
import styles from "../../assets/scss/componentsStyles/ImageCropper.module.scss";

const ImageContent = () => {
  const userImageSrc = useSelector(
    (state) => state.user.userProfileInfo.imageSrc
  );
  const userImagaFile = useSelector(
    (state) => state.user.userProfileInfo.imageFile
  );
  const dispatch = useDispatch();
  const [checked, setChecked] = useState();
  const [showBtn, setShowBtn] = useState(false);

  const handleFileUpload = (e) => {
    e.preventDefault();
    let file;
    if (e.dataTransfer) {
      file = e.dataTransfer.files;
    } else if (e.target) {
      file = e.target.files;
    }
    if (file.length !== 0) {
      const reader = new FileReader();
      reader.onload = () => {
        reader.onloadend = () => dispatch(updateUserImageFile(reader.result));
        dispatch(updateUserImageSrc(reader.result));
        setShowBtn(true);
      };
      reader.readAsDataURL(file[0]);
    }
  };

  const resetState = () => {
    setChecked("");
    setShowBtn("");
    dispatch(updateUserImageFile(null));
    dispatch(updateUserImageSrc(null));
  };

  return (
    <div className={styles.cropperContent}>
      <label>Choose your profile picture : </label>
      <div className={styles["cropperContent-imageContainer"]}>
        <img
          className={styles["cropperContent-imageContainer-image"]}
          src={userImageSrc ? userImageSrc : profilePicture}
          alt="cropped"
        />
        <div className={styles["cropperContent-imageContainer-file"]}>
          <input
            type="file"
            className={styles["cropperContent-imageContainer-fileInput"]}
            onChange={(e) => handleFileUpload(e)}
          />
        </div>
        <div className={styles["cropperContent-imageContainer-checkBox"]}>
          <label>
            <input
              type="checkbox"
              name="defaultPicture"
              className={
                styles["cropperContent-imageContainer-checkBox-defaultCheckBox"]
              }
              checked={checked ? "checked" : null}
              onClick={resetState}
              label="Click HERE if you don't want to upload image."
            />
            Click HERE if you don't want to upload image.
          </label>
        </div>
      </div>
      {/* <div className={styles["cropperContent-imageContainer-cropperButton"]}>
        {showBtn ? <button onClick={getCropData}> Crop Image</button> : null}
      </div> */}
    </div>
  );
};

export default ImageContent;
