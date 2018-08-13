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
      isFocused: false
    }
  }
  handleChange = (ev) => {
    const newState = this.state
    newState[ev.target.name] = ev.target.value
    this.setState(newState)
  }
  submitForm = (ev) => {
    ev.preventDefault()
    const newTodo = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate
    }
    this.props.postToDo(newTodo)
    this.setState({
      title: "",
      description: "",
      dueDate: "",
      isFocused: false
    })
  }
  render() {
    return (
      <div className="todoForm">
        <input
          className="input titleInput"
          name="title"
          placeholder="add another task..."
          value={this.state.title}
          onChange={this.handleChange}
          onFocus={() => this.setState({...this.state, isFocused: true})}
          autoComplete= "off"
        />
        {this.state.isFocused &&
          <div className="focusedForm animated fadeIn faster">
            <input
              className="input descriptionInput"
              name="description"
              placeholder="description"
              value={this.state.description}
              onChange={this.handleChange}
              autoComplete= "off"
            />
            <input
              className="input dueDateInput"
              onFocus={e => (e.currentTarget.type = "date")}
              onBlur={e => (e.currentTarget.type = "text")}
              placeholder="due date"
              type="text"
              name="dueDate"
              onChange={this.handleChange}
            />
            <button className="submitBtn" onClick={this.submitForm}>create task</button>
          </div>
        }
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