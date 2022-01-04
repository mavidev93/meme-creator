import { createSlice } from "@reduxjs/toolkit";

interface singleMeme

const initialState :{string:{image:string,
texts:[]
}}={}

const memeContainerSlice = createSlice({
    name: "meme",
    initialState,
    reducer:{

    }
})