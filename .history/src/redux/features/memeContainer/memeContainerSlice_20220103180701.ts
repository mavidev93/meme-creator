
//react
import { createSlice } from "@reduxjs/toolkit";

//third party
import { v4 as uuidv4 } from "uuid";

export interface Text {
  id: string;
  value: string;
  color?: string;
  position?: string;
  font?: string;
}

export interface SingleMeme {
  id: string;
  image: string;
  texts: Text[];
}

const initialState: {selectedMemeId:string,memesList: SingleMeme[]} = [];

export const memeContainerSlice = createSlice({
  name: "meme",
  initialState,
  reducers: {
    addImageToMeme: (state, action) => {
      //add image to meme;
      const {memesList} = state
      const foundIndex = findIndex(memesList, action);

      //check if  meme already exists
      if (foundIndex !== -1) {
        memesList[foundIndex].image = action.payload.image;
      } else {
        .push(action.payload);
      }
    },

    addTextField: (state, action) => {
      const foundIndex = findIndex(state, action);

      if (foundIndex !== -1) {
        const defaultText: Text = { id: uuidv4(), value: "" };
        state[foundIndex].texts.push(defaultText);
      }
    },
  },
});

function findIndex(state: SingleMeme[], action: { payload: SingleMeme }) {
  const memeId: string = action.payload.id;
  const foundIndex = state.findIndex((meme) => meme.id === memeId);
  return foundIndex;
}

export const { addImageToMeme, addTextField } = memeContainerSlice.actions;
export default memeContainerSlice.reducer;
