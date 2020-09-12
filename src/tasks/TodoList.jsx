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

  handleDeleteTask = (taskId) => {
    return deleteTask(taskId)
      .then(() => {
        this.loadTasksList();
      })
  }

  handleCreateTask = (text) => {
    const taskData = {
      text,
      done: false,
      createdAt: new Date().toISOString(),

    };
    createTask(taskData)
      .then(() => {
        this.loadTasksList();
      })
  }

  handleUpdateTask = (taskId) => {
    const { text, done } = this.state.tasks.find((task) => {
      return task.id === taskId;
    })

    const taskData = {
      text,
      done: !done,
    }

    updateTask(taskId, taskData)
      .then(() => {
        this.loadTasksList()
      })
  }

  render() {

    return (
      <main className="todo-list" >
        <CreateTaskInput onCreate={this.handleCreateTask} />
        <TasksList
          onDelete={this.handleDeleteTask}
          onUpdate={this.handleUpdateTask}
          tasksList={this.state.tasks}
        />
      </main>
    )
  }
}

export default TodoList;