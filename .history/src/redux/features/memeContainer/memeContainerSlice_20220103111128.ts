import { createSlice } from "@reduxjs/toolkit";

interface singleMeme{
    string:{image:string,
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
            
        }
    }
})
