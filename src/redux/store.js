import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "../features/educationSlice";
import experienceReducer from "../features/experienceSlice";
import languageReducer from "../features/languageSlice";
import skillReducer from "../features/skillSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    experience: experienceReducer,
    education: educationReducer,
    skill: skillReducer,
    language: languageReducer
  },
});
