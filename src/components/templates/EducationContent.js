import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const EducationContent = (contentType) => {
  const handleTypeOne = () => {
    return (
      <>
        <span>Title</span>
        <span>University / Training</span>
        <span>
          {" "}
          <FaCalendarAlt /> period from [date] - to [date]{" "}
        </span>
        <ul>
          <li>Course 1 </li>
          <li>Course 2 </li>
        </ul>
      </>
    );
  };
  const handleTypeTwo = () => {
    return (
        <>
          <span>
            <FaCalendarAlt /> 09/2012 - 04/2016]
          </span>
          <span>Title</span>
          <p>Description : sdrvgfsdfvg sgsfsdfsdf sdfsfsdfsf resfrfrgrgdg dregerg</p>
        </>
      );
  };

  return contentType ==="one" ? handleTypeOne() : handleTypeTwo();
};

export default EducationContent;
