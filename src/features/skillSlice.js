import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import skillService from "../services/skillService";

const initialState = {
  userSkill: [
    {
        title: "",
        level: 0,
        userId: ""
    },
  ],
};

export const getUserSkillsAsync = createAsyncThunk(
  "user/fetchUserSkills",
  async (userId) => {
    const skills = await skillService
      .getUserSkills(userId)
      .then((res) => res)
      .catch((err) => console.log(err));
    return await skills;
  }
);
export const addNewSkillAsync = createAsyncThunk(
  "user/addNewSkill",
  async (userId) => {
    const skill = {
        title: "",
        level: 0,
        userId: userId
    };
    const skillResult = await skillService
      .addNewSkill(skill)
      .then((res) => res)
      .catch((err) => console.log(err));
    return await skillResult;
  }
);
export const deleteSkillAsync = createAsyncThunk(
  "user/deleteSkill",
  async (skillId) => {
    await skillService
      .deleteSkill(skillId)
      .then((res) => res)
      .catch((err) => console.log(err));
    return await skillId;
  }
);
export const updateUserSkillAsync = createAsyncThunk(
  "user/updateUserSkill",
  async (skillData) => {
    const { id, skill } = skillData;
    const skillResult = await skillService
      .updateUserSkill(id, skill)
      .then((res) =>
        typeof res !== "string"
          ? toast.success("Successfully updated information.")
          : res
      )
      .catch((err) => toast.error(err.message));
    if (skillResult) {
      return skill;
    }
  }
);

const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {
    clearUserSkills(state) {
      state.userSkill = {};
    },
    getSkill(state, action) {
      state.userSkill.find((item) => item.id === action.payload);
    },
    updateSkill(state, action) {
      const { value, id } = action.payload;
      const skill = state.userSkill.find((item) => item.id === id);
      skill.title = value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserSkillsAsync.fulfilled, (state, action) => {
      state.userSkill = action.payload;
    });
    builder.addCase(updateUserSkillAsync.fulfilled, (state, action) => {
      current(state.userSkill).find(
        (item) => item.id === action.payload.id
      );
    });
    builder.addCase(addNewSkillAsync.fulfilled, (state, action) => {
      state.userSkill.push(action.payload);
    });
    builder.addCase(deleteSkillAsync.fulfilled, (state, action) => {
      state.userSkill = current(state.userSkill).filter(
        (item) => item.id !== action.payload
      );
    });
  },
});

export const {
    clearUserSkills,
    getSkill,
    updateSkill,
} = skillSlice.actions;

export default skillSlice.reducer;
