import { from } from 'core-js/fn/array';
import React from 'react';
import TodoList from './tasks/TodoList';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  )
}

export default App;