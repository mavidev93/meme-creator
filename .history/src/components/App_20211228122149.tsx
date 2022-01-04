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
      <Dropzone />
      <MemeContainer />
    </div>
  );
}

export default App;
