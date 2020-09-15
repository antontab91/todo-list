import React from 'react';
import PropTypes from "prop-types";
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

TasksList.propTypes = {
  tasksList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      done: PropTypes.bool,
      id: PropTypes.string,
    })
  ).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};


export default TasksList;