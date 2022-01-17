//react
import React, { useEffect, useRef, useState} from "react";

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
    
    //loval state
    const [mouseClients,setMouseClients]= useState(null)

  //handlers
  function handleMemeListClick(m: SingleMeme) {
    dispatch(setSelectedMeme(m.id));
  }

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  // function handleDrag(e: any) {
  //   const mouseOffset = getMouseOffset(e.target, e);
  //   console.log(e.pageX);
  //   // e.target.style.top = e.clientY + "px";
  //   // e.target.style.left = e.clientX + "px";
  // }

  function handleDragStart(e: any, tId: string) {
    console.log(e.clientX);
    console.log(e.clientY);
    
    console.log(e.target.clientX);
    e.target.style.opacity = "0";

  }

  function handleDragEnd(e: any, tId: string) {
    console.log("e.cleientX", e.clientX);
    let dragText = document.getElementById(tId) as HTMLParagraphElement;
    console.log(dragText);
    if (dragText != null) {
      const left = dragText.getBoundingClientRect().left;
      console.log("dragged.current.style.left", left);
      dragText.style.left = `${e.clientX}px`;
      dragText.style.top = `${e.clientY}px`;
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
              // ref={dragged}
              id={t.id}
              key={t.id}
              draggable="true"
              onDragOver={onDragOver}
              style={{
                color: `rgba(${t.color?.r}, ${t.color?.g}, ${t.color?.b}, ${t.color?.a})`,
                position: "absolute",
              }}
              className="border-2 border-indigo-600 cursor-move	"
              // onDrag={handleDrag}
              onDragStart={(e) => handleDragStart(e, t.id)}
              onDragEnd={(e) => handleDragEnd(e, t.id)}
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
