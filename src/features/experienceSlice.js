import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import experienceService from "../services/experienceService";

import { toast } from "react-toastify";

const initialState = {
  userExperience: [
    {
      id: 0,
      startData: "",
      endDate: "",
      stillWork: "",
      jobTitle: "",
      companyName: "",
      description: "",
    },
  ],
};

export const getUserExperiencesAsync = createAsyncThunk(
  "user/fetchUserExperiences",
  async (userId) => {
    const experiences = await experienceService
      .getUserExperinces(userId)
      .then((res) => res)
      .catch((err) => console.log(err));
    return await experiences;
  }
);
export const updateUserExperienceAsync = createAsyncThunk(
  "user/updateUserExperience",
  async (experienceData) => {
    const { id, experience } = experienceData;
    const experienceResult = await experienceService
      .updateUserExperince(id, experience)
      .then((res) => (res, toast.success("Successfully updated information.")))
      .catch((err) => toast.error(err.message));
    return await experienceResult;
  }
);

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    clearUserExperience(state) {
      state.userData = {};
    },
    updateStartData(state, action) {
      state.userExperience.startData = action.payload;
    },
    updateEndDate(state, action) {
      state.userExperience.endDate = action.payload;
    },
    updateStillWork(state, action) {
      state.userExperience.stillWork = action.payload;
    },
    updateJobTitle(state, action) {
      console.log(action.payload);
      // state.userExperience.jobTitle = action.payload;
    },
    updateCompanyName(state, action) {
      state.userExperience.companyName = action.payload;
    },
    updateJobDescription(state, action) {
      state.userExperience.description = action.payload;
    },
    updateUserExperience(state, action) {
      state.userExperience = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserExperiencesAsync.fulfilled, (state, action) => {
      state.userExperience = action.payload;
    });
    builder.addCase(updateUserExperienceAsync.fulfilled, (state, action) => {
      console.log(action.payload)
      const experience = state.userExperience.map(
        (item) => item.id === action.payload.id
      );
      experience = action.payload;
      console.log(state.userExperience);
    });
  },
});

export const {
  clearUserExperience,
  getExperinceInfoById,
  updateUserExperience,
  updateStartData,
  updateEndDate,
  updateStillWork,
  updateJobTitle,
  updateCompanyName,
  updateJobDescription,
} = experienceSlice.actions;

export default experienceSlice.reducer;
