// Этот код использует библиотеку Redux Toolkit и создает объект со стартовым состоянием, которое включает массив данных и флаг загрузки. Затем для этого объекта создаются методы setData и setLoading, которые обновляют данные и флаг загрузки. Наконец, экспортируются только методы setData и setLoading, а также сам объект для использования в качестве редьюсера в Redux.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: true,
};

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { data, loading, setData, setLoading } = aboutSlice.actions;
export default aboutSlice.reducer;
