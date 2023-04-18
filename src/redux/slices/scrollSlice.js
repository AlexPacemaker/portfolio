import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
};

export const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    setVisible(state, action) {
      state.visible = action.payload;
    },
  },
});

export const { visible, setVisible } = scrollSlice.actions;
export default scrollSlice.reducer;
