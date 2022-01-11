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

// const emptyMeme: SingleMeme = {
//   id: "",
//   image: "",
//   texts: [],
// };

const initialState: { selectedMemeId: SingleMeme; memesList: SingleMeme[] } = {
  selectedMeme: emptyMeme,
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

    addTextField: (state) => {
      // const foundIndex = findIndex(state.memesList, action);
      const selectedMemeIndex = state.memesList.findIndex(
        (meme) => meme.id === state.selectedMeme.id
      );
      const defaultText: Text = { id: uuidv4(), value: "" };
      state.memesList[selectedMemeIndex].texts.push(defaultText);
    },

    updateTextField: (state, action) => {
      const selectedMemeIndex = state.memesList.findIndex(
        (meme) => meme.id === state.selectedMeme.id
      );
      const selectedMeme = state.memesList[selectedMemeIndex];

      const selectedTextIndex = selectedMeme.texts.findIndex(
        (text) => text.id === action.payload.textId
      );
      state.memesList[selectedMemeIndex].texts[selectedTextIndex].value =
        action.payload.upDatedVal;
    },

    setSelectedMeme: (state, action) => {
      state.selectedMeme = action.payload;
    },
    //-
  },
});

function findIndex(state: SingleMeme[], action: { payload: SingleMeme }) {
  const memeId: string = action.payload.id;
  const foundIndex = state.findIndex((meme) => meme.id === memeId);
  return foundIndex;
}

export const { addImageToMeme, addTextField, setSelectedMeme } =
  memeContainerSlice.actions;
export default memeContainerSlice.reducer;
