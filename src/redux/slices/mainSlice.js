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
