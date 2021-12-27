import React from "react";
import Dropzone from "./Dropzone/Dropzone";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Dropzone />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
