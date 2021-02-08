// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"


export default function TodoList(props){
    return (
        <div className="todolist">
            {props.todos.map( todo => (
                <Todo key={todo.id} todo={todo}/>
            ))}
            

        </div>

    )
}