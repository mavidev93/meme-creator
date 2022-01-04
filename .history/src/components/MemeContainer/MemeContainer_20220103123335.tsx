//app-redux
import { useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";

//styles
import "./MemeContainer.scss";

function MemeContainer() {
  const images = useAppSelector((state: RootState) => state.memeContainer);
  console.log(images);

  return (
    <div>
      {images.length > 0 && (
        <img src={images[images.length - 1]} alt="current meme" />
      )}
    </div>
  );
}

export default MemeContainer;
