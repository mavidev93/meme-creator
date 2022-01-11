//app
import ColorPicker from "../../ColorPicker/ColorPicker";

//app-redux
import {useAppDispatch} from "../../../redux/app/hooks"
import {updateTextField} from "../../../redux/features/memeContainer/memeContainerSlice"


function MemeTextInput({ id, value }: { id: string; value: string }) {

  //redux 
  const dispatch = useAppDispatch();




  //handlers
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    updateTextField()
  };

  return (
    <div className="flex items-center max-w-fit p-1 m-1		bg-slate-100		">
      <input
        type="text"
        className="shadow appearance-none border rounded my-2 mx-2  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={handleChange}
        value={value}
      />
      <br />
      <ColorPicker />
    </div>
  );
}

export default MemeTextInput;
