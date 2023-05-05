//slice для компонента mainSkills
import { createSlice } from "@reduxjs/toolkit";

//начальное состояние
const initialState = {
  mainSkills: [],
  loading: true,
};

//редюсеры
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
