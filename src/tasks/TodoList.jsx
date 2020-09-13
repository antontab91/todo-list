import React from 'react';
import CreateTaskInput from './CreateTaskInput';
import TasksList from './TasksList';
import { connect } from 'react-redux';
import *as tasksActions from './tasks.actions';
import { tasksListSelector } from './tasks.selectors';

class TodoList extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    this.props.getTasksList()
  }



  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list" >
          <CreateTaskInput onCreate={this.props.createTask} />
          <TasksList
            tasksList={this.props.state}
            onDelete={this.props.deleteTask}
            onUpdate={this.props.updateTask}
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
  createTask: tasksActions.createTask,
  deleteTask: tasksActions.deleteTask,
  updateTask: tasksActions.updateTask,
}

const connector = connect(mapState, mapDispatch);
const connectedTodoList = connector(TodoList);

export default connectedTodoList;