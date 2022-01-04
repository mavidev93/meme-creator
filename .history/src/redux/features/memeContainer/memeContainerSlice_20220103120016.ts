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
            const foundIndex = findIndex(state, action)
            //check if  meme already exists
            if(foundIndex !== -1){
                state[foundIndex].image=action.payload.image;
            }
            else{ 
                state.push(action.payload)
            }
        },

        addTextField(state,action){
            const foundIndex = findIndex(state, action)

            if (foundIndex !== -1){
                state[foundIndex].text
            }


        }
    }
})


function findIndex(state:singleMeme[],action:{payload:singleMeme}){
    const memeId:string = action.payload.id;
    const foundIndex = state.findIndex(meme=>meme.id === memeId);
    return foundIndex
}
