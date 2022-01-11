//app
import MemeTextsInput from "./MemeTextInput/MemeTextInput";

//app-redux
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { addTextField } from "../../redux/features/memeContainer/memeContainerSlice";

//third party
import { v4 as uuidv4 } from "uuid";

//styles
import "./MemeTexts.scss";

function MemeTexts() {
  //redux
  const dispatch = useAppDispatch();
  const {selectedMeme} = useAppSelector(state=>state.memeContainer)

  //handlers
  const handleAddTextClick = () => {
    dispatch(addTextField());
  };

  return (
    <div className="m-2">
      <div>
        {selectedMeme.texts.map(t)}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddTextClick}
      >
        add Text field
      </button>
    </div>
  );
}

export default MemeTexts;
