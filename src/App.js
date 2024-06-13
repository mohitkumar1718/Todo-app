import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import { useEffect, useState } from 'react';
import TodoList from './Components/TodoList';

function App() {
  const [input,setInput]=useState("");
  const [list,setList]=useState([]);
  const [editTodo,setEditTodo]=useState(null);
  
  return (
   <div className='text-center w-screen bg-indigo-600 h-screen'>
     <Header/>
     <div className='w-1/2 h-full bg-slate-900 mx-auto rounded-2xl'>
     <Form 
      input={input}
      setInput={setInput}
      list={list}
      setList={setList}
      editTodo={editTodo}
      setEditTodo={setEditTodo}
     />
     <TodoList list={list} setList={setList} setEditTodo={setEditTodo}/>

     </div>
   </div>
  );
}

export default App;
