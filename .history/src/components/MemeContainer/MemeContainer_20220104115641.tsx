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
  const {memesList,selectedMeme} = useAppSelector((state: RootState) => state.memeContainer)
  
  useEffect(() =>{
    if(memesList.length > 0){
      dispatch(setSelectedMeme(memesList[memesList.length - 1]))
    }

  },[memesList])

  return (
    <div>
      <div className><h1>selected meme</h1>
      
      </div>

    {memesList.map(m=><img src={m.image} alt="meme"/>)}

    </div>

  );
}

export default MemeContainer;
