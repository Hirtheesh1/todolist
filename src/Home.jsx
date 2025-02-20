import React, { useState } from 'react'
import Create from './Create'
import './home.css'
export default function Home() {
    const[todos,setTodos]=useState([])
  return (
    <div className='home'>
        <h2>Todo List</h2>
        <Create/>
        {
            todos.length===0 
            ?
            <div><h2>No Records</h2></div>
            :
            todos.map(todo=>{
                <div>
                    {todo}


                </div>
            })
        }

    </div>
  )
}
