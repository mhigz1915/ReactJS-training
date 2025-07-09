import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useState, useCallback, useMemo } from "react";
function ColorPicker() {
    
    const [colx, setNum]=useState('Red');
    const hStyle = { color: [colx] };
  return (
<>
    <label>
       Room type:
       <select value = {colx} onChange={(e)=> setNum(e.target.value) }>
           <option value="Red">Red</option>
           <option value="Orange">Orange</option>
           <option value="Blue">Blue</option>
           <option value="Violet">Violet</option>
           <option value="Pink">Pink</option>
       </select>
    </label>
    
    <b><p style={ hStyle }> You have chosen Color  : {colx}</p></b>
</>
  );
}

export default ColorPicker;