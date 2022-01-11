//react
import { useState } from "react";

//third party
import { SketchPicker } from "react-color";
import reactCSS from "reactcss";


//types
import {Color,RGBColor} from 'react-color' 


function ColorPicker() {
  //sttates
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const [color, setColor] = useState<RGBColor>({
    r: 241,
    g: 112,
    b: 19,
    a: 1,
  })!;

//handlers
const handleClick = ()=>{
    setDisplayColorPicker(!displayColorPicker)
}

const handleClose = () => {
    setDisplayColorPicker(false)
  };

  handleChange = (color) => {
    set
  };











  //styles
  const styles  = reactCSS({
    default: {
      color: {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      },
      swatch: {
        padding: "5px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      }as const,
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      } as const,
    },
  }) 






  return (
    <div>
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker color={color}  onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
}

export default ColorPicker;
