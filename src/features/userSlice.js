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
      .then((res) => console.log(res))
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
    clearUserInfo(state, action) {
      state.userData = {};
    },
    updateUserProfileInfo(state, action) {
      state.userProfileInfo = action.payload;
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
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfoAsync.fulfilled, (state, action) => {
      state.userProfileInfo = action.payload;
    });
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
  updateUserDescription,
} = userSlice.actions;

export const selectUserInfo = (state) => state.users.userData;

export default userSlice.reducer;
