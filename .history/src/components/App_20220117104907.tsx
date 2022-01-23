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
        <div className="carsol_and_textPart_wrapper">

        </div>
        .meme
      </div>
      <Dropzone />
      <MemeContainer />
      <MemeTexts />
    </div>
  );
}

export default App;
