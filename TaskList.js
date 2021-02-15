import React,{useContext} from 'react'
import {TaskListContext} from '../Context/TaskListContext'
import Task from './Task'


const TaskList = () => {
  const{tasks}= useContext(TaskListContext)
    return (
        <div>
            {
                tasks.length?(
                    <ul className="list">
                    {
                        tasks.map(task=>{
                            return <Task task={task} key={task.id}/>
                        })
                    }
                    </ul>   
                ):<h3> No tasks  </h3>
            }
        
        
        </div>
    )
}

export default TaskList
