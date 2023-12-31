import React, { useState } from 'react';
import InputField from './components/InputField';
import './App.css';
import { Todo } from './components/model';
import TodoList from './components/TodoList';

function App() {

const [todo,setTodo]=useState<string>("");
const [todos,setTodos]=useState<Todo[]>([]);

const handleAdd=(e:React.FormEvent)=>{
e.preventDefault();
if(todo){
  setTodos([...todos,{
    id:Date.now(),
    todo:todo,
    isDone:false
  }])
  setTodo("");
}
}
console.log(todos)
  return (
    <div className="App">
 <h1 className="heading"> TODO REACT +TYPESCRIPT</h1>
<InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
<TodoList todos={todos} setTodos={setTodos}/>

    </div>
  );
}

export default App;
