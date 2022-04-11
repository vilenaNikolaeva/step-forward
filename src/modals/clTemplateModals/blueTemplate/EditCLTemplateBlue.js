import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserInfoAsync } from "../../../features/userSlice";

import logo from "../../../assets/images/Logo.png";
import defaultProfilePicture from "../../../assets/images/profilePicture.png";
import styles from "../../../assets/scss/componentsStyles/templates/EditClTemplateBlue.module.scss";
import { useModal } from "../../../contexts/ModalCtx";
import {
  getCoverLetterInfo,
  updateAppelTo,
  updateDate,
  updateLink,
  updatePresentation,
  updateRecepientCompany,
  updateRecepientDepartment,
  updateRecepientEmail,
  updateRecepientName,
  updateRecepientPhone,
  updateRegardless,
  updateUserCoverLetterAsync,
} from "../../../features/coverLetterSlice";

const EditCLTemplateBlue = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userData.userId);
  const userInfo = useSelector((state) => state.user.userProfileInfo);
  const userCoverLetter = useSelector((state)=> state.clLetter.coverLetter);
  console.log(userCoverLetter);
  const { setIsOpenUserClTemplateModal } = useModal();

  useEffect(() => {
    dispatch(getUserInfoAsync(userId));
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
     e.preventDefault();
    switch (name) {
      case "link":
        dispatch(updateLink(value));
        break;
      case "recepientName":
        dispatch(updateRecepientName(value));
        break;
      case "recepientCompany":
        dispatch(updateRecepientCompany({value}));
        break;
      case "recepientDepartment":
        dispatch(updateRecepientDepartment(value));
        break;
      case "recepientEmail":
        dispatch(updateRecepientEmail(value));
        break;
      case "appelTo":
        dispatch(updateAppelTo(value));
        break;
      case "recepientPhone":
        dispatch(updateRecepientPhone(value));
        break;
      case "presentation":
        dispatch(updatePresentation(value));
        break;
      case "regardless":
        dispatch(updateRegardless(value));
        break;
      case "date":
        dispatch(updateDate(value));
        break;
      default:
        break;
    }
  };
  const handleSaveCLLetter = (event) => {
    event.preventDefault();
    dispatch(updateUserCoverLetterAsync({userId,userCoverLetter}));
  };
  return (
    <div className={styles.tempBlue}>
      <button
        className={styles["tempBlue-clsBtn"]}
        onClick={() => setIsOpenUserClTemplateModal(false)}
      >
        CLOSE
      </button>
      <div className={styles["tempBlue-cont"]}>
        <div className={styles["tempBlue-cont-ltCont"]}>
          <form className={styles["tempBlue-cont-ltCont-flform"]}>
            <input
              className={styles["tempBlue-cont-ltCont-flform-username"]}
              name={"username"}
              placeholder="Name Surname..."
              defaultValue={userInfo.username}
              // onChange={(e) => handleChange(e)}
            />
            <input
              className={styles["tempBlue-cont-ltCont-flform-jobTitle"]}
              name={"jobTitle"}
              placeholder="Job Position..."
              defaultValue={userInfo?.jobTitle}
              // onChange={(e) => handleChange(e)}
            />
            <img
              alt="user profile pic"
              width={130}
              height={130}
              src={userInfo.imageSrc || defaultProfilePicture}
            />
            <label> Contact Info </label>
            <div className={styles["tempBlue-cont-ltCont-flform-contactBox"]}>
              <span>
                Address:
                <input
                  name={"address"}
                  defaultValue={userInfo.address}
                  placeholder="Address..."
                  // on={(e) => handleChange(e)}
                />
              </span>
              <span>
                Email :
                <input
                  name={"email"}
                  defaultValue={userInfo.email}
                  placeholder="Email..."
                  // onChange={(e) => handleChange(e)}
                />
              </span>
              <span>
                Phone:{" "}
                <input
                  name={"phone"}
                  placeholder="Phone number..."
                  defaultValue={userInfo.phone}
                  // onChange={(e) => handleChange(e)}
                />
              </span>
              <span>
                Link :
                <input
                  name={"link"}
                  placeholder="link"
                  // onChange={(e) => handleChange(e)}
                />
              </span>
            </div>
            <label> To </label>
            <div className={styles["tempBlue-cont-ltCont-flform-recepBox"]}>
              <input
                name={"recepientName"}
                placeholder="Name & Surname..."
                onChange={(e) => handleChange(e)}
              />
              <input
                name={"recepientDepartment"}
                placeholder="Department..."
                onChange={(e) => handleChange(e)}
              />
              <input
                name={"recepientPhone"}
                placeholder="Phone number..."
                onChange={(e) => handleChange(e)}
              />
              <input
                name={"recepientName"}
                placeholder="Email..."
                onChange={(e) => handleChange(e)}
              />
            </div>
          </form>
        </div>
        <div className={styles["tempBlue-cont-rtCont"]}>
          <form className={styles["tempBlue-cont-rtCont-rtForm"]}>
            <label className={styles["tempBlue-cont-rtCont-rtForm-label"]}>
              COVER LETTER
            </label>
            <div>
              <div className={styles["tempBlue-cont-rtCont-rtForm-appel"]}>
                <input
                  name={"appelTo"}
                  placeholder="Dear, <Name Surname>"
                  onChange={(e) => handleChange(e)}
                />
                <input
                  className={
                    styles["tempBlue-cont-rtCont-rtForm-appel-company"]
                  }
                  onChange={(e) => handleChange(e)}
                  name={"recepientCompany"}
                  placeholder="<Company Name>"
                />
              </div>
              <div className={styles["tempBlue-cont-rtCont-rtForm-prsnttnBox"]}>
                <textarea
                  name={"presentation"}
                  placeholder="<Your presentation...>"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className={styles["tempBlue-cont-rtCont-rtForm-regardsBox"]}>
                <input
                  name={"regardles"}
                  placeholder="<Regards/Sincerety> "
                  onChange={(e) => handleChange(e)}
                />
                <input
                  name={"date"}
                  placeholder="<Date>..."
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <input
                name={"username"}
                placeholder=" <Your Name Surname>"
                defaultValue={userInfo.username}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </form>
          <button className={styles["tempBlue-cont-rtCont-svBtn"]} onClick={handleSaveCLLetter}> Save</button>
        </div>
      </div>
      <div className={styles["tempBlue-logo"]}>
        <img src={logo} width={70} height={70}></img>
      </div>
    </div>
  );
};

export default EditCLTemplateBlue;
