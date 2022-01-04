import { createSlice } from "@reduxjs/toolkit";

interface singleMeme{
    memeId:{image:string,
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
            //
        }
    }
})
