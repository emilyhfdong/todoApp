import React, { Component } from "react";
import { connect } from "react-redux";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import SortingButtons from "./SortingButtons.js";
import SideBar from "./SideBar.js";


class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: ""
    }
  }
  getDate = () => {
    let today = Date().split(" ");
    today.splice(4);
    let todayStr = today.join(" ");
    return todayStr
  }
  componentDidMount () {
    console.log(this.getDate())
  }

  render() {
    const date = this.getDate()
    return (
      <div className="homePage">
        <SideBar/>
        <div className="homeContents">
        <h1 className="headerTitle">{date}</h1>
        <TodoForm/>
        <SortingButtons/>
        <TodoList/>
        </div>
      </div>
    )
  }
}


export default connect(
    null,
    null
)(HomePage);