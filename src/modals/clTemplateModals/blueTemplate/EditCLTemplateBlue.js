import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserInfoAsync } from "../../../features/userSlice";

import { FaUserAlt } from "react-icons/fa";
import logo from "../../../assets/images/Logo.png";
import styles from "../../../assets/scss/componentsStyles/templates/EditClTemplateBlue.module.scss";
import { useModal } from "../../../contexts/ModalCtx";

const EditCLTemplateBlue = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userData.userId);
  const userInfo = useSelector((state) => state.user.userProfileInfo);
  const { setIsOpenUserClTemplateModal } = useModal();

  useEffect(() => {
    dispatch(getUserInfoAsync(userId));
  }, []);

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
              placeHolder="Name Surname..."
            />
            <input
              className={styles["tempBlue-cont-ltCont-flform-jobTitle"]}
              name={"jobTitle"}
              placeHolder="Job Position..."
            />
            {userInfo.imageSrc ? (
              <img
                alt="user Imagae"
                width={130}
                height={130}
                src={userInfo.imageSrc}
              />
            ) : (
              <FaUserAlt width={100} height={100} />
            )}

            <label> Contact Info </label>
            <div className={styles["tempBlue-cont-ltCont-flform-contactBox"]}>
              <p>
                {" "}
                Address: <input name={"address"} placeHolder="Address..." />
              </p>
              <p>
                {" "}
                Email :<input name={"email"} placeHolder="Email..." />
              </p>
              <p>
                {" "}
                Phone: <input name={"phone"} placeHolder="Phone number..." />
              </p>
              <p>
                Link :<input name={"link"} placeHolder="link" />
              </p>
            </div>
            <label> To </label>
            <div className={styles["tempBlue-cont-ltCont-flform-recepBox"]}>
              <input name={"recepName"} placeHolder="Name & Surname..." />
              <input name={"department"} placeHolder="Department..." />
              <input name={"phone"} placeHolder="Phone number..." />
              <input name={"email"} placeHolder="Email..." />
            </div>
          </form>
        </div>
        <div className={styles["tempBlue-cont-rtCont"]}>
          <form className={styles["tempBlue-cont-rtCont-rtForm"]}>
            <label className={styles["tempBlue-cont-rtCont-rtForm-label"]}>
              {" "}
              COVER LETTER
            </label>
            <div>
              <div className={styles["tempBlue-cont-rtCont-rtForm-appel"]}>
                  <input name={"addresser"} placeHolder="Dear, <Name Surname>" />
                <input name={"company"} placeHolder="<Company Name>" />
              </div>
              <div className={styles["tempBlue-cont-rtCont-rtForm-prsnttnBox"]}>
                <textarea
                  name={"presentation"}
                  placeHolder="<Your presentation...>"
                />
              </div>
              <div className={styles["tempBlue-cont-rtCont-rtForm-regardsBox"]} >
                <input name={"regardles"} placeHolder="<Regards/Sincerety> " />
                <input name={"date"} placeHolder="<Date>..." />
              </div>
              <input name={"username"} placeHolder=" <Your Name Surname>" />
            </div>
          </form>
        </div>
      </div>
      <div className={styles['tempBlue-logo']}>
        <img src={logo} width={70} height={70}></img>
      </div>
    </div>
  );
};

export default EditCLTemplateBlue;
