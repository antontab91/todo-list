import React from 'react';
import CreateTaskInput from './CreateTaskInput';
import TasksList from './TasksList';
import { fetchTasksList, createTask, deleteTask, updateTask } from './tasks.gateway'

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    }
  }

  componentDidMount() {
    this.loadTasksList()
  }

  loadTasksList = () => {
    return fetchTasksList()
      .then((tasksList) => {
        this.setState({
          tasks: tasksList,
        })
      });
  }

  render() {

    return (
      <main className="todo-list" >
        <CreateTaskInput />
        <TasksList />
      </main>
    )
  }
}

export default TodoList;