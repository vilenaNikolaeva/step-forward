import React from "react";
import { FaCalendarAlt } from 'react-icons/fa';

const WorkExperienceContent =()=>{
    
    return(
        <>
           <p> Position Title</p> 
           <span>Company Name</span>
           <p> <FaCalendarAlt /> 09/2021 - 01/2022</p>
           <p>Simple description</p>
           <ul>
               <li>Task 1 </li>
               <li>Task 2 </li>
               <li>Task 3 </li>
           </ul>
        </>
    )
}

export default WorkExperienceContent;