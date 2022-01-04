//third party
import { v4 as uuidv4 } from "uuid";

//styles
import "./MemeTexts.scss";

function MemeTexts() {
  return (
    <div>
      <form action="">
        <input
          type="text"
          className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <br />
        <input
          type="text"
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <br />
        <button>add Text field</button>
      </form>
    </div>
  );
}

export default MemeTexts;
