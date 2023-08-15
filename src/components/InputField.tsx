import React from 'react'
import "./style.css"

type TodoProp={
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e:React.FormEvent)=>void
  }
  
const InputField = ({todo,setTodo,handleAdd}:TodoProp) => {

    // const inputRef=useRef<HTMLInputElement>(null);

  return (
    <div>
         <form
      className="input" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Enter a Todo"
        value={todo}
       
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
    </div>
  )
}

export default InputField
