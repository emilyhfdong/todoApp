import React, { Component } from "react";
import { connect } from "react-redux";

class TodoItem extends Component {

  render() {
    return (
      <div className="todoItem">
        <p>{this.props.todo.title}</p>
      </div>
    )
  }
}


export default connect(
    null,
    null,
)(TodoItem);