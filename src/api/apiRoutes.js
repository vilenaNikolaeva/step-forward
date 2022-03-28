import { BASE_URL } from "./constants";

const userRoutes = {
  userRegisterURL: () => `${BASE_URL}Authentication/register`,
  userLoginURL: () => `${BASE_URL}Authentication/login`,
  userProfileInfoURL: (id) => `${BASE_URL}User/${id}`,
  userExperienceURL: (userId) => `${BASE_URL}User/${userId}/experiences`,
  userEducationURL: (userId) =>`${BASE_URL}User/${userId}/educations`,
  userSkillURL: (userId) =>`${BASE_URL}User/${userId}/skills`,

};
const userExperinceRoutes = {
  updateExperienceURL: (id) => `${BASE_URL}Experience/${id}`,
  addNewExperienceURL: () => `${BASE_URL}Experience`,
  deleteExpereinceURL: (experienceId) => `${BASE_URL}Experience/${experienceId}`,
};
const userEducationRoutes = {
  updateEducationURL: (id) => `${BASE_URL}Education/${id}`,
  addNewEducationURL: () => `${BASE_URL}Education`,
  deleteEducationURL: (experienceId) => `${BASE_URL}Education/${experienceId}`,
};
const userSkillRoutes = {
  updateSkillURL: (id) => `${BASE_URL}Skill/${id}`,
  addNewSkillURL: () => `${BASE_URL}Skill`,
  deleteSkillURL: (experienceId) => `${BASE_URL}Skill/${experienceId}`,
};

const apiRoutes = {
  ...userRoutes,
  ...userExperinceRoutes,
  ...userEducationRoutes,
  ...userSkillRoutes,
};

export default apiRoutes;
