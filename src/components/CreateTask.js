import React from 'react';

function CreateTask(props){
    return (        
      <div>
        <input value={props.value} onChange={props.onChange} />
        <button onClick={props.addTask}>Add Task</button>
      </div>
      )
}

export default CreateTask;
