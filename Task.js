import React, { useContext } from "react";
import { TaskListContext } from "../Context/TaskListContext";

function Task({ task }) {
const {removeTask,findItem} = useContext(TaskListContext)

  return (
    <li className="list-item">
      <div>
        <span> {task.title}</span>
        <button onClick={()=>removeTask(task.id)} className="btn btn-danger  ml-5"> Delete </button>
        <button onClick={()=>findItem(task.id)} className="btn btn-success ml-3"> Edit </button>
      </div>
    </li>
  );
}

export default Task;
