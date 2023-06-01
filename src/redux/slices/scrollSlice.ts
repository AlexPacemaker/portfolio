import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ScrollState {
  visible: boolean;
}

const initialState: ScrollState = {
  visible: false,
};

export const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    setVisible: (state, action: PayloadAction<boolean>) => {
      state.visible = action.payload;
    },
  },
});

export const selectScrollData = (state: RootState) => state.scrollSlice.visible;
export const { setVisible } = scrollSlice.actions;
export default scrollSlice.reducer;
