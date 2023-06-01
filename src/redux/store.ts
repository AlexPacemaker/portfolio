// Эта функция создает Redux-хранилище с помощью redux-toolkit и настраивает его для использования с reducers
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import mainSlice from "./slices/mainSlice";
import scrollSlice from "./slices/scrollSlice";
import bioSlice from "./slices/bioSlice";
import mainSkillsSlice from "./slices/mainSkillsSlice";
import otherSkillsSlice from "./slices/otherSkillsSlice";

export const store = configureStore({
  reducer: {
    mainSlice,
    scrollSlice,
    bioSlice,
    mainSkillsSlice,
    otherSkillsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();