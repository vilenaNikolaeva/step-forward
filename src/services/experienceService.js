import * as requester from '../api/crud.js';
import apiRoutes from './../api/apiRoutes';

const getUserExperinces = (userId)=>{
    return requester.get(apiRoutes.userExperienceURL(userId));
}
const updateUserExperince = (id,userInfo) => {
    console.log(id,userInfo);
    return requester.put(apiRoutes.updateExperienceURL(id), userInfo)
}

const experienceService = {
    getUserExperinces,
    updateUserExperince,
};

export default experienceService;
