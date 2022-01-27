import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const ExperinceContent = () => {
  return (
    <>
      <span>Front-End</span>
      <span> Company name</span>
      <span> <FaCalendarAlt /> period from [date] - to [date] </span>
      <span placeholder="Job responsibility ..."></span>
      <ul placeholder="тasks and achievements...">
        <li>Task 1 </li>
        <li>Task 2 </li>
        <li>Task 3 </li>
      </ul>
    </>
  );
};
export default ExperinceContent;
