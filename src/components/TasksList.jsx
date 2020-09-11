import React from 'react';
import Task from './Task';

const TasksList = ({ tasksList, onDelete, onUpdate }) => {

  const sortTasksList = tasksList.slice().sort((a, b) => {
    // debugger;
    // console.log(a.done - b.done !== 0)
    if (a.done - b.done !== 0) {
      return b.done - a.done;
    }
    return new Date(a.createdAt) - new Date(b.createdAt);
  })


  return (
    <ul className="list">
      {sortTasksList.map((task) => {
        return <Task
          key={task.id}
          onDelete={onDelete}
          onUpdate={onUpdate}
          {...task}
        />;
      })}
    </ul>
  )
}

export default TasksList;