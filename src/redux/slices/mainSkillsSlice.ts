//slice для компонента mainSkills
import { createSlice } from "@reduxjs/toolkit";

interface MainSkillProps {
  id: string;
  imgUrl: string;
  title: string;
}

interface initialStateProps {
  mainSkills: MainSkillProps[];
  loading: boolean;
}

//начальное состояние
const initialState: initialStateProps = {
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

export const { setLoading, setMainSkills } = mainSkillsSlice.actions;
export default mainSkillsSlice.reducer;
