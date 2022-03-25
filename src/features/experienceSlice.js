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
export const addNewExperienceAsync = createAsyncThunk(
  "user/addNewExpereince",
  async (userId) => {
    const exp = {
      startData: new Date(),
      endDate: new Date(),
      stillWork: false,
      jobTitle: "",
      companyName: "",
      description: "",
      userId: userId,
    };
    await experienceService
      .addNewExperience(exp)
      .then((res) => res)
      .catch((err) => console.log(err));
    return await exp;
  }
);
export const deleteExperienceAsync = createAsyncThunk(
  "user/deleteExperience",
  async (experienceId) => {
    await experienceService
      .deleteExperience(experienceId)
      .then((res) => res)
      .catch((err) => console.log(err));
    return await experienceId;
  }
);
export const updateUserExperienceAsync = createAsyncThunk(
  "user/updateUserExperience",
  async (experienceData) => {
    const { id, experience } = experienceData;
    const experienceResult = await experienceService
      .updateUserExperince(id, experience)
      .then((res) => 
        typeof(res) !== 'string'
          ? toast.success("Successfully updated information.")
          : res
      )
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
    getExperience(state, action) {
      state.userExperience.find((item) => item.id === action.payload);
    },
    updateStartDate(state, action) {
      const experience = state.userExperience.find(
        (item) => item.id === action.payload.id
      );
      experience.startDate = action.payload.value;
    },
    updateEndDate(state, action) {
      const experience = state.userExperience.find(
        (item) => item.id === action.payload.id
      );
      experience.endDate = action.payload.value;
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
    builder.addCase(addNewExperienceAsync.fulfilled, (state, action) => {
      state.userExperience.push(action.payload);
    });
    builder.addCase(deleteExperienceAsync.fulfilled, (state, action) => {
      state.userExperience = current(state.userExperience).filter(
        (item) => item.id !== action.payload
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
