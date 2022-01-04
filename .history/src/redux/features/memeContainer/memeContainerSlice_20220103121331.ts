import { createSlice } from "@reduxjs/toolkit";
import 

interface Text{ 
    id: string;
    value: string;
    color: string;
    position?: string;
    font?: string;
    

}

interface SingleMeme{
        id:string,   
        image:string,
        texts:Text[]
        }


const initialState:SingleMeme []=[]

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
                state[foundIndex].texts.push()
            }


        }
    }
})


function findIndex(state:SingleMeme[],action:{payload:SingleMeme}){
    const memeId:string = action.payload.id;
    const foundIndex = state.findIndex(meme=>meme.id === memeId);
    return foundIndex
}