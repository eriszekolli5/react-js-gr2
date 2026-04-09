import React, {useState} from 'react'

function HomeWork() {
  const [color, setColor] = useState("black");
  const [show, setShow] = useState(false);
  const [lines, setLines] = useState([false, false, false]);
  const toggleLine = (index) => {
  const newLines = [...lines];
  newLines[index] = !newLines[index];
  setLines(newLines);
};

  return (
    <div style={{ background: color}}>
      <p style={{ color: "white" }}>HomeWork</p>

      <button onClick={() => setColor("blue")}>
        change color
      </button>

      <button onClick={() => setShow(!show)}>
        {show ? "hide" : "show"}
      </button>

{show && (
  <div style={{ color: "white" }}>
    
    <p style={{ textDecoration: lines[0] ? "line-through" : "none" }}>
      to do list 1
    </p>
    <button onClick={() => toggleLine(0)}>toggle top line</button>

    <p style={{ textDecoration: lines[1] ? "line-through" : "none" }}>
      to do list 2
    </p>
    <button onClick={() => toggleLine(1)}>toggle top line</button>

    <p style={{ textDecoration: lines[2] ? "line-through" : "none" }}>
      to do list 3
    </p>
    <button onClick={() => toggleLine(2)}>toggle top line</button>

  </div>
)}
    </div>
  );
}

export default HomeWork;