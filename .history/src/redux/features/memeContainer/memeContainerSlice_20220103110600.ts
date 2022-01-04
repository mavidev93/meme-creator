import { createSlice } from "@reduxjs/toolkit";

interface singleMeme{
    {string:{image:string,
        texts:[]
        }
}

const initialState :{string:{image:string,
texts:[]
}}={}

const memeContainerSlice = createSlice({
    name: "meme",
    initialState,
    reducer:{

    }
})