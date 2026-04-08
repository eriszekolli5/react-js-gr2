import React, {useState} from 'react'

function BooleanState() {
    const [show, setShow] = useState(false);
  return (
    <>
    <button onClick={() => setShow(!show)}>
        {show ? "hide" : "show"}
    </button>
    {show && <p>show text content</p>}
    </>
  )
}

export default BooleanState;