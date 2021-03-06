import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSkill,
  addNewSkillAsync,
  deleteSkillAsync,
  getUserSkillsAsync,
  updateUserSkillAsync,
} from "../../features/skillSlice";

import { FaCheck } from "react-icons/fa";
import Spinner from "../../components/Spinner";
import bluestyles from "../../assets/scss/componentsStyles/templates/EditCvTemplateBlue.module.scss";

const EditSkill = () => {
  const userId = useSelector((state) => state.user.userData.userId);
  const userSkills = useSelector((state) => state.skill.userSkill);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserSkillsAsync(userId));
  }, []);

  const handleChange = (e, id) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "title":
        dispatch(updateSkill({ value, id }));
        break;
      default:
        break;
    }
  };

  const handelUpdateUserSkill = (event, id) => {
    event.preventDefault();
    const skill = userSkills.find((item) => item.id === id);
    dispatch(updateUserSkillAsync({ id, skill }));
  };
  const handleAddNewSkill = () => {
    dispatch(addNewSkillAsync(userId)).then((res) => console.log(res));
  };
  const handleDeleteSkill = (id) => {
    dispatch(deleteSkillAsync(id));
  };

  return (
    <>
      {userSkills || userSkills !== undefined ? (
        userSkills.map((skill, id) => {
          return (
            <div key={id}>
              <form
                className={bluestyles["tempBlue-cntnt-ltBox-skills-list-form"]}
                onSubmit={(e) => handelUpdateUserSkill(e, skill.id)}
                key={skill.id}
              >
                <p>
                  <input
                    type="text"
                    name="title"
                    placeholder="Skill..."
                    defaultValue={skill.title}
                    onChange={(e) => handleChange(e, skill.id)}
                  />
                  <span
                    className={
                      bluestyles[
                        "tempBlue-cntnt-ltBox-skills-list-form-btnCont"
                      ]
                    }
                  >
                    <button
                      className={
                        bluestyles[
                          "tempBlue-cntnt-ltBox-skills-list-form-btnCont-delBtn"
                        ]
                      }
                      onClick={() => handleDeleteSkill(skill.id)}
                    >
                      X
                    </button>
                    <button
                      className={
                        bluestyles[
                          "tempBlue-cntnt-ltBox-skills-list-form-btnCont-svtBtn"
                        ]
                      }
                      type="sybmit"
                    >
                      <FaCheck />
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
        <button
          className={bluestyles["tempBlue-cntnt-ltBox-skills-list-addBtn"]}
          onClick={handleAddNewSkill}
        >
          +
        </button>
    </>
  );
};

export default EditSkill;
