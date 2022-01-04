//app-redux
import { useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";

//styles
import "./MemeContainer.scss";

function MemeContainer() {
  const images = useAppSelector((state: RootState) => state.images);
  console.log(images);

  return (
    <div>
      <img src={images[images.length - 1]} alt/>
    </div>
  );
}

export default MemeContainer;
