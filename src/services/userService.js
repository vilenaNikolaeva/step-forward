import * as requester from '../api/crud.js';
import apiRoutes from './../api/apiRoutes';

const getUserProfileInfo = (userId)=>{
    return requester.get(apiRoutes.userProfileInfoURL(userId));
}
const addUserRegister = (userData) => {
    return requester.post(apiRoutes.userRegisterURL(), userData);
};
const addUserLogin = (userData) => {
    return requester.post(apiRoutes.userLoginURL(), userData);
};
const updateUserProfileInfo = (userId, userInfo) => {
    return requester.putFormData(apiRoutes.userProfileInfoURL(userId), userInfo)
}
const updateUserCoverLetter =(userId, coverLetter)=>{
    console.log(userId,coverLetter)
    return requester.put(apiRoutes.updateCoverLetterURL(userId),coverLetter)
}

const userService = {
    getUserProfileInfo,
    addUserRegister,
    addUserLogin,
    updateUserProfileInfo,
    updateUserCoverLetter,
};

export default userService;
