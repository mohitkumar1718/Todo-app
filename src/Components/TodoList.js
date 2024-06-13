import React from 'react'

const TodoList = ({list,setList, setEditTodo}) => {
    const handleDelete=({id})=>{
        setList(list.filter((todo)=>todo.id!==id))
    }
    const handleEdit=({id})=>{
       const findTodo=list.find((todo)=>todo.id===id);
       setEditTodo(findTodo);
    }
  return (
    <div className='p-2'>
        {
            list.map((todo)=>{
                return (
                    <li key={todo.id} className='list-none w-full h-10 my-auto mt-3 px-5 ' >
                        <input className=' p-2 w-3/5 rounded-lg' type="text" name="" value={todo.title} onChange={(e)=>e.preventDefault()} id="" />
                        <button className='bg-green-600 p-2 mx-2 rounded-lg' onClick={()=>handleEdit(todo)}>EDIT</button>
                        <button className='bg-red-500 p-2 rounded-lg ' onClick={()=>handleDelete(todo)}>DELETE</button>
                    </li>
                )
            })
        }
    </div>
  )
}

export default TodoList