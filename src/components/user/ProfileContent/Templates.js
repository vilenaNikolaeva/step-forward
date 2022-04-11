import React from "react";
import { useDispatch } from "react-redux";

import CVTemplateBlue from '../../../assets/images/cvTemplateBlue.PNG';
import templateTwo from '../../../assets/images/templateTwo.png';
import coverLetterOne from '../../../assets/images/coverLetterOne.PNG'
import coverLetterBlue from '../../../assets/images/clTemplateBlue.PNG'
import {updateUserCLTemplate, updateUserCVTemplate} from '../../../features/userSlice';

import { useModal } from "../../../contexts/ModalCtx";

import styles from '../../../assets/scss/componentsStyles/templates/Templates.module.scss';


const Templates = () => {
 const dispatch = useDispatch();
 const {setIsOpenUserCvTemplateModal,setIsOpenUserClTemplateModal } = useModal();

 const handleCVTemplate=(e)=>{
     const template= e.target.name;
  dispatch(updateUserCVTemplate(template))
    if(template === 'blue'){
      setIsOpenUserCvTemplateModal(true)
    }
 }
 const handleCLTemplate=(e)=>{
  const template= e.target.name;
dispatch(updateUserCLTemplate(template))
 if(template === 'blue'){
   setIsOpenUserClTemplateModal(true)
 }
}
  return (
    <div className={styles.templates}>
      <label> CV Templates </label>
      <div className={styles['templates-content']}>
        <div className={styles['templates-content-box']}>
          <div className={styles['templates-content-box-card']}>
            <img width={300} height={350} src={CVTemplateBlue} alt="templateImg"></img>
            <button name ={'blue'} onClick={(e)=>handleCVTemplate(e)}>Choose the template</button>
          </div>
          <div className={styles['templates-content-box-card']}>
            <label>Comming Soon ...</label>
            <img width={300} height={350} src={templateTwo} alt="templateImg"/>
            <button  disabled={true} name ={'ash'}  onClick={(e)=>handleCVTemplate(e)} >Choose the template</button>
          </div>
        </div>
      </div>
      <label> Cover Letters</label>
      <div className={styles['templates-content']}>
        <div className={styles['templates-content-box']}>
        <div className={styles['templates-content-box-card']}>
            <img width={300} height={350} src={coverLetterBlue} alt="templateImg"></img>
            <button  name={'blue'} onClick={(e)=>handleCLTemplate(e)} >Choose the template</button>
          </div>
          <div className={styles['templates-content-box-card']}>
            <label>Comming Soon ...</label>
            <img width={300} height={350} src={coverLetterOne} alt="templateImg"></img>
            <button  disabled={true} name={'ash'} onClick={(e)=>handleCLTemplate(e)}>Choose the template</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
