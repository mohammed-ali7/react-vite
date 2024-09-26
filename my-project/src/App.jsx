import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos]= useState([]);
  const inputRef = useRef()
  const handleAddTodo =()=>{
  const text =inputRef.current.value;
  const newItem ={completed:false,text}
  setTodos([...todos,newItem])
  inputRef.current.value="";
  };
  const handleItemDone=(index)=> {
  const newTodos = [...todos]
   newTodos[index].completed=!newTodos[index].completed
   setTodos(newTodos)
  }
    
  return (
  
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-400 to-purple-500  items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-11">
     <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">To-Do List</h1>

    <div className="space-x-4">

    <input className="py-2 text-center border-2 border-zinc-500" ref={inputRef} placeholder="Enter Task"/> 
    <button className="bg bg-sky-300 py-2 px-7" onClick={handleAddTodo}>Add</button>
    <ul className="cursor-pointer mt-6 rounded-md">
     {todos.map(({text,completed},index)=>{
       return <li className={completed?"done":""} key={index} onClick={()=> handleItemDone(index)}><span className=" ">
       {completed ? '✅' : '👉'}
     </span>{text}</li>;
     })}
    </ul>
  </div> 
  </div>
  </div>
  );
}
 
export default App;
  