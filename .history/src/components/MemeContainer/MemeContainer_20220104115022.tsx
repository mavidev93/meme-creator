//react
import { useEffect } from 'react';

//app-redux
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";

//styles
import "./MemeContainer.scss";

function MemeContainer() {

  const dispath = useAppDispatch()
  const memes = useAppSelector((state: RootState) => state.memeContainer.memesList);
  
  useEffect(() =>{
    if(memes.length > 0){
      dispath.
    }

  },[memes])

  return (
    <div>
      {/* {images.length > 0 && (
        // <img src={images[images.length - 1]} alt="current meme" />
  )} */}
    {memes.map(m=><img src={m.image} alt="meme"/>)}
    </div>
  );
}

export default MemeContainer;