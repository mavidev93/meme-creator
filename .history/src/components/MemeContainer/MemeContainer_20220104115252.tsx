//react
import { useEffect } from 'react';

//app-redux
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";
import { setSelectedMeme } from '../../redux/features/memeContainer/memeContainerSlice';

//styles
import "./MemeContainer.scss";

function MemeContainer() {

  const dispatch = useAppDispatch()
  const memes = useAppSelector((state: RootState) => state.memeContainer.memesList);
  
  useEffect(() =>{
    if(memes.length > 0){
      dispatch(setSelectedMeme(memes[memes.length - 1]))
    }

  },[memes])

  return (
    <div>
    {/* {memes.map(m=><img src={m.image} alt="meme"/>)} */}
    
    </div>

  );
}

export default MemeContainer;
