import * as requester from '../api/crud.js';
import apiRoutes from './../api/apiRoutes';

const getUserLanguages = (userId)=>{
    return requester.get(apiRoutes.userLanguageURL(userId));
}
const updateUserLanguage = (id,language) => {
    return requester.put(apiRoutes.updateLanguageURL(id),language)
}
const addNewLanguage = (newLanguage) =>{
    return requester.post(apiRoutes.addNewLanguageURL(),newLanguage)
}
const deleteLanguage = (LanguageId) => {
    return requester.del(apiRoutes.deleteLanguageURL(LanguageId));
}
const languageService = {
    getUserLanguages,
    updateUserLanguage,
    addNewLanguage,
    deleteLanguage,
};

export default languageService;
