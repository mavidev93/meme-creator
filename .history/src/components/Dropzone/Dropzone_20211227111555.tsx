//react
import { objectTraps } from "immer/dist/internal";
import { useState } from "react";

//styles
import "./Dropzone.scss";

//third party
import { useDropzone } from "react-dropzone";

function Dropzone() {
  //state
  const [image, setImage] = useState<any[]>([]);

  // drrop zone
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setImage(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  return (
    <div className="Dropzone">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p className="border-2 m-3 p-4 Dropzone_dropArea	">
          Drag 'n' drop some files here
        </p>
        <button type="button" onClick={open}>
          Open File Dialog
        </button>
      </div>
      <aside>
        <h4>Files</h4>
        <div className="Dropzone_imageContainer">
          {<img src={image[0]?.preview} style={{ maxWidth: "200px" }} />}
        </div>
      </aside>
    </div>
  );
}

export default Dropzone;
