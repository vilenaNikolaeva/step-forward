import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import educationService from "../services/educationService";

const initialState = {
  userEducation: [
    {
      startDate: new Date(),
      endDate: new Date(),
      present: false,
      university: "",
      title: "",
      description: "",
      userId: "",
    },
  ],
};

export const getUserEducationsAsync = createAsyncThunk(
  "user/fetchUserEducations",
  async (userId) => {
    const educations = await educationService
      .getUserEducation(userId)
      .then((res) => res)
      .catch((err) => console.log(err));
    return await educations;
  }
);
export const addNewEducationAsync = createAsyncThunk(
  "user/addNewEducation",
  async (userId) => {
    const educ = {
      startDate: new Date(),
      endDate: new Date(),
      present: false,
      university: "",
      title: "",
      description: "",
      userId: userId,
    };
    const education = await educationService
      .addNewEducation(educ)
      .then((res) => res)
      .catch((err) => console.log(err));
    return await education;
  }
);
export const deleteEducationAsync = createAsyncThunk(
  "user/deleteEducation",
  async (educationId) => {
    await educationService
      .deleteEducation(educationId)
      .then((res) => res)
      .catch((err) => console.log(err));
    return await educationId;
  }
);
export const updateUserEducationAsync = createAsyncThunk(
  "user/updateUserEducation",
  async (educationData) => {
    const { id, education } = educationData;
    const educationResult = await educationService
      .updateUserEducation(id, education)
      .then((res) =>
        typeof res !== "string"
          ? toast.success("Successfully updated information.")
          : res
      )
      .catch((err) => toast.error(err.message));
    if (educationResult) {
      return education;
    }
  }
);

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    clearUserEducations(state) {
      state.userEducation = {};
    },
    getEducation(state, action) {
      state.userEducation.find((item) => item.id === action.payload);
    },
    updateStartDate(state, action) {
      const education = state.userEducation.find(
        (item) => item.id === action.payload.id
      );
      education.startDate = action.payload.value;
    },
    updateEndDate(state, action) {
      const education = state.userEducation.find(
        (item) => item.id === action.payload.id
      );
      education.endDate = action.payload.value;
    },
    updatePresent(state, action) {
      const { value, id } = action.payload;
      const education = state.userEducation.find((item) => item.id === id);
      education.present = value;
    },
    updateUniversity(state, action) {
      const { value, id } = action.payload;
      const education = state.userEducation.find((item) => item.id === id);
      education.university = value;
    },
    updateTitle(state, action) {
      const { value, id } = action.payload;
      const education = state.userEducation.find((item) => item.id === id);
      education.title = value;
    },
    updateDescription(state, action) {
      const { value, id } = action.payload;
      const education = state.userEducation.find((item) => item.id === id);
      education.description = value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserEducationsAsync.fulfilled, (state, action) => {
      state.userEducation = action.payload;
    });
    builder.addCase(updateUserEducationAsync.fulfilled, (state, action) => {
      current(state.userEducation).find(
        (item) => item.id === action.payload.id
      );
    });
    builder.addCase(addNewEducationAsync.fulfilled, (state, action) => {
      state.userEducation.push(action.payload);
    });
    builder.addCase(deleteEducationAsync.fulfilled, (state, action) => {
      state.userEducation = current(state.userEducation).filter(
        (item) => item.id !== action.payload
      );
    });
  },
});

export const {
    clearUserEducations,
    getEducation,
    updateStartDate,
    updateEndDate,
    updatePresent,
    updateUniversity,
    updateTitle,
    updateDescription
} = educationSlice.actions;

export default educationSlice.reducer;
