// Импортируем из библиотеки Redux Toolkit функцию createSlice import { createSlice } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit";

// Задаём начальное состояние для нашего слайса const initialState = { visible: false, // Флаг, указывающий на то, виден ли элемент }
const initialState = {
  visible: false,
};

// Создаём слайс
export const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    setVisible(state, action) {
      state.visible = action.payload;
    },
  },
});

//экспортируем
export const { visible, setVisible } = scrollSlice.actions;
export default scrollSlice.reducer;
