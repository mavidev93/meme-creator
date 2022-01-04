import React from "react";
import Dropzone from "./Dropzone/Dropzone";
import "./App.scss";

function App() {
  const handleDrop = () => {
    console.log("dr");
  };
  return (
    <div className="App">
      <Dropzone />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div draggable="true" onDrop={handleDrop} className="border-2 ">
        {" "}
        dragtest
      </div>
    </div>
  );
}

export default App;
