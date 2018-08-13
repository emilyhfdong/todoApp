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
        <h1 className="headerTitle">{this.props.currentCategory ? (this.props.currentCategory.toUpperCase()):(date)}</h1>
        {!this.props.currentCategory &&
          <TodoForm/>
        }
        <SortingButtons/>
        <TodoList/>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
    currentCategory: state.todo.currentCategory
});


export default connect(
    mapStateToProps,
    null,
)(HomePage);