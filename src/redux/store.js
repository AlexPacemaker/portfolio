// Эта функция создает Redux-хранилище с помощью redux-toolkit и настраивает его для использования с reducers
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
