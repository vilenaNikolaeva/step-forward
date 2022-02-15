import * as actionTypes from './userTypes';

export const addUserToState = (userData) => {
    return {
        type: actionTypes.ADD_USER_TO_STATE,
        payload: userData,
    }
}
export const removeUserFromState = () => {
    return {
        type: actionTypes.REMOVE_USER_FROM_STATE
    }
}
export const updateUserInfo = (userData) => {
    return {
        type: actionTypes.UPDATE_USER_INFO,
        payload: userData
    }
}
export const updateCVTemplate = (cvTemplate) => {
    return {
        type: actionTypes.UPDATE_CV_TEMPLATE,
        payload: cvTemplate
    }
}
export const updateCLTemplate = (clTemplate) => {
    return {
        type: actionTypes.UPDATE_CL_TEMPLATE,
        payload: clTemplate
    }
}
