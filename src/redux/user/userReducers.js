import * as actionTypes from './userTypes';

const INITIAL_USER_STATE = null;

const userReducer = (state = INITIAL_USER_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_USER_TO_STATE:
            return { ...action.payload }
        case actionTypes.REMOVE_USER_FROM_STATE:
            return null
        case actionTypes.UPDATE_USER_INFO:

            // CHANGE UPDATE
            return { ...state, favorites: action.payload }
        default:
            return state;
    }
}

export default userReducer;