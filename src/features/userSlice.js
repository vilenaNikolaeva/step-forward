import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import "cropperjs/dist/cropper.css";
import { toast } from "react-toastify";
import userService from "../services/userService";

const initialState = {
  userData: {},
  userProfileInfo: {
    username: "",
    jobTitle: "",
    isItPublic: "",
    address: "",
    phone: "",
    email: "",
    link: "",
    otherConnections: "",
    description: "",
    coverLetter: {},
    imageSrc: "",
    imageFile: "",
    cvTemplate: "",
    clTemplate: "",
  },
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
    const { userId, userInfo } = userData;
    const formData = new FormData();
    formData.append("username", userInfo.username);
    formData.append("jobTitle", userInfo.jobTitle);
    formData.append("isItPublic", userInfo.isItPublic);
    formData.append("address", userInfo.address);
    formData.append("phone", userInfo.phone);
    formData.append("email", userInfo.email);
    formData.append("link", userInfo.link);
    formData.append("otherConnections", userInfo.otherConnections);
    formData.append("description", userInfo.description);
    formData.append("imageSrc", userInfo.imageSrc);
    formData.append("imageFile", userInfo.imageFile);
    formData.append("cvTemplate", userInfo.cvTemplate);
    formData.append("clTemplate", userInfo.clTemplate);
    
    const user = await userService
      .updateUserProfileInfo(userId, formData)
      .then((res) => (res, toast.success("Successfully updated information.")))
      .catch((err) => toast.error(err.message));
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
    updateUserProfileStatus(state) {
      const status = state.userProfileInfo.isItPublic;
      state.userProfileInfo.isItPublic = !status;
    },
    updateUserCVTemplate(state, action) {
      state.userProfileInfo.cvTemplate = action.payload;
    },
    updateUserCLTemplate(state, action) {
      console.log(action.payload);
      state.userProfileInfo.clTemplate = action.payload;
    },
    updateUserFullName(state, action) {
      state.userProfileInfo.username = action.payload;
    },
    updateUserAddress(state, action) {
      state.userProfileInfo.address = action.payload;
    },
    updateUserJobTitle(state, action) {
      state.userProfileInfo.jobTitle = action.payload;
    },
    updateUserPhone(state, action) {
      state.userProfileInfo.phone = action.payload;
    },
    updateUserLink(state, action) {
      state.userProfileInfo.link = action.payload;
    },
    updateUserOtherConnections(state, action) {
      state.userProfileInfo.otherConnections = action.payload;
    },
    updateUserDescription(state, action) {
      state.userProfileInfo.description = action.payload;
    },
    updateUserEmail(state, action) {
      state.userProfileInfo.email = action.payload;
    },
    updateUserImageSrc(state, action) {
      state.userProfileInfo.imageSrc = action.payload;
    },
    updateUserImageFile(state, action) {
      state.userProfileInfo.imageFile = action.payload;
    },
    clearUserInfo(state) {
      state.userData = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfoAsync.fulfilled, (state, action) => {
      state.userProfileInfo = action.payload;
    });
    builder.addCase(updateUserInfo.fulfilled, (state, action) => {
      console.log(action.payload);
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
  updateUserCVTemplate,
  updateUserCLTemplate,
  updateUserProfileStatus,
  updateUserDescription,
  updateUserJobTitle,
  updateUserImageSrc,
  updateUserImageFile,
  updateUserOtherConnections,
} = userSlice.actions;

export const selectUserInfo = (state) => state.users.userData;
export const selectUserProfileInfo = (state) => state.user.userProfileInfo;
export default userSlice.reducer;
