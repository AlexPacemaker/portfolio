// Этот код использует библиотеку Redux Toolkit и создает объект со стартовым состоянием, которое включает массив данных и флаг загрузки. Затем для этого объекта создаются методы setItems и setLoading, которые обновляют данные и флаг загрузки. Наконец, экспортируются только методы setItems и setLoading, а также сам объект для использования в качестве редьюсера в Redux.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: true,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { items, loading, setItems, setLoading } = mainSlice.actions;
export default mainSlice.reducer;
