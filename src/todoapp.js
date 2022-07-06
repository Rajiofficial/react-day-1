import { useState } from "react"

function TodoApp({todochange}){
    const[inputval, setinputval]=useState("")

const handleinputchange=(r)=>{
    setinputval(r.target.value)
}
const handlesubmit=()=>{
    todochange(inputval)
    setinputval("")
}

    return(
   <>
<input value={inputval}    onChange={handleinputchange}/>
<button onClick={handlesubmit}>submit</button>
</>
    )
}
export default TodoApp;