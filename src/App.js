import React from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"


const todos = [{}]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor (){
    super();
      this.state= {todos}
  }

  handleToggle = (todosId) => {
    this.setState({
      todos: this.state.todos.map(task =>{
        if (todosId === task.id){
          return({
            ...task,
            completed: !task.completed
          });
        } else {
          return task;
        }
      })
    })
  }


  handleAdd = task => {
    this.setState({
      todos:[...this.state.todos, { task: task, id: Date.now(), completed: false}]
    })
  }

  handleClearCompleted = e => {
    e.preventDefault();
    const newTodoList = this.state.todos.filter(item =>{
      return (!item.completed);
    });
    this.setState({
      todos: newTodoList
    })
  }

  render() {
    return (
      <div>
        <h2>To do List: MVP!</h2>
        <TodoList todos={this.state.todos} handleToggle={this.handleToggle}/>
        <TodoForm handleAdd={this.handleAdd} handleClearCompleted={this.handleClearCompleted}/>
      </div>
    );
  }
}

export default App;
