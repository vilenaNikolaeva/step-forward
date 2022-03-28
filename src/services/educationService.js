import * as requester from '../api/crud.js';
import apiRoutes from './../api/apiRoutes';

const getUserEducation = (userId)=>{
    return requester.get(apiRoutes.userEducationURL(userId));
}
const updateUserEducation = (id,userInfo) => {
    return requester.put(apiRoutes.updateEducationURL(id), userInfo)
}
const addNewEducation = (newEducation) =>{
    return requester.post(apiRoutes.addNewEducationURL(),newEducation)
}
const deleteEducation = (educationId) => {
    return requester.del(apiRoutes.deleteEducationURL(educationId));
}
const educationService = {
    getUserEducation,
    updateUserEducation,
    addNewEducation,
    deleteEducation,
};

export default educationService;
