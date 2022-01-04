import { createSlice } from "@reduxjs/toolkit";

interface singleMeme{
       memeId:string,   
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
            const meemId = action.payload.id;
            const fount = 
            //check if  meme already exists

        

        }
    }
})
