import React from "react"
import './Todo.css'

class Todo extends React.Component {
    handleCLick = e => {
        this.props.handleToggle(this.props.task.id)
    }

    render(){
    return (
        <div onClick={this.handleCLick}>
            <p className= {this.props.task.completed ? 'done': ""}>{this.props.task.task}</p>
            </div>
    )}
}

export default Todo;