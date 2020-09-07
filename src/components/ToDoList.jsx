import React from 'react';
import CreateTaskInput from './CreateTaskInput';
import TasksList from './TasksList';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="root">
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput />
          <TasksList />
        </main>
      </div>
    )
  }
}

export default ToDoList;