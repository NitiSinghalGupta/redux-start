import React, { Component } from 'react'
import Todos from './Todos'
import TodoForm from './TodoForm'

class App extends Component {

  // state = {
  //   todos: [
  //     {
  //       id: 0,
  //       task: 'Test this Todo Page',
  //       completed: false
  //     },
  //     {
  //       id: 1,
  //       task: 'Learn Redux',
  //       completed: false
  //     },
  //     {
  //       id: 2,
  //       task: 'Learn React',
  //       completed: true
  //     }
  //   ]
  // }

  

  handleSubmit = (newTodo) => {
    // console.log(newTodo);
    newTodo.id = this.state.todos.length;
    this.setState({
      todos:[...this.state.todos, newTodo]
    })
  }

  render () {
    return (
      <div className="App">
        <h1>Redux TODOS!</h1>
        <TodoForm h andleSubmit= {this.handleSubmit}/>
        <Todos data={this.state.todos}/>
      </div>
    )
  }
}

export default App
