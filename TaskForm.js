import React, { useContext, useState,useEffect } from 'react'
import { TaskListContext } from '../Context/TaskListContext'


const TaskForm = () => {
    const {addTask,clearList,editTask,editItem} = useContext(TaskListContext)
    const [title, setTitle] = useState('')

    useEffect(()=>{
        if(editItem){
            setTitle(editItem.title)
            
        }
        else
        setTitle('')

    },[editItem])

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!editItem){
            addTask(title)
            setTitle('')

        }
else{
    editTask(title,editItem.id)

    setTitle('')

}
    } 

    const handleChange=(e)=>{
    
        setTitle(e.target.value)
        // console.log(title)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type='text' placeholder='add task' value={title}  onChange={handleChange} required/>
            <button type='submit' className='btn btn-secondary ml-5 ' >{editItem ?'Update Task ':'Add task'}</button>
            <button type='reset' className='btn btn-light ml-3' onClick={clearList}>  clear </button>

                </form>            
        </div>
    )
}

export default TaskForm
