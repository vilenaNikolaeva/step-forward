import { createSlice } from '@reduxjs/toolkit';
import userService from '../../services/userService';

const initialState = {
    userData: {},
    userProfileInfo: [],
    userEducation: {},
    userProExperience: [],
    userWorkExperience: {},
    userSkills: [],
    userSummery: "",
    userLanguages: [],

};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        currentUserInfo(state, action) {
            state.userData = action.payload;
        },
        clearUserInfo(state, action) {
            state.userData = {};
        },
        updateUserProfileInfo(state, action) {
            state.userProfileInfo = action.payload;
        },
        // updateUserFullName(state, action) {
        //     state.userProfileInfo.username = action.payload;
        // },
        // updateUserAddress(state, action) {
        //     state.userProfileInfo.address = action.payload;
        // },
        // updateUserEmail(state, action) {
        //     state.userProfileInfo.email = acton.payload;
        // }
    },
});

export const { currentUserInfo, clearUserInfo, updateUserProfileInfo } =
    userSlice.actions;

export const selectUserInfo = (state) => state.users.userData;

export default userSlice.reducer;