import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewSkillAsync,
  deleteSkillAsync,
  getUserSkillsAsync,
  updateUserSkillAsync,
} from "../../../features/skillSlice";
import Spinner from "../../Spinner";
import { FaCheck } from "react-icons/fa";

const EditSkill = () => {
  const userId = useSelector((state) => state.user.userData.userId);
  const userSkills = useSelector((state) => state.skill.userSkill);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserSkillsAsync(userId));
  }, []);

  const handleChange = (e, id) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "title":
        dispatch({ value, id });
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
    // <div>
    //   <span> Spec 1</span>
    //   <span> Spec 2</span>
    //   <span> Spec 3</span>
    // </div>
    <>
      {userSkills || userSkills !== undefined ? (
        userSkills.map((skill, id) => {
          return (
            <>
              <div>
                <form
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
                    <button onClick={() => handleDeleteSkill(skill.id)}>
                      {" "}
                      X{" "}
                    </button>
                  </p>
                  <div>
                    <button type="sybmit">
                      {" "}
                      <FaCheck />{" "}
                    </button>
                  </div>
                </form>
              </div>
            </>
          );
        })
      ) : (
        <Spinner />
      )}
      <div>
        <button onClick={handleAddNewSkill}> + </button>
      </div>
    </>
  );
};

export default EditSkill;
