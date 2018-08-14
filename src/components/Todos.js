import React, { Component } from 'react';

class Todos extends Component {
  
  render () {
    return (
      <div>
        <ul>
          {this.props.data.map(todo => (
            <li key={todo.id}>{todo.task}: {todo.completed.toString()}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Todos
