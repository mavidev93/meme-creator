//react
import { createSlice } from "@reduxjs/toolkit";

interface Text{ 
    value: string;
    color: string;
    position: string;
    font: string;
    id: string;

}

const initialState:Text[]=[]

export const memeTextsSlice = createSlice({
name:'meme'
})