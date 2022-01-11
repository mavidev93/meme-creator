//react
import { useState } from 'react';

//third party
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss'

function ColorPicker(){
    //sttates
    const [displayColorPicker,setDisplayColorPicker] = useState(false);
    const [color,setColor]= useState({
        r: '241',
        g: '112',
        b: '19',
        a: '1',
      })



    return <div></div>
}

export default ColorPicker