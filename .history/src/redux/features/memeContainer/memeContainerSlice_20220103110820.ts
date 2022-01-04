import { createSlice } from "@reduxjs/toolkit";

interface singleMeme{
    string:{image:string,
        texts:[]
        }
}

const initialState:singl[]

const memeContainerSlice = createSlice({
    name: "meme",
    initialState,
    reducers:{
        addImage(){

        }
    }
})
