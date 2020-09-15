import React, { useState, useEffect } from 'react';

// class CreateTaskInput extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: "",
//     }
//   }

//   handleChangeInputValue = (e) => {
//     const { value } = e.target;
//     this.setState({
//       value,
//     })
//   }

//   handleTaskCreate = () => {
//     if (this.state.value !== "") {
//       this.props.onCreate(this.state.value);
//       this.setState({
//         value: "",
//       })
//     }
//     return null;
//   }

//   render() {

//     return (
//       <div className="create-task">
//         <input className="create-task__input"
//           type="text"
//           name="value"
//           onChange={this.handleChangeInputValue}
//           value={this.state.value}
//         />
//         <button className="btn create-task__btn" onClick={() => {
//           this.handleTaskCreate()
//         }}>Create</button>
//       </div>
//     )
//   }
// }

const CreateTaskInput = ({ onCreate }) => {

  const [state, changeInputValue] = useState({ value: "" });

  const handleChangeInputValue = (e) => {
    const { value } = e.target;
    changeInputValue({
      value,
    })
  }

  const handleTaskCreate = () => {
    if (state.value !== "") {
      onCreate(state.value);
      changeInputValue({
        value: "",
      })
    }
    return null;
  }

  return (
    <div className="create-task">
      <input className="create-task__input"
        type="text"
        name="value"
        onChange={handleChangeInputValue}
        value={state.value}
      />
      <button className="btn create-task__btn"
        onClick={() => { handleTaskCreate() }}
      >Create</button>
    </div>
  )
}

export default CreateTaskInput;