import React, { useEffect, useState } from 'react'
import { v1 as uuid} from 'uuid'


export const TaskListContext= React.createContext()


const TaskListContextProvider=(props)=>{

const initialState=JSON.parse(localStorage.getItem('task'))|| []
   const[tasks,setTasks]=useState(initialState)

   useEffect(() => {
       localStorage.setItem('task',JSON.stringify(tasks))
      
   }, [tasks])


const [editItem, setEditItem] = useState(null)


const findItem=(id)=>{
    const item=tasks.find(task=> task.id===id)
    setEditItem(item)
}

const editTask=(title,id)=>{
const newTask=tasks.map(task=>(task.id===id?{title,id}:task))

setTasks(newTask)
setEditItem('')
}


const addTask=(title)=>{
setTasks([...tasks,{id:uuid(),title}])
}

const removeTask=(id)=>{
setTasks(tasks.filter(task=>task.id!==id))
}

const clearList=()=>{
setTasks([])
}
return (
    <TaskListContext.Provider value={{tasks,addTask,removeTask,clearList,editTask,findItem,editItem}}>
{props.children}
    </TaskListContext.Provider>
)
}
export default TaskListContextProvider