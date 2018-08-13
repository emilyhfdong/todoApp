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
    let allTodos = this.props.allTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)
    if (this.props.currentCategory) {
      allTodos = this.props.filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)
    }
    return (
      <div className="todoList">
        {allTodos}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    allTodos: state.todo.allTodos,
    currentCategory: state.todo.currentCategory,
    filteredTodos: state.todo.filteredTodos
});


export default connect(
    mapStateToProps,
    null,
)(TodoList);