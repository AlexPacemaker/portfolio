import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainSkills: [],
  loading: [],
};

export const mainSkillsSlice = createSlice({
  name: "mainSkills",
  initialState,
  reducers: {
    setMainSkills(state, action) {
      state.mainSkills = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { mainSkills, loading, setLoading, setMainSkills } =
  mainSkillsSlice.actions;
export default mainSkillsSlice.reducer;
