import React from 'react';
import CreateTaskInput from './CreateTaskInput';
import TasksList from './TasksList';
import { fetchTasksList, createTask, deleteTask, updateTask } from './tasks.gateway'
import { connect } from 'react-redux';
import *as tasksActions from './tasks.actions';
import { tasksListSelector } from './tasks.selectors';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: this.props.state,
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

  handleTaskDelete = (taskId) => {
    return deleteTask(taskId)
      .then(() => {
        this.loadTasksList();
      })
  }

  handleTaskCreate = (text) => {
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

  handleTaskStatusChange = (taskId) => {
    const { tasks } = this.state;
    const task = tasks.find((task) => {
      return task.id === taskId;
    })

    const taskData = {
      ...task,
      done: !task.done,
    }

    updateTask(taskId, taskData)
      .then(() => {
        this.loadTasksList()
      })
  }

  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list" >
          <CreateTaskInput onCreate={this.handleTaskCreate} />
          <TasksList
            tasksList={this.state.tasks}
            onDelete={this.handleTaskDelete}
            onUpdate={this.handleTaskStatusChange}
          />
        </main>
      </>
    )
  }
}

const mapState = (state) => {
  return {
    state: tasksListSelector(state),
  }
}

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
}

const connector = connect(mapState, mapDispatch);
const connectedTodoList = connector(TodoList);

export default connectedTodoList;