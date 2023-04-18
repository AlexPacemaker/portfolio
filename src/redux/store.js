import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./slices/mainSlice";
import scrollSlice from "./slices/scrollSlice";

export const store = configureStore({
  reducer: {
    mainSlice,
    scrollSlice,
  },
});
