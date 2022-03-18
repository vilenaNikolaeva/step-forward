import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  userEducation: {},
  userProExperience: [],
  userWorkExperience: {},
  userSkills: [],
  userSummery: "",
  userLanguages: [],
};
export const getUserExperiencesAsync = createAsyncThunk(
  "user/fetchUserExperiences",
//   async (userId) => {
//     const userInfo = await userService
//       .getUserProfileInfo(userId)
//       .then((res) => res[0])
//       .catch((err) => console.log(err));
//     return await userInfo;
//   }
);
export const updateUserExperience = createAsyncThunk(
  "user/updateUserExperience", 
//   async (userData) => {
//     const {userId, userInfo} = userData;
//     const user = await userService
//       .updateUserProfileInfo(userId,userInfo)
//       .then((res) =>(res,toast.success('Successfully updated information.')))
//       .catch((err) =>toast.error(err.message));
//     return await user;
//   }
);

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    clearUserInfo(state) {
      state.userData = {};
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getUserInfoAsync.fulfilled, (state, action) => {
    //   state.userProfileInfo = action.payload;
    // });
 
  },
});

export const {
} = experienceSlice.actions;


export default experienceSlice.reducer;
