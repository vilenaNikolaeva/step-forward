import React from "react";
import { useDispatch } from "react-redux";

import CVTemplateBlue from '../../../assets/images/cvTemplateBlue.PNG';
import templateTwo from '../../../assets/images/templateTwo.png';
import coverLetterOne from '../../../assets/images/coverLetterOne.PNG'
import {updateUserCLTemplate, updateUserCVTemplate} from '../../../features/userSlice';

import { useModal } from "../../../contexts/ModalCtx";

import styles from '../../../assets/scss/componentsStyles/templates/Templates.module.scss';


const Templates = () => {
 const dispatch = useDispatch();
 const {setIsOpenUserCvTemplateModal } = useModal();

 const handleTemplate=(e)=>{
     const template= e.target.name;
  dispatch(updateUserCVTemplate(template))
    if(template === 'blue'){
      setIsOpenUserCvTemplateModal(true)
    }
 }
  return (
    <div className={styles.templates}>
      <label> CV Templates </label>
      <div className={styles['templates-content']}>
        <div className={styles['templates-content-box']}>
          <div className={styles['templates-content-box-card']}>
            <img width={300} height={350} src={CVTemplateBlue} alt="templateImg"></img>
            <button name ={'blue'} onClick={(e)=>handleTemplate(e)}>Choose the template</button>
          </div>
          <div className={styles['templates-content-box-card']}>
            <img width={300} height={350} src={templateTwo} alt="templateImg"></img>
            <button name ={'ash'}  onClick={(e)=>handleTemplate(e)} >Choose the template</button>
          </div>
        </div>
      </div>
      <label> Cover Letters</label>
      <div className={styles['templates-content']}>
        <div className={styles['templates-content-box']}>
          <div className={styles['templates-content-box-card']}>
            <img width={300} height={350} src={coverLetterOne} alt="templateImg"></img>
            <button name={'ash'}onClick={(e)=>dispatch(updateUserCLTemplate(e.target.name))}>Choose the template</button>
          </div>
          <div className={styles['templates-content-box-card']}>
            <img width={300} height={350} src={""} alt="upcomming ..."></img>
            <button name={'blue'} onClick={(e)=>dispatch(updateUserCLTemplate(e.target.name))}>Choose the template</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
