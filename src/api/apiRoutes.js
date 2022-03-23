
import { BASE_URL } from './constants';

const userRoutes = {
    userRegisterURL: () => `${BASE_URL}Authentication/register`,
    userLoginURL: () => `${BASE_URL}Authentication/login`,
    userProfileInfoURL: (id) => `${BASE_URL}User/${id}`,
    userExperienceURL: (userId)=> `${BASE_URL}User/${userId}/experiences`,
}
const userExperinceRoutes = {
    updateExperienceURL  : (id) => `${BASE_URL}Experience/${id}`,

}
const apiRoutes = {
    ...userRoutes,
    ...userExperinceRoutes
}

export default apiRoutes;