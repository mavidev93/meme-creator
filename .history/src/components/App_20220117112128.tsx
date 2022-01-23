//react
import React from "react";

//app
import Dropzone from "./Dropzone/Dropzone";
import MemeContainer from "./MemeContainer/MemeContainer";
import MemeTexts from "./MemeTexts/MemeTexts";
import ImageCarousel from "./ImageCarousel/ImageCarousel";

//styles
import "./App.scss";

function App() {
  return (
    <div className="App p-2">
      <div className="APP_container flex justify-between flex-row-reverse	">
        <div className="App_carousel_and_textPart_wrapper">
          <Dropzone />
          <ImageCarousel />
          <MemeTexts />
        </div>
        <div className="App_memeContainer_wrapper">
          <MemeContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
