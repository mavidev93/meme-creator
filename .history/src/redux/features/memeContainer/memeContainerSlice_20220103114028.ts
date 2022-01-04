import { createSlice } from "@reduxjs/toolkit";

interface singleMeme{
        id:string,   
        image:string,
        texts:[]
        }


const initialState:singleMeme []=[]

const memeContainerSlice = createSlice({
    name: "meme",
    initialState,
    reducers:{
        addImage(state,action){
            //add image to meme;
            const memeId:string = action.payload.id;
            const found = state.find(meme=>meme.id === memeId);
            //check if  meme already exists

        

        }
    }
})
