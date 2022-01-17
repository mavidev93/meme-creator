//react
import React, { useEffect, useRef, useState } from "react";

//app-redux
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";

import {
  setSelectedMeme,
  SingleMeme,
  setMemeWrapperRect,
  updateTextField,
  updateTextPosition,
} from "../../redux/features/memeContainer/memeContainerSlice";

//styles
import "./MemeContainer.scss";

//interface
interface mouseClients {
  mouseX: number;
  mouseY: number;
}

function MemeContainer() {
  const dispatch = useAppDispatch();
  const { memesList, selectedMemeId, memeWrapperRect } = useAppSelector(
    (state) => state.memeContainer
  );

  const selectedMeme = memesList.find((meme) => meme.id === selectedMemeId);

  //loval state

  const [mouseClients, setMouseClients] = useState<mouseClients>({
    mouseX: 0,
    mouseY: 0,
  });

  //refr
  const memeContainerRef = useRef<HTMLDivElement>(null);

  //handlers
  function handleMemeListClick(m: SingleMeme) {
    dispatch(setSelectedMeme(m.id));
  }

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };


  function handleDragStart(e: any) {

    setMouseClients({ mouseX: e.clientX, mouseY: e.clientY });
    e.target.style.opacity = "0";
  }

  function handleDragEnd(
    e: any,
    textData: { tId: string; top: number; left: number }
  ) {
    const { tId, top, left } = textData;

    const topDiff = e.clientY - mouseClients.mouseY;
    const leftDiff = e.clientX - mouseClients.mouseX;
    dispatch(
      updateTextPosition({
        textId: tId,
        top: top + topDiff,
        left: left + leftDiff,
      })
    );


    e.target.style.opacity = "";
  }


  //effects
  useEffect(() => {
    if (memesList.length > 0) {
      dispatch(setSelectedMeme(memesList[memesList.length - 1]));
    }
  }, []);

  useEffect(() => {
    
    if (memeContainerRef.current) {
      const DomRect = memeContainerRef.current.getBoundingClientRect();
      dispatch(
        setMemeWrapperRect({
          rect: { top: DomRect.top, left: DomRect.left },
        })
      );
    }
  }, [selectedMemeId]);

  return (
    <div>
      <div className="m-3 border-2	memeContainer">
        <div
          ref={memeContainerRef}
          style={{
            backgroundImage: `url(${selectedMeme?.image})`,
            height: "400px",
            position: "relative",
          }}
          className="	bg-cover"
          id="memeContainer_currentMemeWrapper"
        >
          {selectedMeme?.texts.map((t) => (
            <p
              id={t.id}
              key={t.id}
              draggable="true"
              onDragOver={onDragOver}
              style={{
                color: `rgba(${t.color?.r}, ${t.color?.g}, ${t.color?.b}, ${t.color?.a})`,
                position: "absolute",
                top: `${t.top}px`,
                left: `${t.left}px`,
              }}
              className="border-2 border-indigo-600 cursor-move	"
              onDragStart={handleDragStart}
              onDragEnd={(e) =>
                handleDragEnd(e, {
                  tId: t.id,
                  top: t.top || 0,
                  left: t.left || 0,
                })
              }
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
