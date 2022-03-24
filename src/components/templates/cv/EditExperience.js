import React, { useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import {
  addNewFormFile,
  getUserExperiencesAsync,
  updateCompanyName,
  updateEndDate,
  updateJobDescription,
  updateJobTitle,
  updateStartDate,
  updateUserExperienceAsync,
} from "../../../features/experienceSlice";
import Spinner from "../../Spinner";

const EditExperience = () => {
  const type = useSelector((state) => state.user.userProfileInfo.cvTemplate);
  const userId = useSelector((state) => state.user.userData.userId);
  const userExperiences = useSelector(
    (state) => state.experience.userExperience
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserExperiencesAsync(userId));
  }, []);

  const handleChange = (e, id) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "jobTitle":
        dispatch(updateJobTitle({ value, id }));
        break;
      case "companyName":
        dispatch(updateCompanyName({ value, id }));
        break;
      case "description":
        dispatch(updateJobDescription({ value, id }));
        break;
      case "startDate":
        console.log(value);
        dispatch(updateStartDate(value));
        break;
      case "endDate":
        dispatch(updateEndDate(value));
        break;
      default:
        break;
    }
  };
  const handelUpdateUserExperience = (event, id) => {
    event.preventDefault();
    const experience = userExperiences.find((item) => item.id === id);

    dispatch(updateUserExperienceAsync({ id, experience }));
    //TODOOO
  };
  const handleAddNewFormFile = () =>{
    //TODO
    dispatch(addNewFormFile());
  }
  const handleTypeOne = () => {
    return (
      <>
        <span>Front-End</span>
        <span> Company name</span>
        <span>
          {" "}
          <FaCalendarAlt /> period from [date] - to [date]{" "}
        </span>
        <span placeholder="Job responsibility ..."></span>
        <ul placeholder="тasks and achievements...">
          <li>Task 1 </li>
          <li>Task 2 </li>
          <li>Task 3 </li>
        </ul>
      </>
    );
  };
  const handleTypeTwo = () => {
    return (
      <>
        {userExperiences || userExperiences !== undefined ? (
          userExperiences.map((exp, id) => {
            return (
              <form
                onSubmit={(e) => handelUpdateUserExperience(e, exp.id)}
                key={exp.id}
              >
                <span>
                  <input
                    type="date"
                    name="startDate"
                    defaultValue={exp.startDate?.toLocaleString().slice(0, 10)}
                    onChange={(e) => handleChange(e)}
                  />{" "}
                  -
                  <input
                    type="date"
                    name="endDate"
                    value={exp.endDate?.toLocaleString().slice(0, 10)}
                    onChange={(e) => handleChange(e)}
                  />
                </span>
                <input
                  type="text"
                  name="jobTitle"
                  placeholder=" Job Title..."
                  defaultValue={exp.jobTitle}
                  onChange={(e) => handleChange(e, exp.id)}
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name..."
                  defaultValue={exp.companyName}
                  onChange={(e) => handleChange(e, exp.id)}
                />
                <textarea
                  type="text"
                  name="description"
                  placeholder="Description of your accomplishments..."
                  defaultValue={exp.description}
                  onChange={(e) => handleChange(e, exp.id)}
                />
                <button type="sybmit"> Save </button>
              </form>
            );
          })
        ) : (
          <Spinner />
        )}
      </>
    );
  };
  return (
    <>
      {type === "ash" ? handleTypeOne() : handleTypeTwo()}
      <button onClick={handleAddNewFormFile}> +</button>
    </>
  )
};

export default EditExperience;
