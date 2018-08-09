import React, { Component } from "react";
import { connect } from "react-redux";
import { postToDo } from "../../actions/todoActions.js"

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      dueDate: "",
    }
  }
  handleChange = (ev) => {
    const newState = this.state
    newState[ev.target.name] = ev.target.value
    this.setState(newState)
  }
  submitForm = (ev) => {
    ev.preventDefault()
    console.log("hi")
    const newTodo = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate
    }
    this.props.postToDo(newTodo)
  }
  render() {
    return (
      <div className="todoForm">
        <form >
          <input
            className="titleInput"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            className="descriptionInput"
            name="description"
            placeholder="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <input
            onFocus={e => (e.currentTarget.type = "date")}
            onBlur={e => (e.currentTarget.type = "text")}
            placeholder="due date"
            type="text"
            name="dueDate"
            onChange={this.handleChange}
          />
          <button onClick={this.submitForm}>SUBMIT</button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => ({
    allTodos: state.todo.allTodos
});


export default connect(
    mapStateToProps,
    {postToDo}
)(TodoForm);