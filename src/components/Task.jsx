import React from 'react';

const Task = ({ id, done, text, onDelete }) => {
  return (
    <li className={`list-item ${done ? "ist-item_done" : ""}`}>
      <input type="checkbox" className="list-item__checkbox" checked={done} />
      {text}
      <button className="list-item__delete-btn" onClick={() => { onDelete(id) }}></button>
    </li>
  )
}

export default Task;