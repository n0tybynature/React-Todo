import React from "react"

class TodoForm extends React.Component{
    


    render(){
        return (
            <form>
                <input type="text" name="todo"></input>
                <button>Add Todo</button>
            </form>
        )
    }
}


export default TodoForm;