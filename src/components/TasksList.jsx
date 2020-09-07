import React from 'react';
import Task from './Task';

class TasksList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="list">
        <Task />
      </ul>
    )
  }
}

export default TasksList;