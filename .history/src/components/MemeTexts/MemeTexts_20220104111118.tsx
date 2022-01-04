
//app
import MemeTextsInput from './MemeTextInput/MemeTextInput'

//app-redux
import {useAppSelector}from "../../redux/app/hooks";
import {add}

//third party
import { v4 as uuidv4 } from "uuid";

//styles
import "./MemeTexts.scss";

function MemeTexts() {
//current meme
  return (
    <div className="m-2">
      {/* <input
        type="text"
        className="shadow appearance-none border rounded my-2  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <br />
      <input
        type="text"
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <br /> */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        add Text field
      </button>
    </div>
  );
}

export default MemeTexts;
