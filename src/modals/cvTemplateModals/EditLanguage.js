import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateLanguage,
  addNewLanguageAsync,
  deleteLanguageAsync,
  getUserLanguagesAsync,
  updateUserLanguageAsync,
} from "../../features/languageSlice";

import { FaCheck } from "react-icons/fa";
import Spinner from "../../components/Spinner";

const EditLanguage = () => {
  const userId = useSelector((state) => state.user.userData.userId);
  const userLanguages = useSelector((state) => state.language.userLanguage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserLanguagesAsync(userId));
  }, []);

  const handleChange = (e, id) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "title":
        dispatch(updateLanguage({ value, id }));
        break;
      default:
        break;
    }
  };

  const handelUpdateUserLanguage = (event, id) => {
    event.preventDefault();
    const language = userLanguages.find((item) => item.id === id);
    dispatch(updateUserLanguageAsync({ id, language }));
  };
  const handleAddNewLanguage = () => {
    dispatch(addNewLanguageAsync(userId)).then((res) => console.log(res));
  };
  const handleDeleteLanguage = (id) => {
    console.log(id);
    dispatch(deleteLanguageAsync(id));
  };

  return (
    <>
      {userLanguages || userLanguages !== undefined ? (
        userLanguages.map((lng, id) => {
          return (
            <div key={id}>
              <form
                onSubmit={(e) => handelUpdateUserLanguage(e, lng.id)}
                key={lng.id}
              >
                <p>
                  <input
                    type="text"
                    name="title"
                    placeholder="Language..."
                    defaultValue={lng.title}
                    onChange={(e) => handleChange(e, lng.id)}
                  />
                  <span>
                    <button onClick={() => handleDeleteLanguage(lng.id)}>
                      {" "}
                      X{" "}
                    </button>
                    <button type="sybmit">
                      {" "}
                      <FaCheck />{" "}
                    </button>
                  </span>
                </p>
              </form>
            </div>
          );
        })
      ) : (
        <Spinner />
      )}
      <button onClick={handleAddNewLanguage}> + </button>
    </>
  );
};

export default EditLanguage;
