import React from 'react';
import Task from './Task';

const TasksList = ({ tasksList, onDelete }) => {

  return (
    <ul className="list">
      {tasksList.map((task) => {
        return <Task
          key={task.id}
          onDelete={onDelete}
          {...task}
        />;
      })}
    </ul>
  )
}

export default TasksList;