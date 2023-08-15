import React from 'react'
import "./style.css"
import { Todo } from './model'
import SingleTodo from './SingleTodo';

type TodosProps={
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos,setTodos}:TodosProps) => {

console.log("my todos",todos)

  return (
    <div className='todos'>
      {
todos.map((todo)=>(
<SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
))}
    </div>
  )
}

export default TodoList
