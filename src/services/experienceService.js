import * as requester from '../api/crud.js';
import apiRoutes from './../api/apiRoutes';

const getUserExperinces = (userId)=>{
    return requester.get(apiRoutes.userExperienceURL(userId));
}
const updateUserExperince = (id,userInfo) => {
    return requester.put(apiRoutes.updateExperienceURL(id), userInfo)
}
const addNewExperience = (newExperience) =>{
    return requester.post(apiRoutes.addNewExperience(),newExperience)
}
const deleteExperience = (experienceId) => {
    return requester.del(apiRoutes.deleteExpereince(experienceId));
}
const experienceService = {
    getUserExperinces,
    updateUserExperince,
    addNewExperience,
    deleteExperience,
};

export default experienceService;
