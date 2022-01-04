
//app-redux
import { useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";

//styles
import "./MemeContainer.scss";

function MemeContainer() {
  const memes = useAppSelector((state: RootState) => state.memeContainer.memesList);
  

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
