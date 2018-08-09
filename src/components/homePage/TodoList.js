import React, { Component } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem.js"

class TodoList extends Component {

  render() {
    const allTodos = this.props.allTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)
    return (
      <div className="todoList">
        {allTodos}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    allTodos: state.todo.allTodos
});


export default connect(
    mapStateToProps,
    null,
)(TodoList);