//react
import { useState } from "react";

//app-redux
import { useAppDispatch } from "../../redux/app/hooks";
import { useAppSelector } from "../../redux/app/hooks";
import { addImageToMeme } from "../../redux/features/memeContainer/memeContainerSlice";

//types
import { SingleMeme,Text } from "../../redux/features/memeContainer/memeContainerSlice";


//styles
import "./Dropzone.scss";

//third party
import { useDropzone } from "react-dropzone";
import {v4 as uuidv4} from 'uuid'
var classNames = require("classnames");

function Dropzone() {
  //state
  // const [image, setImage] = useState<string[]>([]);
  const [dropping, setDropping] = useState(false);

  const dispatch = useAppDispatch();

  // drrop zone
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      // setImage(
      //   acceptedFiles.map((file) =>
      //     Object.assign(file, {
      //       preview: URL.createObjectURL(file),
      //     })
      //   )
      // );
      const modifiedAccept = acceptedFiles?.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      // modifiedAccept.map((file) =>
      //   setImage((state) => [...state, file.preview])
      // );
      modifiedAccept.map((file) => {
        const newMeme:SingleMeme={id:uuidv4(),image:file.preview,texts:[]}

        dispatch(addImageToMeme(new));
      });
    },
  });

  //classnames
  let DropzoneAreaClass: string = classNames(
    "border-2  p-4 Dropzone_dropArea my-2	",
    { dropping }
  );

  //handlers
  const handleDrop = () => {
    console.log("dropped");
    setDropping(false);
  };

  const handleDragEnter = () => {
    console.log("drag enter");
    setDropping(true);
  };

  const handleDragleave = () => {
    console.log("dragleave");
    setDropping(false);
  };

  return (
    <div className="Dropzone">
      <div {...getRootProps({ className: "dropzone p-2" })}>
        <input {...getInputProps()} />
        <p
          className={DropzoneAreaClass}
          onDragLeave={handleDragleave}
          onDragEnter={handleDragEnter}
          onDrop={handleDrop}
        >
          Drag 'n' drop some files here
        </p>
        <button
          type="button"
          onClick={open}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow "
        >
          Open File Dialog
        </button>
      </div>
      <aside>
        <h4>Files</h4>
        <div className="Dropzone_imageContainer">
          {/* {<img src={image[0]} style={{ maxWidth: "200px" }} />} */}
        </div>
      </aside>
    </div>
  );
}

export default Dropzone;
