import React from 'react';

function Task(props){
  const todo = props.todo;
  const completeTask = props.completeTask;

  return (<li>
    {todo.text} 
    <button onClick={completeTask}>
      Done
    </button>
  </li>);
}

export default Task;
