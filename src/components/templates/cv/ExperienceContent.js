import React, { useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { getUserExperiencesAsync } from "../../../features/experienceSlice";
import Spinner from '../../Spinner';

const ExperinceContent = (edit) => {
  const type = useSelector((state) => state.user.userProfileInfo.cvTemplate);
  const userId = useSelector((state) => state.user.userData.userId);
  const userExperiences = useSelector(
    (state) => state.experience.userExperience
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserExperiencesAsync(userId));
  }, []);

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
      {userExperiences || userExperiences!== undefined ?  userExperiences.map((exp,id) => {
          return (
            < div key={id}>
              <span>
                {" "}
                <FaCalendarAlt /> period from {exp.startDate?.toLocaleString().slice(0,10)} - to {exp.endDate?.toLocaleString().slice(0,10)}{" "}
              </span>
              <p> {exp.jobTitle}</p>
              <span>{exp.companyName}</span>
              <p>{exp.description}</p>
            </div >
          );
        }) : 
        <Spinner/>
      }
      </>
    );
  };
  return type === "ash" ? handleTypeOne(edit) : handleTypeTwo(edit);
};
export default ExperinceContent;
