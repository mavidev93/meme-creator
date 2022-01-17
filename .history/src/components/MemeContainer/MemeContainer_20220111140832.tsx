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

  //handlers
  function handleMemeListClick(m: SingleMeme) {
    console.log(m);
    dispatch(setSelectedMeme(m.id));
  }

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  function handleDrag(e: any) {
    console.log(e.clientX);
    e.target.style = {top:e.client}
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
          style={{
            backgroundImage: `url(${selectedMeme?.image})`,
            height: "400px",
            position: "fixed",
          }}
          className="	bg-cover	"
        >
          {selectedMeme?.texts.map((t) => (
            <p
              key={t.id}
              draggable="true"
              onDragOver={onDragOver}
              style={{
                color: `rgba(${t.color?.r}, ${t.color?.g}, ${t.color?.b}, ${t.color?.a})`,
                position: "absolute",
              }}
              className="border-2 border-indigo-600 cursor-move	"
              onDrag={handleDrag}
            >
              {t.value}
            </p>
          ))}
        </div>
        {/* <img src={selectedMeme?.image} /> */}
      </div>
      <div className="flex">
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
    </div>
  );
}

export default MemeContainer;
