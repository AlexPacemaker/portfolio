//сдайс для otherSkills
import { createSlice } from "@reduxjs/toolkit";

interface OtherSkillProps {
  id: string;
  imgUrl: string;
  title: string;
}

interface initialStateProps {
  otherSkills: OtherSkillProps[];
  loading: boolean;
}

//начальное состояние
const initialState: initialStateProps = {
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

export const { setLoading, setOtherSkills } = otherSkillsSlice.actions;
export default otherSkillsSlice.reducer;
