//app
import ColorPicker from "../../ColorPicker/ColorPicker";

function MemeTextInput() {
  return (
    <div className="flex items-center 		">
      <input
        type="text"
        className="shadow appearance-none border rounded my-2  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <br />
      <ColorPicker />
    </div>
  );
}

export default MemeTextInput;
