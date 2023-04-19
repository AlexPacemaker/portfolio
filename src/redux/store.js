import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./slices/mainSlice";
import scrollSlice from "./slices/scrollSlice";
import aboutSlice from "./slices/aboutSlice";

export const store = configureStore({
  reducer: {
    mainSlice,
    scrollSlice,
    aboutSlice,
  },
});
