import React from "react";
import Task from "./Task";


function TaskList({ TASKS, getTask }) {

  return (
    <div className="tasks">
      {TASKS.map((task) => (<Task key={task.text} text={task.text} category={task.category} getNewTask={getTask}></Task>))}
    </div>
  );
}

export default TaskList;

