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
  const { memesList, selectedMemeId } = useAppSelector(
    (state: RootState) => state.memeContainer
  );

  const selectedMeme = memesList.find((meme) => meme.id === selectedMemeId);

  function handleMemeListClick(m: SingleMeme) {
    console.log(m);
    dispatch(setSelectedMeme(m.id));
  }
  //effects
  useEffect(() => {
    if (memesList.length > 0) {
      dispatch(setSelectedMeme(memesList[memesList.length - 1]));
    }
  }, []);

  return (
    <div>
      <div className="m-3 border-2	">
        <h1>selected meme</h1>
        <div
          style={{ background: `${selectedMeme?.image}` }}
          className="	bg-cover	"
        >
          {selectedMeme?.texts.map((t) => (
            <p>{t.value}</p>
          ))}
        </div>
        {/* <img src={selectedMeme?.image} /> */}
      </div>
      <div className="flex">
        {memesList.map((m) => (
          <img
            src={m.image}
            alt="meme"
            className="max-w-xs	cursor-pointer"
            onClick={(e) => handleMemeListClick(m)}
          />
        ))}
      </div>
    </div>
  );
}

export default MemeContainer;
