import React from "react"

class TodoForm extends React.Component{
    
    constructor (){
        super();
        this.state = {
          id:'',
          textInput:'',
          completed: false,
        }
      }

      handleChange = e => {
          this.setState({
              textInput: e.target.value
          })
      }

      handleSubmit = e => {
          e.preventDefault();
          this.props.handleAdd( this.state.textInput);
          this.setState({
              textInput:'',
          })
      }

    render(){
        return (
            <form>
                <input type="text" name="task" value={this.state.textInput} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Add to do</button>
                <button onClick={this.props.handleClearCompleted}>Remove to do</button>
            </form>
        )
    }
}


export default TodoForm;