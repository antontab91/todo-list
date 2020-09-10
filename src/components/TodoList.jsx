import React from 'react';
import CreateTaskInput from './CreateTaskInput';
import TasksList from './TasksList';

const TodoList = () => {
  return (
    <main className="todo-list">
      {/* <!-- CreateTaskInput --> */}
      <CreateTaskInput />
      {/* <!-- TasksList --> */}
      <TasksList />
    </main>
  )
}

export default TodoList;