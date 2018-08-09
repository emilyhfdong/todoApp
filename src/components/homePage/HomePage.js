import React, { Component } from "react";
import { connect } from "react-redux";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";


class HomePage extends Component {

  render() {
    return (
      <div className="homePage">
        <TodoForm/>
        <TodoList/>
      </div>
    )
  }
}


export default connect(
    null,
    null
)(HomePage);