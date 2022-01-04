//redux toolkit
import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.push(action.payload);
    },
  },
});

// export const { addImage } = imagesSlice.actions;

export default imagesSlice.reducer;
