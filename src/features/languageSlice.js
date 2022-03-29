import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import languageService from "../services/languageService";

const initialState = {
  userLanguage: [
    {
        title: "",
        level: 0,
        userId: ""
    },
  ],
};

export const getUserLanguagesAsync = createAsyncThunk(
  "user/fetchUserLanguages",
  async (userId) => {
    const languages = await languageService
      .getUserLanguages(userId)
      .then((res) => res)
      .catch((err) => console.log(err));
    return await languages;
  }
);
export const addNewLanguageAsync = createAsyncThunk(
  "user/addNewLanguage",
  async (userId) => {
    const language = {
        title: "",
        level: 0,
        userId: userId
    };
    const languageResult = await languageService
      .addNewLanguage(language)
      .then((res) => res)
      .catch((err) => console.log(err));
    return await languageResult;
  }
);
export const deleteLanguageAsync = createAsyncThunk(
  "user/deleteLanguage",
  async (languageId) => {
    await languageService
      .deleteLanguage(languageId)
      .then((res) => res)
      .catch((err) => console.log(err));
    return await languageId;
  }
);
export const updateUserLanguageAsync = createAsyncThunk(
  "user/updateUserLanguage",
  async (languageData) => {
    const { id, language } = languageData;
    const languageResult = await languageService
      .updateUserLanguage(id, language)
      .then((res) =>
        typeof res !== "string"
          ? toast.success("Successfully updated information.")
          : res
      )
      .catch((err) => toast.error(err.message));
    if (languageResult) {
      return language;
    }
  }
);

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    clearUserLanguages(state) {
      state.userLanguage = {};
    },
    getLanguage(state, action) {
      state.userSkills.find((item) => item.id === action.payload);
    },
    updateLanguage(state, action) {
      const { value, id } = action.payload;
      const language = state.userlanguage.find((item) => item.id === id);
      language.title = value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserLanguagesAsync.fulfilled, (state, action) => {
      state.userLanguage = action.payload;
    });
    builder.addCase(updateUserLanguageAsync.fulfilled, (state, action) => {
      current(state.userLanguage).find(
        (item) => item.id === action.payload.id
      );
    });
    builder.addCase(addNewLanguageAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      state.userLanguage.push(action.payload);
    });
    builder.addCase(deleteLanguageAsync.fulfilled, (state, action) => {
      state.userLanguage = current(state.userLanguage).filter(
        (item) => item.id !== action.payload
      );
    });
  },
});

export const {
    clearUserLanguages,
    getLanguage,
    updateLanguage,
} = languageSlice.actions;

export default languageSlice.reducer;
