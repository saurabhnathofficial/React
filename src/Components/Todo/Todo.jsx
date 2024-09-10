import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function Todo() {

    let [todos, setTodos] = useState([{task: "Sample Task", id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos, newTodo])
    }
    let deleteTodo = (index) => {
        console.log(index)
    }
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
        // console.log(event.target.value)
    }
    return (
        <div className='h-3/4 w-1/2 bg-zinc-100 rounded-sm p-4 flex flex-col gap-3'>
            <div className="text-4xl font-bold justify-center flex border-2">
                <p>ToDo</p>

            </div>
            <div className="flex justify-between gap-4 ">
                <input className='text-sm p-2 bg-zinc-500 rounded w-full' type="text" placeholder='Enter a Task' value={newTodo} onChange={updateTodoValue} />
                <button onClick={addNewTask} className='w-40 font-semibold px-4 py-2 bg-sky-500 rounded text-sm'>Add Task</button>
            </div>

            <div className="w-full h-full bg-zinc-300 text-xl font-semibold capitalize p-2 ">
                <ol className=''>
                    {todos.map((todo, index) => (
                        <li key={index} className='flex gap-3 mb-2 justify-between border-2 border-orange-200 px-4 py-1'>
                            <span>{todo}</span>
                            <button onClick={deleteTodo(index)} className='font-semibold px-2 py-1 bg-red-300 rounded text-sm'>Delete</button>
                        </li>

                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Todo