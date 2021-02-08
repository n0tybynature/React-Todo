import React, {useState} from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import Todo from "./components/Todo"

const todos = [
  {
    
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // constructor (){
  //   super();
  //   this.state = {
  //     todolist={todos}
  //   }
  // }

  handleItemToggle = () => {
    const newTodo = this.state.todolist
    newTodo[0].done = true;
    this.setState({
      todolist: newTodo
    })
  }


  render() {
    return (
      <div>
        <h2>Todo List: MVP!</h2>
        <TodoForm/>
      </div>
    );
  }
}

export default App;
