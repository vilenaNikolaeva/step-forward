import * as requester from '../api/crud.js';
import apiRoutes from './../api/apiRoutes';

const getUserSkills = (userId)=>{
    return requester.get(apiRoutes.userSkillURL(userId));
}
const updateUserSkill = (id,skill) => {
    return requester.put(apiRoutes.updateSkillURL(id), skill)
}
const addNewSkill = (newSkill) =>{
    return requester.post(apiRoutes.addNewSkillURL(),newSkill)
}
const deleteSkill = (skillId) => {
    return requester.del(apiRoutes.deleteSkillURL(skillId));
}
const skillService = {
    getUserSkills,
    updateUserSkill,
    addNewSkill,
    deleteSkill,
};

export default skillService;
