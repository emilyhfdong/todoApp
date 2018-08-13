import React, { Component } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem.js"

class TodoList extends Component {
  compareDueDate = (a, b) => {
    if (a.dueDate < b.dueDate) {
      return -1;
    } else {
      return 1;
    }

  }

  render() {
    const sortedTodos = this.props.allTodos.sort(this.compareDueDate)
    const allTodos = sortedTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)
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