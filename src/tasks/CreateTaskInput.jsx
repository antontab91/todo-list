import React from 'react';

// const CreateTaskInput = ({ onCreate }) => {
//   return (
//     <div className="create-task">
//       <input className="create-task__input" type="text" value="" />
//       <button className="btn create-task__btn">Create</button>
//     </div>
//   )
// }

class CreateTaskInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    }
  }

  handleChangeInputValue = (e) => {
    const { value } = e.target;
    this.setState({
      value,
    })
  }

  handleTaskCreate = () => {
    if (this.state.value !== "") {
      this.props.onCreate(this.state.value);
      this.setState({
        value: '',
      })
    }
    return null;
  }

  render() {

    return (
      <div className="create-task">
        <input className="create-task__input" type="text" value={this.state.value} onChange={this.handleChangeInputValue} name="value" />
        <button className="btn create-task__btn" onClick={() => {
          this.handleTaskCreate()
        }}>Create</button>
      </div>
    )
  }
}

export default CreateTaskInput;