//react
import { useEffect } from "react";

//app-redux
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";
import {
  setSelectedMeme,
  SingleMeme,
} from "../../redux/features/memeContainer/memeContainerSlice";

//styles
import "./MemeContainer.scss";

function MemeContainer() {
  const dispatch = useAppDispatch();
  const { memesList, selectedMeme } = useAppSelector(
    (state: RootState) => state.memeContainer
  );

  //handlers
  function handleMemeListClick(e: React.MouseEvent<HTMLElement>) {
    return function memeFN(m: SingleMeme) {
      console.log(m);
    };
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
            onClick={(e) => handleMemeListClick(e)(m)}
          />
        ))}
      </div>
    </div>
  );
}

export default MemeContainer;
