import React, { Component } from "react";
import { connect } from "react-redux";
import { createCategory, changeCategory } from "../../actions/todoActions.js";


class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      createMode: false,
      newCategory: ""
    }
  }
  newCategory = () => {
    this.setState({createMode: true})
  }
  submitCategory = (ev) => {
    if (ev.keyCode === 13) {
      this.props.createCategory(this.state.newCategory)
      this.setState({
        newCategory: "",
        createMode: false
      })
    }
  }
  handleChange = (ev) => {
    this.setState({
      ...this.state,
      newCategory: ev.target.value
    })
  }
  handleCategoryChange = (ev) => {
    this.props.changeCategory(ev.target.innerHTML)
  }
  showAll = () => {
    this.props.changeCategory("")
  }

  render() {
    const allCategories = this.props.categories.map(category => <p onClick={this.handleCategoryChange} className="category">{category}</p>)
    return (
      <div className="sideBar">
        <p onClick={this.showAll} className="allTasks">ALL TASKS</p>
        {allCategories}
        {this.state.createMode ? (
          <input onChange={this.handleChange} onKeyDown={this.submitCategory}/>
          ):(
          <p onClick={this.newCategory} className="newCategoryBtn"><i className="fa fa-plus"></i></p>
        )}
      </div>
    )
  }
}



const mapStateToProps = state => ({
    categories: state.todo.categories
});


export default connect(
    mapStateToProps,
    { createCategory, changeCategory },
)(SideBar);