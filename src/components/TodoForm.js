import React, { Component } from 'react'

class TodoForm extends Component {
  state = {
    newTodo: ''
  }

  handleChange = (event) => {
    console.log(event.target.value)
   this.setState({ newTodo: event.target.value })

  }

  onSubmit = (event) => {
    event.preventDefault();
    let newTodo = {};
    newTodo.task = this.state.newTodo;
    newTodo.completed = false;
    this.props.handleSubmit(newTodo);
    this.setState({newTodo: ''});

  }

  // addTodo = (event) => {
  //   return <li>{todonew}</li>
  // }

  render () {
    return (
      <div>
       <form onSubmit={this.onSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.newTodo}
        />
        <button >Add Todo</button>
        </form> 
      </div>
    )
  }

}

export default TodoForm
