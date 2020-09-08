import React from 'react';
import Task from './Task';
import { getTasksList, deleteTask, createTask, updateTask } from './tasks/tasks.gateway'

class TasksList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    }
  }

  componentDidMount() {
    this.fetchTasksList();
  }

  fetchTasksList = () => {
    return getTasksList()
      .then((tasksList) => {
        this.setState({
          tasks: tasksList
        })
      })
  }

  handleChangeTask = () => {
    return updateTask()
  }

  render() {
    const { tasks } = this.state;
    const sortTasks = [...tasks].sort((a, b) => {
      return a.done - b.done;
    })
    // if (!sortTasks) {
    //   return null;
    // }
    return (
      <ul className="list">
        {sortTasks.map((task) => {
          return <Task key={task.id} {...task} />
        })}
      </ul>
    )
  }
}

export default TasksList;