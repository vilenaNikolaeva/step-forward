import * as actionTypes from './userTypes';

export const addUserToState = (userData) => {
    return {
        type: actionTypes.ADD_USER_TO_STATE,
        payload: userData
    }
}

export const removeUserFromState = () => {
    return {
        type: actionTypes.REMOVE_USER_FROM_STATE
    }
}

export const updateUserInfo = (updatedState) => {
    return {
        type: actionTypes.UPDATE_USER_INFO,
        payload: updatedState
    }
}
