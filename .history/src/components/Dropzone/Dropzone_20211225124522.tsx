//react
import { objectTraps } from "immer/dist/internal";
import { useState } from "react";

//third party
import { useDropzone } from "react-dropzone";

function Dropzone() {
  //state
  const [files, setFiles] = useState<any[]>([]);

  // drrop zone
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  return (
    <div className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here</p>
        <button type="button" onClick={open}>
          Open File Dialog
        </button>
      </div>
      <aside>
        <h4>Files</h4>
        {files.map((f) => (
          <img src={f.preview} />
        ))}
      </aside>
    </div>
  );
}

export default Dropzone;
