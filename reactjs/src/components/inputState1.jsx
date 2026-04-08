import React, {useState} from 'react'

function inputState1() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const addTask = () => {
        if (task.trim() === "") {
            return
        }
        setTask (tasks.concat(task));
        setTask("");
    }
  return (
    
    <>
     <input
     onChange={(event)=>{setTask(event.target.value)}}
      type="text"
      value={task}
       />

       <button onClick={addTask}> add new task</button>

       <ul>
        {
            tasks.map((item, index) =>(
                <li key={index}>{item}</li>
            ) )
        }
       </ul>
    </>
  )
}

export default inputState1;