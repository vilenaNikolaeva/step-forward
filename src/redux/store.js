import { configureStore } from "@reduxjs/toolkit";
import experienceReducer from "../features/experienceSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    experience: experienceReducer
  },
});
