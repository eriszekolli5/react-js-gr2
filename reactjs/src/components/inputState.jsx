import React, {useState} from 'react'

function inputState() {
    const [name, setName] = useState ("");
  return (
    <>
    <input 
    onChange={(event)=>{setName(event.target.value)}}
     type="text" 
     value={name}
      />
      <p>name</p>
    </>
  )
}

export default inputState;