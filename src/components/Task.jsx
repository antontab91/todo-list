import React from 'react';

const Task = () => {



  return (
    <li className="list-item">
      <input type="checkbox" className="list-item__checkbox" />
              Learn React
      <button className="list-item__delete-btn"></button>
    </li>
  )

}

export default Task;

// checked = { false}