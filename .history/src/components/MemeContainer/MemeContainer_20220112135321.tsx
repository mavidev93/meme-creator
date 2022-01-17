//react
import React, { useEffect, useRef } from "react";

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

  //ref
  const dragged = useRef<HTMLParagraphElement>(null);

  //handlers
  function handleMemeListClick(m: SingleMeme) {
    console.log(m);
    dispatch(setSelectedMeme(m.id));
  }

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  function handleDrag(e: any) {
    const mouseOffset = getMouseOffset(e.target, e);
    console.log(e.pageX);
    // e.target.style.top = e.clientY + "px";
    // e.target.style.left = e.clientX + "px";
  }

  function handleDragStart(e: any) {
    console.log(e.pageX);
    e.target.style.opacity = "0";
  }

  function handleDragEnd(e: any) {
    console.log(e.pageX);
    if(dragged.current){

      dragged.current.style.left = e.clientX-dragged.current.style.left ;
    }
    e.target.style.opacity = "";
  }
  //copy
  const getMouseCoords = function (event: React.DragEvent) {
    if (event.pageX || event.pageY) {
      return { x: event.pageX, y: event.pageY };
    }
    return {
      x: event.clientX + document.body.scrollLeft - document.body.clientLeft,
      y: event.clientY + document.body.scrollTop - document.body.clientTop,
    };
  };
  const getMouseOffset = function (target: any, event: React.DragEvent) {
    event = event || window.event;
    var mousePosition = getMouseCoords(event);
    var left = target.offsetLeft,
      top = target.offsetTop;

    var documentPosition = { x: left, y: top };
    return {
      x: mousePosition.x - documentPosition.x,
      y: mousePosition.y - documentPosition.y,
    };
  };

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
            position: "relative",
          }}
          className="	bg-cover	"
        >
          {selectedMeme?.texts.map((t) => (
            <p
              ref={dragged}
              key={t.id}
              draggable="true"
              onDragOver={onDragOver}
              style={{
                color: `rgba(${t.color?.r}, ${t.color?.g}, ${t.color?.b}, ${t.color?.a})`,
                position: "absolute",
              }}
              className="border-2 border-indigo-600 cursor-move	"
              // onDrag={handleDrag}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
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
