import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="list-item">
        <input type="checkbox" className="list-item__checkbox" />
              Learn React
        <button className="list-item__delete-btn"></button>
      </li>
    )
  }
}

export default Task;

// checked = { false}