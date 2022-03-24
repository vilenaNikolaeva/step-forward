import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
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
    if (experienceResult) {
      return experience;
    }
    // return await experienceResult;
  }
);

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    clearUserExperience(state) {
      state.userData = {};
    },
    addNewFormFile(state){
      //TODO
      console.log(current(state.userExperience).length);
    },
    getExperience(state, action) {
      state.userExperience.find((item) => item.id === action.payload);
    },
    updateStartDate(state, action) {
      console.log(action.payload)
      // TODO
      // Moment(experienceForEdit.startDate).format('YYYY-MM-DD')
    },
    updateEndDate(state, action) {
      console.log(action.payload)

      // state.userExperience.endDate = action.payload;
    },
    updateStillWork(state, action) {
      const { value, id } = action.payload;
      const experience = state.userExperience.find((item) => item.id === id);
      experience.stillWork = value;
    },
    updateJobTitle(state, action) {
      const { value, id } = action.payload;
      const experience = state.userExperience.find((item) => item.id === id);
      experience.jobTitle = value;
    },
    updateCompanyName(state, action) {
      const { value, id } = action.payload;
      const experience = state.userExperience.find((item) => item.id === id);
      experience.companyName = value;
    },
    updateJobDescription(state, action) {
      const { value, id } = action.payload;
      const experience = state.userExperience.find((item) => item.id === id);
      experience.description = value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserExperiencesAsync.fulfilled, (state, action) => {
      state.userExperience = action.payload;
    });
    builder.addCase(updateUserExperienceAsync.fulfilled, (state, action) => {
      current(state.userExperience).find(
        (item) => item.id === action.payload.id
      );
    });
  },
});

export const {
  clearUserExperience,
  addNewFormFile,
  getExperience,
  getExperinceInfoById,
  updateUserExperience,
  updateStartDate,
  updateEndDate,
  updateStillWork,
  updateJobTitle,
  updateCompanyName,
  updateJobDescription,
} = experienceSlice.actions;

export default experienceSlice.reducer;
