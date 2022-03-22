import React, { useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { getExperinceInfoById, getUserExperiencesAsync, updateCompanyName, updateJobDescription, updateJobTitle, updateUserExperienceAsync } from "../../../features/experienceSlice";
import Spinner from '../../Spinner';

const EditExperience = (edit) => {
  const type = useSelector((state) => state.user.userProfileInfo.cvTemplate);
  const userId = useSelector((state) => state.user.userData.userId);
  const userExperiences = useSelector(
    (state) => state.experience.userExperience
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserExperiencesAsync(userId));
  }, []);

  const handelUpdateUserExperience = (event,id) => {
    event.preventDefault();

    //TODOOO

};

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
            <form onSubmit={(e)=>handelUpdateUserExperience(e,id)} key={id}>
              <span>
                {" "}
                <FaCalendarAlt /> period from {exp.startDate?.toLocaleString().slice(0,10)} - to {exp.endDate?.toLocaleString().slice(0,10)}{" "}
              </span>
              <input type="text" name='jobTitle' placeholder=" Job Title..." defaultValue={exp.jobTitle} onChange={(e)=>dispatch(updateJobTitle(e.target.value))}/>
              <input type="text" name='jobTitle' placeholder="Company Name..." defaultValue={exp.companyName} onChange={(e)=>dispatch(updateCompanyName(e.target.value))}/>
              <textarea type="text" name="description" placeholder="Description of your accomplishments..." defaultValue={exp.description} 
              onChange={(e)=> dispatch(updateJobDescription(e.target.value))}/>  
              <button type="sybmit"> Save </button>
            </form >
          );
        }) : 
        <Spinner/>
      }
      </>
    );
  };
  return type === "ash" ? handleTypeOne() : handleTypeTwo();
};
export default EditExperience;