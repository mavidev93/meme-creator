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
      <div className="container">
        <div className="App_carousel_and_textPart_wrapper">

        </div>
        
      </div>
      <Dropzone />
      <MemeContainer />
      <MemeTexts />
    </div>
  );
}

export default App;
