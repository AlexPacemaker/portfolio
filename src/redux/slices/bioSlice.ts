// Этот код использует библиотеку Redux Toolkit и создает объект со стартовым состоянием, которое включает массив данных и флаг загрузки. Затем для этого объекта создаются методы setData и setLoading, которые обновляют данные и флаг загрузки. Наконец, экспортируются только методы setData и setLoading, а также сам объект для использования в качестве редьюсера в Redux.
import { createSlice } from "@reduxjs/toolkit";

interface Data {
  message: string;
  imgUrl: string;
}

interface StateProps {
  data: Data;
  loading: boolean;
}

const initialState: StateProps = {
  data: {
    message: "",
    imgUrl: "",
  },
  loading: false,
};

export const bioSlice = createSlice({
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

export const { setData, setLoading } = bioSlice.actions;
export default bioSlice.reducer;
