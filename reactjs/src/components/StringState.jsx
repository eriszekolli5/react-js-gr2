import React, {useState} from "react";

function StringState() {
    const [color, setColor] = useState("orange");
    return (
        <div style={{background:color}}>
             <button onClick={()=>{setColor("red")}}>red</button>
             <button onClick={()=>{setColor("green")}}>green</button>
             <button onClick={()=>{setColor("blue")}}>blue</button>
        </div>
    )
}

export default StringState;