import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'


const todos = [
  {
    name: 'Make Lots of Coffee',
    id: 1,
    completed: false
  },
  {
    name: 'Walk Puppers',
    id: 2,
    completed: false
  },
  {
    name: 'Practice React Stuff',
    id: 3,
    completed: false
  },
  {
    name: 'Make Neighbors Deaf While Singing Frozen',
    id: 4,
    completed: false
  },

];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoItem: todos
    };
  }

  toggleItem = todosId => {
    this.setState({
     
      todoItem : this.state.todoItem.map(item => {
      if (item.id === todosId) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    })
    
    
    });
  };
  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoItem: [...this.state.todoItem, newItem]
    });
  };

  clearItem = completed => {
    const newListCleared = this.state.todoItem.filter(item => 
      item.completed === false
    )
    this.setState({
      todoItem: newListCleared
    });
  }

  render() {
    return (
      
      <div className= "App">
        <div className ="header">
        <h2>Do You Wanna Build A Snowman?</h2>
        <TodoList addItem={this.addItem}  />
        </div>
        <TodoForm todos={this.state.todoItem} toggleItem={this.toggleItem} clearItem={this.clearItem}  />
       </div>
    
    );
  }
}

export default App;

