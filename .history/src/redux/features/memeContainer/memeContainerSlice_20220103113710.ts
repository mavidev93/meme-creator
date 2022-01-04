import { createSlice } from "@reduxjs/toolkit";

interface singleMeme{
    {image:string,
        texts:[]
        }
}

const initialState:singleMeme []=[]

const memeContainerSlice = createSlice({
    name: "meme",
    initialState,
    reducers:{
        addImage(state,action){
            //add image to meme;
            const meemId = action.payload.id;
            const allMemeIDs = state.reduce(meme=>)
            //check if  meme already exists

        

        }
    }
})
