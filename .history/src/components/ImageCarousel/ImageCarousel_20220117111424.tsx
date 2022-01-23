//redux -app
import { useAppDispatch,useAppSelector } from '../../redux/app/hooks';
import {  SingleMeme,
setSelectedMeme} from '../../redux/features/memeContainer/memeContainerSlice';

function ImageCarousel(){
    //redux
    const dispatch = useAppDispatch();
    const {memesList}= 

    //handlers
    function handleMemeListClick(m: SingleMeme) {
        dispatch(setSelectedMeme(m.id));
      }
    return     <div className="flex">
    {memesList.map((m) => (
      <img
        src={m.image}
        alt="meme"
        key={m.image}
        className="max-w-xs	cursor-pointer"
        onClick={(e) => handleMemeListClick(m)}
      />
    ))}
  </div>
}

export default ImageCarousel