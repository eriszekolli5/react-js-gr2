import React, {useState} from 'react';

function ObjectList() {
   const [students, setStudents] = useState( [
        {
            id:1,
            firstName: "eris",
            lastName:"zekolli"
        },
        {
            id:2,
            firstName: "eri",
            lastName:"zekolli"
        },
        {
            id:3,
            firstName: "er",
            lastName:"zekolli"
        }
    ]);
   const [show, setShow] = useState(true);
   const [isLineThrough, setIsLineThrough]= useState(false);
   console.log(students);
   const handleLineThrough = () => {
    setIsLineThrough(!isLineThrough);
   }

  return (
    <div>
        <button onClick={()=>setShow(!show)}>
            {show ? 'hide' : 'show'} Students
        </button>
        <ul>
            { show &&
                students.map((student) => (
                    <li
                    style={{textDecoration: isLineThrough ? "line-through" : "none"}}
                    onClick={handleLineThrough} key={student.id}>{student.firstName}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default ObjectList;