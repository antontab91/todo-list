import React from 'react';

const Task = ({ id, done, text, onDelete, onUpdate }) => {
  return (
    <li className={`list-item ${done ? "list-item_done" : ""}`}>
      <input type="checkbox" className="list-item__checkbox" checked={done} onChange={() => { onUpdate(id) }} />
      <span className="list-item__text">
        {text}
      </span>
      <button className="list-item__delete-btn" onClick={() => { onDelete(id) }}></button>
    </li>
  )
}

export default Task;