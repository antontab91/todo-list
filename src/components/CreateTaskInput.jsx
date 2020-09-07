import React from 'react';

class CreateTaskInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="create-task">
        <input className="create-task__input" type="text" value="" />
        <button className="btn create-task__btn">Create</button>
      </div>
    )
  }
}

export default CreateTaskInput;