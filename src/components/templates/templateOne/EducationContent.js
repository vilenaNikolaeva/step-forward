import React from "react";
import { FaCalendarAlt } from 'react-icons/fa';

const EducationContent =()=>{
    return (
        <>
        <span>Title</span>
        <span>University / Training</span>
        <span> <FaCalendarAlt /> period from [date] - to [date] </span>
        <ul>
            <li>Course 1 </li>
            <li>Course 2 </li>
        </ul>
        </>
    )
}

export default EducationContent;