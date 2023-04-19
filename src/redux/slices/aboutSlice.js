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
