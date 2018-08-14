import React, { Component } from 'react';
import {connect} from 'react-redux';

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

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(Todos);
