//react
import React from "react";

//app
import Dropzone from "./Dropzone/Dropzone";
import MemeContainer from "./MemeContainer/MemeContainer";
import MemeTexts from "./MemeTexts/MemeTexts";

//styles
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="APP_container flex">
        <div className="App_carousel_and_textPart_wrapper">
          <Dropzone />
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
