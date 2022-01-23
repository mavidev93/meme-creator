//redux -app
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import {
  SingleMeme,
  setSelectedMeme,
} from "../../redux/features/memeContainer/memeContainerSlice";

function ImageCarousel() {
  //redux
  const dispatch = useAppDispatch();
  const { memesList } = useAppSelector((state) => state.memeContainer);

  //handlers
  function handleMemeListClick(m: SingleMeme) {
    dispatch(setSelectedMeme(m.id));
  }
  return (
    <div className="flex">
      {memesList.map((m) => (
        <img
          src={m.image}
          alt="meme"
          key={m.image}
          className="max-w-xs	cursor-pointer"
          onClick={(e) => handleMemeListClick(m)}
          style={{ width: "200px", maxHeight: "200px" }}
        />
      ))}
    </div>
  );
}

export default ImageCarousel;
