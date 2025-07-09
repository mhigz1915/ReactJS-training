import { useState, useCallback, useMemo, useEffect } from "react";
import ToggleOff from "./ToggleOff";
import ToggleOn from "./ToggleOn";



const LightSwitch = () => {
   
    const [toggle, setToggle]=useState(false)

 
       
    return (
        <>
            <p>Power: { toggle ? <ToggleOn /> : <ToggleOff/>}</p>
             <button onClick={()=>setToggle(!toggle)}>Button</button>
         
        </>
    )
}
export default LightSwitch;