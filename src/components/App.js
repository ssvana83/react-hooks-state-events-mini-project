import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTask] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function updateTasks(selectedTask) {
    const updateTaskList = tasks.filter((task) => task.text !== selectedTask)
    setTask(updateTaskList)
  }

  function selectedCategory(category) {
    setCategory(category)
  }

  const updatedTask = tasks.filter((task) => {
    if (category === "All") {
      return true
    }
    return task.category === category
  })

  function addTask(taskText, taskCategory) {
    setTask([...tasks, { 'text': taskText, 'category': taskCategory }])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} getCategory={setCategory} />
      <NewTaskForm categories={CATEGORIES} getNewTask={addTask} />
      <TaskList TASKS={updatedTask} getTask={updateTasks} />
    </div>
  );
};

export default App;

