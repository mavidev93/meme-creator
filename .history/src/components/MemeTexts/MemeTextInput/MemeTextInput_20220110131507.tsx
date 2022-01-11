//app
import ColorPicker from "../../ColorPicker/ColorPicker";

function MemeTextInput({id,value}:{id:string,value:string}) {
  
//handlers
const handleChange = (e)=>{
  console.log(e.target.value);
}

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
