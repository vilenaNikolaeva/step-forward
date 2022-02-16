import * as requester from '../api/crud.js';
import apiRoutes from './../api/apiRoutes';

const addUserRegister = (userData) => {
    return requester.post(apiRoutes.userRegisterURL(), userData);
};

const addUserLogin = (userData) => {
    return requester.post(apiRoutes.userLoginURL(), userData);
};
const updateUserProfileInfo = (userId, userInfo) => {
    return requester.put(apiRoutes.userUpdateProfileInfoURL(userId), userInfo)
}

// const updateUserInfo = (userId, userData) => {
//     return requester.put(apiRoutes.userByIdURL(userId), userData);
// }

const userService = {
    addUserRegister,
    addUserLogin,
    updateUserProfileInfo,
};

export default userService;
