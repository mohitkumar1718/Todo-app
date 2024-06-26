import {React, useEffect} from 'react'
import { v4 } from 'uuid';

const Form = ({input,setInput,list,setList ,editTodo, setEditTodo}) => {
    
    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title);
        }
        else{
            setInput("")
        }
    },[setInput,editTodo])
    
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('list'));
        if (storedTasks) {
            setList(storedTasks);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);
    const onInputChange=(e)=>{
        setInput(e.target.value);

    };
    const updateTodo=(title,id)=>{
        const newTodo= list.map((todo)=>{
            if(todo.id===id)return {title,id};
            else{return todo}
        })
        setList(newTodo);
        setEditTodo("");

    }
        
    const onFormSubmit=(e)=>{
        e.preventDefault();
        if(input){

            if(!editTodo){
                
                setList([...list ,{id:v4(),title:input,completed:false}])
            setInput('');
        }else{
            updateTodo(input,editTodo.id);
        }
    }
    }
  return (
    
    <form
    onSubmit={onFormSubmit} 
    className='p-2 mx-auto mt-10 bg-indigo-700 text-start justify-between flex ' action="">
        <input 
        value={input} 
        onChange={onInputChange} 
        className='w-4/5  h-10 bg-stone-900 text-white px-2 rounded-l-xl' 
        type="text" 
        placeholder='Enter Todo task here' />
        <button className=' w-1/5  bg-rose-600 text-white h-10 px-2 rounded-r-lg '>ADD</button>
    </form>
  )
}

export default Form