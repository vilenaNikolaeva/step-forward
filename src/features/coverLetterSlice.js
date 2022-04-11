import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import userService from "../services/userService";

const initialState = {
  coverLetter: {
    link: "",
    recepientName: "",
    recepientEmail:"",
    recepientPhone: "",
    recepientCompany: "",
    recepientDepartment:"",
    appelTo: "",
    presentation: "",
    regardless: "",
    date: "",
    userId: "",
  },
};

export const updateUserCoverLetterAsync = createAsyncThunk(
  "user/updateclLetter",
  async (data) => {
      const {userId,coverLetter}= data;
    const letter = await userService
      .updateUserCoverLetter(userId, coverLetter)
      .then((res) => (res, toast.success("Successfully updated information.")))
      .catch((err) => toast.error(err.message));
    return await letter;
  }
);

const coverLetterSlice = createSlice({
  name: "coverLetter",
  initialState,
  reducers: {
    getCoverLetterInfo(state){
      return state.coverLetter;
    },
    updateLink(state, action) {
      state.coverLetter.link = action.payload;
    },
    updateRecepientName(state, action) {
      state.coverLetter.recepientName = action.payload;
    },
    updateRecepientEmail(state, action) {
      state.coverLetter.recepientEmail = action.payload;
    },
    updateRecepientPhone(state, action) {
      state.coverLetter.recepientPhone = action.payload;
    },
    updateRecepientDepartment(state, action) {
      state.coverLetter.recepientDepartment = action.payload;
    },
    updateRecepientCompany(state, action) {
      state.coverLetter.recepientCompany = action.payload;
    },
    updateAppelTo(state, action) {
      state.coverLetter.appelTo = action.payload;
    },
    updatePresentation(state, action) {
      state.coverLetter.presentation = action.payload;
    },
    updateRegardless(state, action) {
      state.coverLetter.regardless = action.payload;
    },
    updateDate(state, action) {
      state.coverLetter.date = action.payload;
    },
    
  },
  extraReducers: (builder) => {
    builder.addCase(updateUserCoverLetterAsync.fulfilled, (state, action) => {
      state.coverLetter = action.payload;
      console.log(state.coverLetter);
    });
  },
});

export const {
  getCoverLetterInfo,
  updateLink,
  updateRecepientName,
  updateRecepientEmail,
  updateRecepientDepartment,
  updateRecepientCompany,
  updateRecepientPhone,
  updateAppelTo,
  updatePresentation,
  updateRegardless,
  updateDate,
} = coverLetterSlice.actions;

export default coverLetterSlice.reducer;
