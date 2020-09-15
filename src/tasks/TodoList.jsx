import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import CreateTaskInput from './CreateTaskInput';
import TasksList from './TasksList';
import *as tasksActions from './tasks.actions';
import { sortedTasksListSelector } from './tasks.selectors';

// class TodoList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     this.props.getTasksList()
//   }

//   render() {
//     return (
//       <>
//         <h1 className="title">Todo List</h1>
//         <main className="todo-list" >
//           <CreateTaskInput onCreate={this.props.createTask} />
//           <TasksList
//             tasksList={this.props.state}
//             onDelete={this.props.deleteTask}
//             onUpdate={this.props.updateTask}
//           />
//         </main>
//       </>
//     )
//   }
// }


const TodoList = ({ state, createTask, updateTask, deleteTask, getTasksList }) => {

  useEffect(() => {
    getTasksList();
  }, []);

  return (
    <>
      <h1 className="title">Todo List</h1>
      <main className="todo-list" >
        <CreateTaskInput onCreate={createTask} />
        <TasksList
          tasksList={state}
          onDelete={deleteTask}
          onUpdate={updateTask}
        />
      </main>
    </>
  )
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  getTasksList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
};

const mapState = (state) => {
  return {
    state: sortedTasksListSelector(state),
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