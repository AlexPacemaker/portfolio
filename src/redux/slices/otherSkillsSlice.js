//сдайс для otherSkills
import { createSlice } from "@reduxjs/toolkit";

//начальное состояние
const initialState = {
  otherSkills: [],
  loading: true,
};

//редюсеры
export const otherSkillsSlice = createSlice({
  name: "otherSkills",
  initialState,
  reducers: {
    setOtherSkills(state, action) {
      state.otherSkills = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { otherSkills, loading, setLoading, setOtherSkills } =
  otherSkillsSlice.actions;
export default otherSkillsSlice.reducer;
