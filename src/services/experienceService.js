import * as requester from '../api/crud.js';
import apiRoutes from './../api/apiRoutes';

const getUserExperinces = (userId)=>{
    return requester.get(apiRoutes.userExperienceURL(userId));
}
// const addUserRegister = (userData) => {
//     return requester.post(apiRoutes.userRegisterURL(), userData);
// };
// const addUserLogin = (userData) => {
//     return requester.post(apiRoutes.userLoginURL(), userData);
// };
const updateUserExperince = (userInfo) => {
    return requester.put(apiRoutes.userExperienceURL(), userInfo)
}

// const updateUserInfo = (userId, userData) => {
//     return requester.put(apiRoutes.userByIdURL(userId), userData);
// }

const experienceService = {
    getUserExperinces,
    // addUserRegister,
    // addUserLogin,
    updateUserExperince,
};

export default experienceService;
