import React from 'react';
import Task from './Task';


const TasksList = ({ tasksList, onDelete, onUpdate }) => {

  return (
    < ul className="list" >
      {
        tasksList.map((task) => {
          return <Task
            key={task.id}
            onDelete={onDelete}
            onUpdate={onUpdate}
            {...task}
          />;
        })
      }
    </ul >
  )
}

export default TasksList;