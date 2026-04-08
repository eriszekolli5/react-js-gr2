import React from "react";

function StringProp(props) {
   return (
    <div>
       <div>{props.firstName}</div> 
       <div>{props.lastName}</div> 
    </div>
   
   ) 
}

export default StringProp;