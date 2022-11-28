import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

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
      if(category === "All"){
        return true
      }
      return task.category === category
    })
  

  console.log('Category state ', category)

  function addTask(taskText, taskCategory) {
    setTask([...tasks, {'text': taskText, 'category': taskCategory}])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} getCategory={setCategory} />
      <NewTaskForm categories={CATEGORIES} getNewTask={addTask} />
      <TaskList TASKS={updatedTask} getTask = {updateTasks}/>
    </div>
  );
  };

export default App;

