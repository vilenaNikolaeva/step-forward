import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../services/userService";

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
export const getUserInfoAsync = createAsyncThunk(
  "user/fetchUserInfo",
  async (userId) => {
    const userInfo = await userService
      .getUserProfileInfo(userId)
      .then((res) => res[0])
      .catch((err) => console.log(err));
    return await userInfo;
  }
);
export const updateUserInfo = createAsyncThunk(
  "user/updateUserInfo", 
  async (userData) => {
    const {userId, userInfo} = userData;
    const user = await userService
      .updateUserProfileInfo(userId,userInfo)
      .then((res) =>res)
      .catch((err) => console.log(err));
    return await user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currentUserInfo(state, action) {
      state.userData = action.payload;
    },
    updateUserProfileInfo(state, action) {
      state.userProfileInfo = action.payload;
    },
    updateUserProfileStatus(state, action) {
      const status= state.userProfileInfo.isItPublic;
      state.userProfileInfo.isItPublic = !status;
    },
    updateUserCVTemplate(state,action) {
      console.log(action.payload)

      // state.userProfileInfo.cvTemplate= action.payload;
    },
    updateUserCLTemplate(state,action) {
       console.log(action.payload)
      // state.userProfileInfo.clTemplate= action.payload;
    },
    updateUserFullName(state, action) {
      state.userProfileInfo.username = action.payload;
    },
    updateUserAddress(state, action) {
      state.userProfileInfo.address = action.payload;
    },
    updateUserPhone(state, action) {
      state.userProfileInfo.phone = action.payload;
    },
    updateUserLink(state, action) {
      state.userProfileInfo.link = action.payload;
    },
    updateUserDescription(state, action) {
      state.userProfileInfo.description = action.payload;
    },
    updateUserEmail(state, action) {
      state.userProfileInfo.email = action.payload;
    },
    clearUserInfo(state) {
      state.userData = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfoAsync.fulfilled, (state, action) => {
      state.userProfileInfo = action.payload;
    });
    builder.addCase(updateUserInfo.fulfilled , (state,action)=>{
      state.userProfileInfo=action.payload;
    })
  },
});

export const {
  currentUserInfo,
  clearUserInfo,
  updateUserProfileInfo,
  updateUserFullName,
  updateUserAddress,
  updateUserEmail,
  updateUserPhone,
  updateUserLink,
  updateUserCVTemplate,
  updateUserCLTemplate,
  updateUserProfileStatus,
  updateUserDescription,
} = userSlice.actions;

export const selectUserInfo = (state) => state.users.userData;

export default userSlice.reducer;
