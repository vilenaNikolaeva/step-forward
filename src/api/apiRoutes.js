
import { BASE_URL } from './constants';

const userRoutes = {
    userRegisterURL: () => `${BASE_URL}Authentication/register`,
    userLoginURL: () => `${BASE_URL}Authentication/login`,
    // userByIdURL: (userId) => {
    //     return userId ? `${baseUrl}/user/${userId}` : printError();
    // },
}

const apiRoutes = {
    ...userRoutes,
}

export default apiRoutes;