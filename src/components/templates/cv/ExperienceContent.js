import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const ExperinceContent = () => {
  const type=useSelector((state)=>state.user.userProfileInfo.cvTemplate);
  const dispatch=useDispatch();

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
       <p> Position title</p>
        <span> Company Name</span>
        <p>
          Experience description : Here where you can place description about what exactly was your experience in this position
        </p>
      </>
    );
  };
  return type === "ash" ? handleTypeOne() : handleTypeTwo();
};
export default ExperinceContent;
