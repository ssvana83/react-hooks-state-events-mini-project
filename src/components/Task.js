import React from "react";

function Task({ text, category, getNewTask }) {

  function handleClick(){
    getNewTask(text)
  }
  
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;

// original inside function
// const handleDelete = (e) => {
//   let parentElement = e.target.parentElement
//   parentElement.remove();
// }
