//react
import { createSlice } from "@reduxjs/toolkit";

//third party
import { v4 as uuidv4 } from "uuid";
import {RGBColor} from 'react-color'

export interface Text {
  id: string;
  value: string;
  color?: RGBColor;
  position?: string;
  font?: string;
}

export interface SingleMeme {
  id: string;
  image: string;
  texts: Text[];
}

interface MemeWrapperRect{
  height: number;
  width: number;
  x: number;
  
}



const initialState: { selectedMemeId: string; memesList: SingleMeme[],memeWrapperRect?: } = {
  selectedMemeId: "",
  memesList: [],

};

export const memeContainerSlice = createSlice({
  name: "meme",
  initialState,
  reducers: {
    addImageToMeme: (state, action) => {
      //add image to meme;

      const foundIndex = findIndex(state.memesList, action);

      //check if  meme already exists
      if (foundIndex !== -1) {
        state.memesList[foundIndex].image = action.payload.image;
      } else {
        state.memesList.push(action.payload);
      }
    },

    setSelectedMeme: (state, action) => {
      state.selectedMemeId = action.payload;
    },

    setMemeWrapperRect: (state, action) => {
      state.memeWrapperRect=action.payload.rect
    },

    //text reducers
    addTextField: (state) => {
      // const foundIndex = findIndex(state.memesList, action);
      const selectedMemeIndex = state.memesList.findIndex(
        (meme) => meme.id === state.selectedMemeId
      );
      const defaultText: Text = { id: uuidv4(), value: "" };
      state.memesList[selectedMemeIndex].texts.push(defaultText);
    },

    updateTextField: (state, action) => {
      const selectedMeme = state.memesList.find(
        (meme) => meme.id === state.selectedMemeId
      );

    const selectedText = selectedMeme?.texts.find(
        (text) => text.id === action.payload.textId
      );

    if(selectedText){
      selectedText.value = action.payload.upDatedVal;
    }

    },

    updateTextColor: (state, action) => {
      const selectedMeme = state.memesList.find(
        (meme) => meme.id === state.selectedMemeId
      );

    const selectedText = selectedMeme?.texts.find(
        (text) => text.id === action.payload.textId
      );

      if(selectedText){
        selectedText.color = action.payload.color;
      }

    },




    //-
  },
});

function findIndex(state: SingleMeme[], action: { payload: SingleMeme }) {
  const memeId: string = action.payload.id;
  const foundIndex = state.findIndex((meme) => meme.id === memeId);
  return foundIndex;
}

export const {
  addImageToMeme,
  addTextField,
  setSelectedMeme,
  updateTextField,
  updateTextColor,
  setMemeWrapperRect
} = memeContainerSlice.actions;
export default memeContainerSlice.reducer;
