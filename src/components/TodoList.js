// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React from 'react';

class TodoList extends React.Component {

  constructor() {
    super();
    this.state = {
      todoItem: ''
    };
  }

  handleChanges = e => {
    this.setState({
      todoItem: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.todoItem);
  };



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="item"
          value={this.state.todoItem}
          onChange={this.handleChanges}
        />
        <button>Add</button>


      </form>
    );
  }
}

export default TodoList;