
import { BASE_URL } from './constants';

const userRoutes = {
    userRegisterURL: () => `${BASE_URL}Authentication/register`,
    userLoginURL: () => `${BASE_URL}Authentication/login`,
    userProfileInfoURL: (id) => `${BASE_URL}User/${id}`,
    userExperienceURL: (userId)=> `${BASE_URL}User/${userId}/experiences`,

    // userByIdURL: (userId) => {
    //     return userId ? `${baseUrl}/user/${userId}` : printError();
    // },
}
// const userExperinceRoutes = {
// }
const apiRoutes = {
    ...userRoutes,
}

export default apiRoutes;