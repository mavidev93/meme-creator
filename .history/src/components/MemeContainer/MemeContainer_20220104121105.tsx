//react
import { useEffect } from "react";

//app-redux
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";
import { setSelectedMeme } from "../../redux/features/memeContainer/memeContainerSlice";

//styles
import "./MemeContainer.scss";

function MemeContainer() {
  const dispatch = useAppDispatch();
  const { memesList, selectedMeme } = useAppSelector(
    (state: RootState) => state.memeContainer
  );

  //handlers
    function handleMemeListClick(e){

    }
  //effects
  useEffect(() => {
    if (memesList.length > 0) {
      dispatch(setSelectedMeme(memesList[memesList.length - 1]));
    }
  }, [memesList]);

  return (
    <div>
      <div className="m-3 border-2	">
        <h1>selected meme</h1>
        <img src={selectedMeme.image} />
      </div>
      <div className="flex">
        {memesList.map((m) => (
          <img
            src={m.image}
            alt="meme"
            className="max-w-xs	cursor-pointer"
            onClick={(e) => handleMemeListClick(em)}
          />
        ))}
      </div>
    </div>
  );
}

export default MemeContainer;