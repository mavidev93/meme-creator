//redux toolkit
import { createSlice } from "@reduxjs/toolkit";

//app
import { RootState } from "../../app/store";
const initialState: string[] = [];

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    addImage: () => {
      console.log("hasan");
    },
  },
});

export const { addImage } = imagesSlice.actions;

export default imagesSlice.reducer;
