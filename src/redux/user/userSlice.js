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
        updateUserProfile(state, action) {
            const userInfo = userService.updateUserProfileInfo(state.userData.userId, action.payload)
            state.userProfileInfo = userInfo;
        }
    },
});

export const { currentUserInfo, clearUserInfo } =
    userSlice.actions;

export const selectUserInfo = (state) => state.users.userData;

export default userSlice.reducer;