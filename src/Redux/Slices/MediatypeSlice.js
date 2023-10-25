import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedMediaType: null,
};
const mediaSlice = createSlice({
  name: "mediatype",
  initialState,
  reducers: {
    selectMediaType: (state, action) => {
      state.selectedMediaType = action.payload;
    },
  },
});

export const { selectMediaType } = mediaSlice.actions;
export default mediaSlice.reducer;
